# Real Estate App

A full-stack real estate listing application with a React + Vite frontend and an Express + MongoDB backend.

## Project Overview

- **Backend**: Node.js, Express, MongoDB, JWT authentication, cookie-based session management.
- **Frontend**: React, Vite, Tailwind CSS, React Router, Axios, Leaflet maps.
- **Features**:
  - User registration, login, logout
  - Protected property creation
  - Property listing and property detail retrieval
  - API integration between frontend and backend

## Repository Structure

- `backend/`
  - `server.js` — Express server entrypoint
  - `config/db.js` — MongoDB connection helper
  - `controllers/` — auth controller logic
  - `middleware/` — authentication middleware
  - `models/` — Mongoose models for `User` and `Property`
  - `routes/` — auth and property API routes
- `frontend/`
  - `src/` — React application source code
  - `public/` — static frontend assets
  - `vite.config.js` — Vite configuration
  - `package.json` — frontend dependencies and scripts

## Tech Stack

- Backend:
  - `express`
  - `mongoose`
  - `jsonwebtoken`
  - `bcryptjs`
  - `cookie-parser`
  - `cors`
  - `dotenv`
- Frontend:
  - `react` 19
  - `vite`
  - `axios`
  - `react-router-dom`
  - `tailwindcss`
  - `react-leaflet`
  - `framer-motion`

## Environment Variables

Create a `.env` file in the `backend/` directory with these values:

```env
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

Create a `.env` file in the `frontend/` directory with this value:

```env
VITE_BACKEND_API=http://localhost:5000
```

## Getting Started

### Backend

1. Open a terminal and navigate to `backend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```
4. The backend should listen on the port configured in `PORT`.

### Frontend

1. Open a separate terminal and navigate to `frontend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
4. Open the Vite-provided URL (usually `http://localhost:5173`).

## API Endpoints

### Auth

- `POST /api/auth/register`
  - Request body: `{ name, email, password }`
  - Creates a new user and returns the user record.
- `POST /api/auth/login`
  - Request body: `{ email, password }`
  - Authenticates the user and sets a secure cookie token.
- `POST /api/auth/logout`
  - Clears the authentication cookie.
- `GET /api/auth/me`
  - Returns the authenticated user profile.

### Property

- `GET /api/property`
  - Returns all property listings.
- `GET /api/property/:id`
  - Returns the details of a single property by ID.
- `POST /api/property`
  - Protected route. Creates a new property listing.

## Notes

- The backend allows CORS for `http://localhost:5173` and a deployed Vercel origin.
- The app uses cookie-based JWT authentication, so `withCredentials: true` is enabled in frontend requests.
- There are currently no automated tests configured.

## Future Improvements

- Add validation for request payloads
- Add property update and delete endpoints
- Add frontend authenticated routes for account/profile management
- Add automated tests for backend and frontend
