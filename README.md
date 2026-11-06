#Smart Irrigation Dashboard

#Project Overview

The Smart Irrigation Dashboard is a simple web-based application designed to monitor soil moisture and temperature and control a water pump. It helps users understand the soil condition and manage the irrigation process easily through a user-friendly dashboard.

This project is developed as a software-based application. No physical sensors, motors, or other hardware components are required. The sensor values are simulated for demonstration purposes.

#Technologies Used

- HTML: Used to create the structure of the dashboard.
- CSS: Used to design the dashboard and make it attractive and user-friendly.
- JavaScript: Used to update the sensor readings, display soil conditions, and control the water pump.
- Backend: Used to process the application data and handle communication between the dashboard and its services.

#Main Features

1. Displays soil moisture levels in percentage.
2. Shows temperature readings in degrees Celsius.
3. Displays soil conditions as Dry or Normal.
4. Provides a button to switch the water pump ON or OFF.
5. Automatically updates the dashboard with new readings.
6. Provides a simple and user-friendly interface.

#How the Project Works

When the user opens the dashboard, the application displays the soil moisture and temperature readings.

The JavaScript code updates the readings automatically. If the soil moisture level falls below 40%, the dashboard displays the soil condition as Dry. Otherwise, it displays Normal.

Users can also control the water pump using the ON/OFF button. When the pump is switched ON, the simulated soil moisture level increases. When it is switched OFF, the moisture level gradually decreases.

#Project Structure

Smart-Irrigation-Dashboard/
│
├── index.html
├── style.css
├── script.js


#Project Benefits

- Easy to use and understand.
- Helps users monitor soil conditions.
- Provides simple water pump control.
- Demonstrates how a smart irrigation system works.
- Useful for learning web development and basic IoT concepts.

#Limitations

- Sensor readings are simulated and not collected from real sensors.
- The project does not use physical hardware.
- Data is not permanently stored.
- The application is developed mainly for learning and demonstration purposes.

#Conclusion

The Smart Irrigation Dashboard demonstrates how web technologies can be used to monitor soil moisture, temperature, and control a water pump. This project helped me improve my knowledge of HTML, CSS, JavaScript, and web application development. It also gave me a basic understanding of how smart irrigation systems can help manage water efficiently.
