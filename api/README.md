Live Deployement Link :- https://movie-frontend-self.vercel.app/

# FASAL PROJECT

This project is a full-stack web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Vite as the front-end build tool. The application includes user authentication, movie search, and playlist features.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- Search for movies using the OMDB API
- Add movies to a personal playlist
- View and manage playlists

## Tech Stack

- **Frontend**: React.js, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: Vercel (for frontend), Heroku (for backend)

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14 or later)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   
2. **Install dependencies:**

sh
Copy code
# Frontend
cd client
npm install

# Backend
cd ../api
npm install

**Accessing the Application**
Open your browser and navigate to http://localhost:5173 to see the application in action.

**API Endpoints**
User Routes
POST /register

**Registers a new user**
Request body: { "username": "example", "password": "password123" }
POST /login

**Logs in an existing user**
Request body: { "username": "example", "password": "password123" }
Movie Routes
POST /save

**Saves a movie to the user's playlist**
Request body: { "imdb": "movie_imdb_id", "userId": "user_id" }
POST /movies

**Retrieves the user's playlist**
Request body: { "id": "user_id" }
