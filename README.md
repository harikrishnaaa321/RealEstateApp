# Real Estate Web Application

A real estate platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to browse available plots based on their requirements, such as location, price range, and plot size. The application provides a seamless experience for both users and administrators, with an easy-to-use interface for searching, filtering, and viewing detailed plot listings.

## Features

- **Plot Listings**: Users can view available plots with detailed information, including price, size, and location.
- **Search & Filters**: Users can search for plots and filter results based on location, budget, and size.
- **Admin Panel**: Administrators can add, edit, and delete plot listings.
- **Real-Time Data**: The plot listings are updated in real time, ensuring users have access to the most current information.
- **User Authentication**: Secure login system for both users and administrators.
- **MongoDB Atlas Integration**: The application leverages MongoDB Atlas for cloud-based data storage.

## Tech Stack

- **Frontend**: 
  - React.js (for building dynamic user interfaces)
  - Redux (for state management)
  - Material-UI (for modern UI components)
  
- **Backend**:
  - Node.js (JavaScript runtime)
  - Express.js (for handling API requests)
  - MongoDB (cloud database hosted on MongoDB Atlas)
  
- **Authentication**:
  - JWT (JSON Web Tokens) for secure user authentication
  
- **Other Tools**:
  - Axios (for making API calls)
  - Bcrypt.js (for password hashing)
  
## Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/real-estate-app.git
cd real-estate-app
```

### 2. Set up the backend

- Navigate to the backend directory and install the required dependencies:

```bash
cd backend
npm install
```

- Set up MongoDB Atlas:
  - Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a cluster.
  - Create a new database and configure the necessary collections (e.g., `plots`, `users`).
  - Retrieve the connection string from your MongoDB Atlas cluster and store it securely.

- Configure environment variables:
  - In the `backend` directory, create a `.env` file with the following variables:

### 3. Set up the frontend

- Navigate to the frontend directory and install the required dependencies:

```bash
cd frontend
npm install
```

### 4. Start the application

#### Backend
To start the backend server, run:

```bash
cd backend
npm run dev
```

#### Frontend
To start the frontend server, run:

```bash
cd frontend
npm start
```

The application should now be up and running.

## API Endpoints

- **GET /api/plots**: Retrieve a list of all available plots.
- **POST /api/plots**: Add a new plot (Admin access required).
- **PUT /api/plots/:id**: Update the details of an existing plot (Admin access required).
- **DELETE /api/plots/:id**: Delete a plot from the listings (Admin access required).
- **GET /api/plots/:id**: Get the details of a specific plot.

### Images
![home2](https://github.com/user-attachments/assets/1d800565-1e5f-49ba-9265-a081fde1aaa5)
![home2_2](https://github.com/user-attachments/assets/4884bbf6-cb6c-403e-8a47-8fea07a52a1b)
![about2](https://github.com/user-attachments/assets/39bb5c72-5939-486b-9b16-75df505bd079)
![profile2_2](https://github.com/user-attachments/assets/0bac7cff-d645-4727-8a57-e614e1057521)
![myListings2](https://github.com/user-attachments/assets/2debc820-c19d-42b6-b97d-d527a62641bd)
![updateListing_2](https://github.com/user-attachments/assets/0428d960-b7bd-4805-ab45-f9a99e6fa4c4)
![renting_2](https://github.com/user-attachments/assets/ddcf1b60-e76b-4316-82f8-eb53dc6c35f9)
![sample_2](https://github.com/user-attachments/assets/1763acec-99d2-42cf-a23e-e9b1a938266c)
![search_2](https://github.com/user-attachments/assets/0fca43ad-5ece-4480-8986-3b597fd6c6e0)
![search2_2](https://github.com/user-attachments/assets/52cb9e2a-735d-4cad-9311-7c97bd314586)
![sending mail2_2](https://github.com/user-attachments/assets/e5596612-6ea2-44b6-8470-ff2e7d887631)
![sending mail3_2](https://github.com/user-attachments/assets/2a9c5af0-b564-404d-a462-288d8b3a79ca)
### Homepage
![Homepage](screenshots/homepage.png)

### Plot Details
![Plot Details](screenshots/plot-details.png)

## Technologies Used

- **React.js**: Frontend framework for building interactive user interfaces.
- **Node.js & Express.js**: Backend framework for handling API requests and routing.
- **MongoDB & MongoDB Atlas**: Cloud-based database for storing and managing plot listings and user data.
- **JWT Authentication**: Secure user authentication using JSON Web Tokens.
- **Axios**: Library for making HTTP requests to the backend API.
- **Bcrypt.js**: Password hashing for secure user authentication.

## Future Enhancements

- **User Reviews & Ratings**: Allow users to review and rate plots based on their experience.
- **Maps Integration**: Show plot locations on an interactive map for easier navigation.
- **Payment Gateway**: Integrate a payment gateway for booking or reserving plots online.
- **Advanced Search**: Provide more advanced filters such as plot type, proximity to amenities, etc.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
