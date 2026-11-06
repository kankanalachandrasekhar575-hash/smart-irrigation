const POLL_MS = 3000;
const moistureEl = document.getElementById("moisture");
const temperatureEl = document.getElementById("temperature");
const pumpStatusEl = document.getElementById("pump-status");
const soilBadgeEl = document.getElementById("soil-badge");
const thresholdEl = document.getElementById("threshold-note");
const pumpBtn = document.getElementById("pump-btn");
const messageEl = document.getElementById("message");
let pumpIsOn = false;
let pumpRequestInProgress = false;

function showMessage(text, isError = false) {
  messageEl.textContent = text;
  messageEl.classList.toggle("error", isError);
}

function render(data) {
  if (pumpRequestInProgress) return;
  moistureEl.textContent = data.soil_moisture;
  temperatureEl.textContent = data.temperature;
  pumpIsOn = data.pump_status === "ON";
  pumpStatusEl.textContent = data.pump_status;
  pumpStatusEl.className = "pump " + (pumpIsOn ? "on" : "off");
  soilBadgeEl.textContent = data.soil_status;
  soilBadgeEl.className = "badge " + data.soil_status.toLowerCase();
  thresholdEl.textContent = "Dry means moisture below " + data.dry_threshold + "%";
  pumpBtn.textContent = pumpIsOn ? "Turn Pump OFF" : "Turn Pump ON";
  pumpBtn.classList.toggle("turn-off", pumpIsOn);
  pumpBtn.disabled = false;
}

async function loadStatus() {
  if (pumpRequestInProgress) return;
  try {
    const res = await fetch("/api/status");
    if (!res.ok) throw new Error("Server returned " + res.status);
    render(await res.json());
  } catch (err) {
    showMessage("Could not load data: " + err.message, true);
  }
}

async function togglePump() {
  if (pumpRequestInProgress) return;
  pumpRequestInProgress = true;
  pumpBtn.disabled = true;
  try {
    const res = await fetch("/api/pump", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_on: !pumpIsOn }),
    });
    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.error || "Request failed");
    showMessage(data.message);
    pumpRequestInProgress = false;
    await loadStatus();
  } catch (err) {
    showMessage("Pump error: " + err.message, true);
    pumpRequestInProgress = false;
    pumpBtn.disabled = false;
  }
}

pumpBtn.addEventListener("click", togglePump);
loadStatus();
setInterval(loadStatus, POLL_MS);