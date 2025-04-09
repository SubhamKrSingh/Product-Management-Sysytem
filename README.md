# Backend API Documentation

This is the backend service for the Product Management Web App, built with NestJS and MongoDB.

## Setup Instructions

1. Install MongoDB locally or use MongoDB Atlas
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run start:dev
   ```

## API Endpoints

### Authentication

#### Register User
- **POST** `/auth/register`
- Body:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

#### Login
- **POST** `/auth/login`
- Body:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

### Products (Protected Routes)

All product routes require JWT Authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

#### Create Product
- **POST** `/products`
- Body:
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "category": "Category",
    "price": 99.99,
    "rating": 4.5
  }
  ```

#### Get All Products
- **GET** `/products`
- Query Parameters (optional):
  - category: string
  - minPrice: number
  - maxPrice: number
  - minRating: number
  - search: string

#### Get Product by ID
- **GET** `/products/:id`

#### Update Product
- **PATCH** `/products/:id`
- Body: Same as Create Product

#### Delete Product
- **DELETE** `/products/:id`

## Features

- JWT-based Authentication
- MongoDB Integration
- Product CRUD Operations
- Advanced Product Filtering
- Input Validation
- Error Handling

## Project Structure

```
src/
├── auth/                 # Authentication module
│   ├── dto/             # Data Transfer Objects
│   ├── schemas/         # MongoDB schemas
│   └── strategies/      # JWT strategy
├── products/            # Products module
│   ├── dto/             # Data Transfer Objects
│   └── schemas/         # MongoDB schemas
└── app.module.ts        # Main application module
```
