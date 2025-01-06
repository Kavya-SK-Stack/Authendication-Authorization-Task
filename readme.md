# Authentication API

A RESTful API for user authentication using Node.js, Express, MongoDB, and JWT.

## Features

- User registration and login
- JWT-based authentication
- Password hashing
- Input validation
- Error handling
- MVC architecture

## API Endpoints

### Authentication

#### Register User
- **POST** `/api/auth/register`
- Body:
  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### Login User
- **POST** `/api/auth/login`
- Body:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### User

#### Get Current User
- **GET** `/api/users/me`
- Headers:
  ```
  Authorization: Bearer <token>
  ```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a .env file with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/auth-api
   JWT_SECRET=your-secret-key
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

## Testing

Run tests using