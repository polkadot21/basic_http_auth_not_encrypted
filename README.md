# Basic HTTP Authentication with Express.js and SSL
This repository provides a simple example of using basic HTTP authentication with
Express.js and highlights the importance of using an SSL certificate to protect the content
of the payload. The code demonstrates how to create a login form, capture the entered username and password,
and log them to the console.

## Prerequisites
Make sure you have the following installed on your machine:

`Node.js`: Download and install Node.js from the official website: https://nodejs.org

## Why Basic HTTP Authentication with SSL?
Basic HTTP authentication is a widely used method to protect resources by requiring a username and password for access.
However, it is essential to use this authentication method with SSL (Secure Sockets Layer) to encrypt the payload and 
ensure its confidentiality. Here are the reasons why SSL should be used with basic HTTP authentication:

1. Confidentiality: SSL encryption ensures that the payload, including the username and password, is encrypted before
transmission. This prevents unauthorized individuals from intercepting and understanding the sensitive information.

2. Data Integrity: SSL provides mechanisms to detect if the transmitted data has been tampered with during transit.
This ensures that the payload remains intact and unaltered, protecting the integrity of the username and password.


## Getting Started
Follow these steps to run the code locally and reproduce the basic HTTP authentication with Express.js
on `localhost:3000`:

- Clone this repository or download the code as a ZIP file and extract it to a directory of your choice.

- Open a command prompt or terminal and navigate to the project directory.

Install the required dependencies by running the following command:
`
npm install
`
Start the server by running the following command:

`
node server.js
`
The server should start running, and you should see the message
"Server listening on port 3000" in the console.

Open your web browser and visit `http://localhost:3000`.

You should now see a login form in your browser. Enter a username and password of your choice.

Switch back to the command prompt or terminal where the server is running. You will see the plain text
credentials logged in the console.

Feel free to modify the code to suit your requirements or add your desired response handling inside the `/login` route.
