
## Basic PayTM application

## Build clone of PayTM

This project is a clone of the Paytm application, developed using React.js for the frontend and Node.js with Express for the backend.

## Features


- **User Authentication**: Secure login and registration system.
- **Balance Management**: View and manage account balance.
- **User Directory**: Browse and interact with other users. Transfer money to other users.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **MongoDB**: Set up a MongoDB database for data storage.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/SaikatMandal7672/paytm-main.git

2. **Navigate to the Project Directory**:

    ```bash
    cd paytm-main

3. **Install Backend Dependencies**:

    ```bash
    cd backend
    npm install

4. **Install Frontend Dependencies**:
    
    ```bash
    cd ../backend
    npm install
    
    

## Configuration
1. **Backend Configuration:**

- Create a .env file in the backend directory with the following variables:

    ```bash
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key


## Frontend Configuration:

- Update the API endpoint in the frontend code to match the backend server URL.

## Running the Application
1. **Start the Backend Server**:

    ```bash
    cd backend
    node index.js

2. **Start the Frontend Development Server**:

    ```bash
    cd frontend
    npm run dev

3. **Access the backend Application**:

- Open your browser and navigate to http://localhost:3000.

## Usage
- Registration: Create a new account using the registration form. url: http://localhost:5173/signup
- Login: Access your account using your credentials. 
url: http://localhost:5173/signin
- View Balance: Check your current account balance on the dashboard.
url: http://localhost:5173/dashboard
- User Directory: Explore the list of registered users on your dashboard.



## Contact
For any inquiries or issues, please open an issue in the repository.
   

