# Helping Hand

## Overview
Helping Hand is a two-part NGO donation and volunteer management platform.

- **Frontend:** React + Vite + Tailwind CSS + Capacitor
- **Backend:** Node.js + Express + MongoDB
- **Features:** user registration, Google OAuth login, JWT authentication, donation tracking, event management, admin dashboard, Cloudinary image upload, Razorpay support.

## Repository Structure

- `backend/` - Express API server
  - `app.js` - Express app setup and middleware
  - `bin/www` - server startup script
  - `routes/` - main API routes
  - `models/` - MongoDB models for users, donations, events, admin
  - `middleware/` - auth helpers like `isLoggedIn` and `isadmin`
  - `uploads/` - static upload folder

- `Frontend/` - React client
  - `src/` - React app source files
  - `src/pages/` - page views for Home, Login, Register, Dashboard, admin pages, etc.
  - `src/components/` - reusable UI components and route protection
  - `src/store/` - auth provider that manages JWT storage and user info

## Key Technologies

- React 19
- Vite
- React Router v7
- Tailwind CSS
- Capacitor
- Node.js / Express
- MongoDB with Mongoose
- Cloudinary image uploads
- Google OAuth login
- JWT-based authentication
- Razorpay payment integration

## Backend Setup

1. Open a terminal in `backend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```env
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   CLOUDINARY_CLOUD_NAME=<cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<cloudinary-api-key>
   CLOUDINARY_API_SECRET=<cloudinary-api-secret>
   GOOGLE_CLIENT_ID=<google-oauth-client-id>
   GOOGLE_CLIENT_SECRET=<google-oauth-client-secret>
   GOOGLE_REDIRECT_URI=<google-oauth-redirect-uri>
   PASSWORD=<admin-password>
   FULL_NAME=<admin-full-name>
   EMAIL=<admin-email>
   ADMIN_EMAIL=<admin-login-email>
   ADMIN_PASSWORD=<admin-password-hash-or-plain-if-handled-in-code>
   PORT=3000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

The backend listens on `PORT` or `3000` by default.

## Frontend Setup

1. Open a terminal in `Frontend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add environment variables in `Frontend/.env` for Google OAuth:
   ```env
   VITE_GOOGLE_CLIENT_ID=<your-google-client-id>
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage

- Public pages include Home, About, Programs, Login, and Register.
- Registered users can access the dashboard and donate or view events.
- Google login is supported via the `/api/auth/google` endpoint.
- Admin users can access admin routes for user and event management.

## Available Scripts

### Backend
- `npm start` - start Express server

### Frontend
- `npm run dev` - start Vite development server
- `npm run build` - build production assets
- `npm run preview` - preview built assets
- `npm run lint` - run ESLint

## Notes

- The project uses JWT tokens stored in `localStorage` for authentication.
- The frontend auth provider loads user info from backend endpoints like `/user` and `/find/donate`.
- File uploads are handled by Cloudinary via `multer-storage-cloudinary`.
- Admin user is seeded from environment variables when the backend starts.

## Contact
For support or updates, inspect the source files in `backend/routes/` and `Frontend/src/`.
