const data = {
    "brief" : "VARUN' was the first Autonomous Underwater Vehicle developed by Team AUV-IITK. Varun participated in several competitions like NIOT SAVe. The vehicle consisted of a central pressure hull along with separate enclosures for the sensors and pneumatic valves. Varun had been equipped with two cameras to provide it with vision, an Inertial Measurement Unit for navigation and orientation, and a depth sensor to enable it to conquer greater depths. Varun could drop markers and fire torpedoes underwater.",

    "specsTable" : [
        {
            "name": "Mass (in air)",
            "spec": "27.510Kg"
        },
        {
            "name": "Cameras",
            "spec": "Two Logitech C270 cameras for 1080px video feed"
        },
        {
            "name": "Operation time",
            "spec": "4 hours of continuous operation capability and capable of underwater inspection and data collection."
        },
        {
            "name": "Processor",
            "spec": "Ordroid X2 processor with Samsung Exynyos 4412 chip and 2GB RAM"
        },
        {
            "name": "Something",
            "spec": "6 AUV/ROV BTD-150 Seabotix Inc. Thrusters. 5 Degrees of Freedom"
        }
    ],
    "mechanical": [
        {
            "id": 1,
            "title": "Frame Design",
            "content": "Varun's frame mainly consists of two aluminium sheet side plates, to which several structural supports and parts were joined. The side plates have been optimized to reduce the weight of the side plates without creating any critical stress points. The distance between the two side plates is approximately 52 cm, ensuring a sturdy shape to the vehicle."
        },
        {
            "id": 2,
            "title": "Main Pressure Hull",
            "content": "A crucial part of Varun, the pressure hull, provides the housing for all the vehicle's electronic components, such as the micro-controllers, microprocessor, and other circuitries. Fabricated at Concorde Engineering at Bangalore, India, the hull is made out of an acrylic cylindrical tube so that the contents are visible from outside, with aluminium end flanges. The visibility from outside helps to troubleshoot from the mere inspection if mishaps occur while testing."
        },
        {
            "id": 3,
            "title": "Customized Waterproof Casings",
            "content": "Independent casings were designed for the front and lower cameras, as well as for the solenoid valves. Similar to the pressure hull, a face seal using O-rings of appropriate size were used to make the casings waterproof. The camera casings have an aluminium tube welded to the respective structure plate. An acrylic lid covers the front end of the enclosures for clear visibility."
        },
        {
            "id": 4,
            "title": "Waterproof Connector",
            "content": "In order to connect the electronic components with the thrusters, pneumatic system and sensor system, the connectors need to provide a leak-free interface. There are a total of 12 custom-designed waterproof connectors on the main pressure hull's front flange. The connectors use two bore seals for waterproof sealing. An in-house three-dimensional printing facility was used to manufacture the leak-proof USB connectors."
        },
        {
            "id": 5,
            "title": "Thrusters",
            "content": "Varun uses six AUV/ROV BTD-150 thrusters from SeaBotix® Inc. The actuators are positioned to provide the vehicle with a total of five degrees of freedom. The two thrusters mounted on the side plates ensure translation motion while the other four thrusters' assembly provides sway and vertical motion along with yaw and pitch. According to the data collected for the thruster calibration, a 100W thruster develops over two kg-force forward thrusts and up to two kg-force reverse thrusts."
        },
    ],
    "electrical": [
        {
            "id":1,
            "title": "Battery Management System",
            "content": "Varun uses a 14.2V (4 cell - 5200mAh) Lithium polymer battery to power its components. Power in Varun is distributed in two lines of 5V and 12V, capable of supplying 3A and 40A at maximum load. DC-DC converters are used to supply and regulate these lines. A monitoring circuit monitors the voltage and current drawn from the battery and cuts off the lines if the current drawn from the battery is too large or if the battery voltage falls below a certain level. A Hall effect based sensing module measures the currents drawn from different components. An LCD shows all the battery-related information and alerts to the end-user. An eight-bit microcontroller solely dedicated to battery management tasks controls the entire power system. A cell balancing system ensures that each cell of the battery discharges at a rate similar to other cells to ensure longer battery life. An on-board battery charging system enables charging of the battery without having to take it out each time."
        },
        {
            "id":2,
            "title": "Processor",
            "content": "Odroid is the primary processor that hosts the Operating System (Ubuntu 14.04) and acts as the robot's brain. It acts as an interface for all the sensors. After processing the input, the processor sends the output to the micro-controller, which control the actuators. A powerful processor is required with ROS (Robot Operating System), image processing, and many real-time computing tasks to be performed. Odroid U3, manufactured by Hardkernel, is a highly compact processor with dimensions 83 x 48 mm. Its key features include 1.7 GHz Quad-core ARM cortex-A-9 MP Core Samsung Exynos 4412 Processor, 2GB RAM, 3 x High-speed USB 2.0 ports and 10/100 Mbps Ethernet with RJ-45 LAN jack."
        },
        {
            "id":3,
            "title": "Motor Drivers",
            "content": "Varun uses Measurement Specialties US381-000005-030PG analog pressure sensor, which works in the range of 0-30 PSIG (Pound per Square Inch Gauge) and gives current output 4mA-20mA. The maximum depth at which our vehicle has to manoeuvre is 39ft (approximately 12m), so the maximum gauge pressure we need to measure is 17psig. For accuracy, Varun uses the 30psig pressure sensor. The analog value transmitted by the pressure sensor is read by the depth measuring board, which converts this pressure into depth and communicates this depth to the control unit via serial communication."
        },
        {
           "id":4,
           "title": "Inertial Measurement Units",
           "content": "IMUs keep track of the body's orientation, consisting of an accelerometer, gyroscope and magnetometer. NavStik is a generic navigation and control board with a wide range of navigation sensors (accelerometers, gyroscopes and magnetometer) and a powerful processor. There are several interface-boards available for NavStik, each optimized for a different set of parameters. Varun uses the IvyPro board. In addition to this, it features a Mali-400 Quad-core 440 MHz 3D Accelerator which reduces the processing time of the camera outputs." 
        }
    ],
    "software": [
        {
            "id":1,
            "title": "Operating System",
            "content": "The software architecture of Varun uses ROS (Robot Operating System). ROS is an open-source, meta-operating system that provides essential operating system services, including hardware abstraction, low-level device control, implementation of commonly-used functionality, message-passing between processes, and package management. It also provides tools and libraries for obtaining, building, writing, and running code across multiple computers. We can develop our application in simulation and then deploy it to the physical robot with little or no changes in our code."
        },
        {   "id":2,
            "title": "Simulation and Testing",
            "content": "For simulation and testing our algorithms quickly, we use Gazebo, a 3D indoor and outdoor multi-robot simulator, complete with dynamic and kinematic physics, and a pluggable physics engine. Integration between ROS and Gazebo is provided by Gazebo plugins that support many existing robots and sensors. Because the plugins present the same message interface as the rest of the ROS ecosystem, we can write ROS nodes compatible with simulation, logged data, and hardware."
        },
        {   "id":3,
            "title": "Vision Pipeline",
            "content": "Varun is equipped with two Logitech C270 cameras: one front-facing and another bottom facing. The cameras assist in performing the various tasks.There are separate ROS nodes for both cameras. The nodes will be responsible for collecting the video feeds and publishing them to topics. These topics are subscribed by the task-specific nodes where the vision algorithm is implemented. After processing, the relevant outputs are sent to the task-specific processing nodes, which after processing data from other sensors, will send the actuation signals to the control nodes."
        },
        {   "id":4,
            "title": "Dynamics Modelling and Thruster Calibration",
            "content": "A significant challenge in the development of underwater vehicles is the non-linearity in the dynamics of underwater systems. The dynamics of Varun are modelled using the Newton-Euler equations of motion under simplifying assumptions like low speed, perfect symmetry, negligible disturbances underwater and decoupled degrees of freedom.The relation between the input (PWM signal) and output (Thrust) can be variable for each thruster; hence an experiment was performed at the hydraulics lab of IIT Kanpur to determine the relationship and for more accurate modelling."
        }, 
        {
            "id":5,
            "title": "Vision Algorithms",
            "content": "Various vision algorithms are implemented in C++ using OpenCV-2.4.9 libraries, which offer inbuilt implementations of image-processing and object-detection algorithms. The pre-processing process filters out any noise due to changes in water and lighting conditions. It includes all the image enhancement techniques such as contrast stretching, Image sharpening and white balancing. The foreground Detection process separates the foreground and background and identifies the region of interest (ROI). It is done with HSV thresholding resulting in a binary image with the foreground. The task-specific code for different tasks plays a crucial role in the actuation of the vehicle depending on the output obtained from these algorithms. All the Feature Detection and Object Detection Algorithms are implemented in this step."
        }
    ]
}
export default data;