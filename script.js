body {
    background-image: url('56afff69-5a33-4fb1-aad6-0fee29d991fd.jpg'); /* Path to your image */
    background-size: cover; /* Ensures the image covers the entire viewport */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
    height: 100vh; /* Sets the height of the body to 100% of the viewport height */
    margin: 0; /* Removes default margin */
    display: flex; /* Enables flexbox layout */
    justify-content: center; /* Centers content horizontally */
    align-items: center; /* Centers content vertically */
    font-family: 'Arial', sans-serif;
    color: white; /* Change text color for better visibility */
    position: relative; /* Position relative for absolute children */
}

.container {
    background-color: rgba(255, 255, 255, 0.4); /* Semi-transparent white background */
    border: 0cap solid #ff69b4; /* Border color */
    padding: 20px; /* Padding inside the container */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Shadow for depth */
    text-align: center; /* Center text inside the container */
    z-index: 1; /* Ensure container is above confetti */
}

h1 {
    color: #ff69b4;
}

button {
    background-color: #ff69b4;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #ff1493;
}

.gallery {
    margin-top: 20px;
}

.gallery img {
    width: 100px;
    height: 100px;
    margin: 5px;
    border-radius: 5px;
    transition: transform 0.3s;
}

.gallery img:hover {
    transform: scale(1.1);
}

#countdown {
    margin-top: 20px;
    font-size: 1.5em;
    color: #ff69b4;
}
