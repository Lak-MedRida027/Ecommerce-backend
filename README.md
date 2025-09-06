# Ecommerce Backend Server

This repository contains the backend server for an ecommerce website. The server is built with Node.js, Express, and MongoDB, and it includes all the essential functionalities required for a modern ecommerce platform, such as user authentication, authorization, online payments, password reset, and CRUD operations.

## Features

- **User Authentication**: Secure user registration and login using JWT (JSON Web Tokens).
- **Authorization**: Role-based access control to ensure only authorized users can perform certain actions.
- **Online Payment Integration**: Seamless payment processing using Stripe (with webhook support).
- **Password Reset**: Secure password reset functionality using Nodemailer to send reset codes via email.
- **CRUD Operations**: Full CRUD operations for products, users, orders, categories, brands, coupons, subcategories, reviews, cart, wishlist, and addresses.
- **Environment Variables**: Configuration using a `config.env` file for sensitive data like API keys and database credentials.
- **Error Handling**: Centralized error handling for better debugging and user experience.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT**: JSON Web Tokens for secure authentication.
- **Stripe**: Payment processing, including webhook handling.
- **Nodemailer**: For sending emails, including password reset codes.
- **Bcrypt**: For hashing passwords.
- **Dotenv**: For managing environment variables.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Lak-MedRida027/Ecommerce-backend.git
   cd Ecommerce-backend
   ```
2. **Install the required dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   - Create a file named `config.env` in the project root.
   - Add the following variables:
     ```env
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/ecommerce
     JWT_SECRET_KEY=your_jwt_secret_key
     STRIPE_SECRET_KEY=your_stripe_secret_key
     STRIPE_WEBHOOK_SECRET_KEY=your_stripe_webhook_secret_key
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_email_password
     ```
4. **Run the server**:
   - For development with auto-reload:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm run prod
     ```

## API Endpoints (Prefix: `/api/v1`)

### Authentication
- **POST** `/api/v1/auth/signup` — Register a new user
- **POST** `/api/v1/auth/login` — Login a user
- **POST** `/api/v1/auth/forgotPassword` — Send password reset code
- **POST** `/api/v1/auth/verifyResetCode` — Verify reset code
- **PUT** `/api/v1/auth/resetPassword` — Reset password

### Products & Reviews
- **GET** `/api/v1/products` — Get all products
- **GET** `/api/v1/products/:id` — Get specific product by ID
- **POST** `/api/v1/products` — Create a new product (admin, manager)
- **PUT** `/api/v1/products/:id` — Update a product (admin, manager)
- **DELETE** `/api/v1/products/:id` — Delete a product (admin)
- **GET** `/api/v1/products/:productId/reviews` — Get reviews for a specific product

### Cart & Coupon
- **POST** `/api/v1/cart` — Add product to cart (user)
- **GET** `/api/v1/cart` — Get logged-in user's cart
- **DELETE** `/api/v1/cart` — Clear user's cart
- **DELETE** `/api/v1/cart/:itemId` — Remove a specific item from cart
- **PUT** `/api/v1/cart/:itemId` — Update quantity of a cart item
- **PUT** `/api/v1/cart/applyCoupon` — Apply a coupon to the cart

### Orders & Checkout
- **POST** `/api/v1/orders/:cartId` — Create a cash order (user)
- **GET** `/api/v1/orders` — Get all orders (user, admin, manager)
- **GET** `/api/v1/orders/:id` — Get a specific order (user, admin, manager)
- **PUT** `/api/v1/orders/:id/pay` — Mark order as paid (admin, manager)
- **PUT** `/api/v1/orders/:id/deliver` — Mark order as delivered (admin, manager)
- **GET** `/api/v1/orders/checkout-session/:cartId` — Create Stripe checkout session (user)
- **POST** `/webhook-checkout` — Stripe webhook endpoint for completed payments

### Categories, Subcategories, Brands, Coupons, Reviews, Addresses, Wishlist, Users
*(Endpoints follow similar RESTful patterns under `/api/v1` with appropriate access controls.)*

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.