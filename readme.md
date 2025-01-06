# Authentication API

A RESTful API for user authentication using Node.js, Express, MongoDB, and JWT.

## Features

- User registration and login
- JWT-based authentication
- Password hashing
- Input validation
- Error handling
- MVC architecture

#### Register User
- **POST** `/api/auth/register`
- Body:
  ```json
  {
    "username": "Kavya",
    "email": "Kavya@gmail.com",
    "password": "123456"
  }
  ```

#### Login User
- **POST** `/api/auth/login`
- Body:
  ```json
  {
    "email": "Kavya@example.com",
    "password": "123456"
  }
  ```

### User

```json

{
     "name": String,
    "email": String,
    "password": String,
    "role": {
        "type": String,
        "enum": ['user', 'admin'],
        "default": 'user'
    },
    "created_at": { type: Date, default: Date.now },
    "updated_at": { type: Date, default: Date.now }
}

### Get Current User
- **GET** `/api/users/me`
- Headers:
  ```
  Authorization: Bearer <token>
  ```

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```
   npm install bcrypt
   ```
   npm install dotenv
   ```
   npm install express
   ```
   npm install jsonwebtoken
   ```
   npm install mongoose
   

2. Create a .env file with the following variables:
   ```
   PORT=3003
   MONGODB_URI=mongodb+srv://Kavya:kavya2atlas@atlascloud.3mnod.mongodb.net/Back-end?retryWrites=true&w=majority&appName=AtlasCloud
   JWT_SECRET_KEY=apple
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

## Testing

Postman tests using