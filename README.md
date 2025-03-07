# Ecommerce Backend Server

This repository contains the backend server for an ecommerce website. The server is built with Node.js, Express, and MongoDB, and it includes all the essential functionalities required for a modern ecommerce platform, such as user authentication, authorization, online payments, password reset, and CRUD operations.

## Features

- **User Authentication**: Secure user registration and login using JWT (JSON Web Tokens).
- **Authorization**: Role-based access control to ensure only authorized users can perform certain actions.
- **Online Payment Integration**: Seamless payment processing using Stripe.
- **Password Reset**: Secure password reset functionality using Nodemailer to send reset links via email.
- **CRUD Operations**: Full CRUD (Create, Read, Update, Delete) operations for products, users, orders, and more.
- **Environment Variables**: Configuration using `.env` files for sensitive data like API keys and database credentials.
- **Error Handling**: Centralized error handling for better debugging and user experience.
- **API Documentation**: Detailed API documentation using Swagger.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT**: JSON Web Tokens for secure authentication.
- **Stripe**: Payment processing for handling online payments.
- **Nodemailer**: For sending emails, including password reset links.
- **Bcrypt**: For hashing passwords.
- **Dotenv**: For managing environment variables.
- **Swagger**: For API documentation.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ecommerce-backend.git
   cd ecommerce-backend
   ```
2. **Navigate to the project directory**:
   ```bash
   cd ecommerce-backend
   ```
3. **Install the required dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables**:
   Create a `.env` file in the root directory.
   Add the following variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```
5. **Run the server**:
   ```bash
   node server.js
   ```
## API Endpoints

### Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login a user
- **POST** `/api/auth/reset-password` - Request password reset
- **PATCH** `/api/auth/reset-password/:token` - Reset password using token

### Products
- **GET** `/api/products` - Get all products
- **POST** `/api/products` - Create a new product (admin only)
- **PUT** `/api/products/:id` - Update a product (admin only)
- **DELETE** `/api/products/:id` - Delete a product (admin only)

### Orders
- **GET** `/api/orders` - Get all orders (admin only)
- **POST** `/api/orders` - Create a new order
- **GET** `/api/orders/:id` - Get order details

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
