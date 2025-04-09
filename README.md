# Product Management Web App

A full-stack web application for managing products, built with React frontend and NestJS backend.

## Tech Stack

### Backend
- NestJS (TypeScript)
- MongoDB
- JWT Authentication

### Frontend
- React (TypeScript)
- Vite
- React Router

## Prerequisites

1. Node.js (v18 or higher)
2. MongoDB (local installation or MongoDB Atlas account)
3. npm or yarn package manager

## Setup Instructions

### 1. Environment Setup

1. Clone the repository
2. Copy `.env.example` to `.env` in the root directory
3. Update the environment variables in `.env` with your configuration:
   ```env
   # Backend
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/product-management
   JWT_SECRET=your-secret-key

   # Frontend
   VITE_API_URL=http://localhost:3000
   ```

### 2. MongoDB Setup

Either:
- Install MongoDB locally and start the MongoDB service
- OR use MongoDB Atlas:
  1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  2. Get your connection string and update MONGODB_URI in .env

### 3. Install Dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 4. Start the Application

1. Start the backend server:
   ```bash
   # From the backend directory
   npm run start:dev
   ```

2. Start the frontend development server:
   ```bash
   # From the frontend directory
   npm run dev
   ```

3. Access the application:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## Project Structure

```
/
├── backend/           # NestJS backend
├── frontend/          # React frontend
├── package.json       # Root package.json
└── README.md         # Project documentation
```

## Troubleshooting

1. **MongoDB Connection Issues**
   - Ensure MongoDB is running locally or check Atlas connection string
   - Verify network connectivity and firewall settings

2. **Port Conflicts**
   - If ports 3000 or 5173 are in use, update PORT in .env
   - Kill any processes using the required ports

3. **Dependencies Issues**
   - Clear node_modules and package-lock.json
   - Run `npm install` again

## Development

- Backend API documentation available at http://localhost:3000/api
- Use appropriate environment variables for different environments
- Follow the existing code style and patterns#   P r o d u c t - M a n a g e m e n t - S y s y t e m  
 