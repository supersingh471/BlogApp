# Blog Application (MERN-style with PostgreSQL)

A full-stack Blog Application built using React (Vite) + Tailwind CSS on the frontend and Express + PostgreSQL (Prisma ORM) on the backend.

Users can sign up, sign in, and perform CRUD operations on their own blog posts using JWT-based authentication.

## Features Overview

### Authentication
- User signup and signin
- JWT-based authentication
- Protected API routes using middleware

### Blog Management
- Create a blog post
- View all posts created by the logged-in user
- Update a post (author-only)
- Delete a post (author-only)

### Frontend Pages
- Landing Page
- Signup Page
- Signin Page
- Dashboard (view and manage blogs)

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios for API communication

### Backend
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JSON Web Token (JWT)
- CORS

## Backend Architecture (High-Level)

- Express server running on port 3000
- All APIs are prefixed with `/api/v1`
- JWT token is sent in request headers: `Authorization: Bearer <token>`
- Middleware verifies token and attaches `userId` to the request
- Prisma enforces user-level authorization using `authorId`

## API Routes

### User Routes (`/api/v1/user`)
- `POST /signup` - Register a new user
- `POST /signin` - Login user and get JWT token

### Blog Routes (`/api/v1/blog`)
- `GET /` - Get all blogs by logged-in user
- `POST /` - Create a new blog post
- `PUT /:id` - Update a blog post (author only)
- `DELETE /:id` - Delete a blog post (author only)

## Running the Project Locally

### Prerequisites
- Node.js installed
- PostgreSQL installed and running

### Backend Setup
```bash
cd backend
npm install
npx prisma migrate dev
npx prisma generate
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

### Backend (`.env`)
```env
DATABASE_URL="postgresql://user:password@localhost:5432/blogdb"
JWT_SECRET="your-secret-key"
PORT=3000
```

### Frontend (`.env`)
```env
VITE_API_URL=http://localhost:3000/api/v1
```

## Project Structure
```
blog-app/
├── backend/
│   ├── src/
│   ├── prisma/
│   └── package.json
└── frontend/
    ├── src/
    ├── public/
    └── package.json
```
