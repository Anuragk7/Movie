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
- [Contributing](#contributing)
- [Components](#Components)

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

# Components
**Header.js**
Purpose: Displays the main navigation bar with "My Playlist" and "Signup/Login" buttons.
Props: None.
Description: The Header component is styled to resemble Netflix's theme and is responsive to different screen sizes.

**MovieList.js**
Purpose: Displays a list of movies.
Props: m (movie object).
Description: The MovieList component displays movie details including title, description, genres, and an image. It also includes a button to add the movie to the user's playlist.

**Playlist.js**
Purpose: Displays the user's playlist.
Props: None.
Description: The Playlist component fetches and displays movies saved by the user.

**Routes.js**
Purpose: Handles the routing logic and renders the appropriate components based on user actions.
Props: None.
Description: The Routes component controls the flow of the application, displaying either the SearchBar or Playlist component based on user interaction and login state.

**SearchBar.js**
Purpose: Provides a search interface for finding movies.
Props: onSearch.
Description: The SearchBar component allows users to search for movies using the OMDB API and displays search results.

**SignupAndLogin.js**
Purpose: Handles user registration and login.
Props: None.
Description: The SignupAndLogin component provides forms for user registration and login, updating the application state upon successful authentication
