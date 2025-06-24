# Split Bill Mobile App

This project consists of a React Native mobile application for splitting bills, powered by a Node.js Express backend, and utilizing MongoDB as the database.

## Table of Contents

1.  [Prerequisites](#prerequisites)
2.  [Getting Started](#getting-started)
    *   [Backend Setup](#backend-setup)
    *   [Frontend Setup](#frontend-setup)
3.  [Running the Application](#running-the-application)
    *   [Terminal 1: Start MongoDB Database](#terminal-1-start-mongodb-database)
    *   [Terminal 2: Start Node.js Backend Server](#terminal-2-start-nodejs-backend-server)
    *   [Terminal 3: Start React Native Frontend](#terminal-3-start-react-native-frontend)
4.  [Testing the Backend API](#testing-the-backend-api)
5.  [Project Structure](#project-structure)
6.  [Further Development](#further-development)

---

## 1. Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Node.js**: [Download & Install Node.js](https://nodejs.org/en/download/) (includes npm)
*   **npm**: Node Package Manager (comes with Node.js)
*   **MongoDB**: [Install MongoDB Community Edition](https://docs.mongodb.com/manual/installation/)
    *   For macOS, Homebrew is often the easiest: `brew install mongodb-community`
*   **Xcode (macOS only)**: Required for the iOS Simulator. Download from the Mac App Store.
*   **Xcode Command Line Tools (macOS only)**: Install by running `xcode-select --install` in your terminal.

## 2. Getting Started

### Backend Setup

1.  **Navigate to the `backend` directory:**
    ```bash
    cd backend
    ```
2.  **Install backend dependencies:**
    ```bash
    npm install
    ```
3.  **Create MongoDB data directory:**
    *   Navigate back to the project root: `cd ..`
    *   Create the necessary directory for MongoDB data:
        ```bash
        mkdir -p data/db
        ```

### Frontend Setup

1.  **Navigate to the project root directory:** (If you're still in `backend`, go `cd ..`)
    ```bash
    # Ensure you are in /Users/jasonlam/SplitBillMobileApp
    ```
2.  **Install frontend dependencies:** This project uses Expo, and due to potential peer dependency issues, we'll use `--legacy-peer-deps`.
    ```bash
    npm install --legacy-peer-deps
    ```
3.  **Fix Expo SDK incompatibilities:**
    ```bash
    npx expo install --fix
    ```
4.  **Increase file descriptor limit (macOS/Linux):** This helps prevent "too many open files" errors, especially with Metro Bundler. You will need to run this command in each new terminal session where you start the Expo app.
    ```bash
    ulimit -n 2048
    ```

## 3. Running the Application

To run the full-stack application, you will need **three separate terminal windows/tabs** open simultaneously.

### Terminal 1: Start MongoDB Database

Open a new terminal window/tab and run the MongoDB daemon, specifying the local data directory and the correct port (27010):

```bash
mongod --dbpath ./data/db --port 27010
```
*Leave this terminal open and running.*

### Terminal 2: Start Node.js Backend Server

Open another new terminal window/tab, navigate to the `backend` directory, and start the server:

```bash
cd backend
node server.js
```
*Leave this terminal open and running. You should see "MongoDB connected successfully on port 27010!" and "Server listening at http://localhost:3000".*

### Terminal 3: Start React Native Frontend

Open a third new terminal window/tab, navigate to the project root (`SplitBillMobileApp`), and start the Expo development server:

```bash
npx expo start
```
*   Once the Metro Bundler starts and displays the QR code, press `i` in this terminal to **open the app in an iOS Simulator**.
*   *Leave this terminal open and running. It provides live reloading for your React Native code.*

## 4. Testing the Backend API (Optional)

You can test the backend's `/api/bills` endpoint to create a new bill using `curl`. Ensure your backend server (Terminal 2) is running.

Open a **new terminal tab/window** (you can close it after testing) and run:

```bash
curl -X POST -H "Content-Type: application/json" -d '{ "description": "Dinner with friends", "amount": 75.50, "participants": ["Charlie", "David", "Eve"] }' http://localhost:3000/api/bills
```
You should receive a JSON response with the saved bill data, and you can verify its presence in MongoDB Compass.

## 5. Project Structure

The project follows a standard separation of concerns:

*   **`/` (Root):** Contains the main React Native project files.
    *   `app/`: Expo Router application screens.
    *   `assets/`: Images, fonts, etc.
    *   `components/`: Reusable React Native UI components.
    *   `constants/`: Constant values (e.g., colors).
    *   `package.json`: Frontend dependencies.
*   **`backend/`:** Contains the Node.js Express server code.
    *   `server.js`: Main backend application file (MongoDB connection, API routes).
    *   `package.json`: Backend dependencies.
*   **`data/db/`:** Local directory for MongoDB's data files.

## 6. Further Development

*   **Implement more API Endpoints:** Add routes for fetching all bills (`GET /api/bills`), getting a single bill, updating, and deleting.
*   **Build out Frontend UI:** Create screens in your React Native app to interact with the backend API (e.g., a form to add bills, a list to display them).
*   **User Authentication:** Implement user registration, login, and secure data access on the backend.
*   **Deployment:** Consider deploying your backend to a cloud platform (e.g., Heroku, AWS, DigitalOcean) and your React Native app to app stores. 