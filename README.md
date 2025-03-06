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
