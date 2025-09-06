<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="Ecommerce-backend.png" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/>

# ECOMMERCE-BACKEND

<em>Empowering Seamless Commerce with Robust Backend Innovation</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/Lak-MedRida027/Ecommerce-backend?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/Lak-MedRida027/Ecommerce-backend?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/Lak-MedRida027/Ecommerce-backend?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=flat&logo=Mongoose&logoColor=white" alt="Mongoose">
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black" alt="Prettier">
<br>
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".ENV">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/sharp-99CC00.svg?style=flat&logo=sharp&logoColor=white" alt="sharp">
<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
<img src="https://img.shields.io/badge/Stripe-635BFF.svg?style=flat&logo=Stripe&logoColor=white" alt="Stripe">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)

---

## Overview

Ecommerce-backend is a comprehensive Node.js framework designed to power scalable and secure e-commerce platforms with ease. It offers a modular architecture that streamlines the development of core functionalities such as user management, product catalog, orders, payments, and reviews.

**Why Ecommerce-backend?**

This project provides a robust foundation for building feature-rich e-commerce APIs. The core features include:

- 🛡️ **Security & Error Handling:** Middleware for centralized error management and secure request processing.
- 🚀 **Scalability & Performance:** Efficient routing, middleware, and database integration for high performance.
- 🎯 **Data Integrity & Validation:** Schemas and validators ensuring consistent, reliable data handling.
- 📸 **Media Management:** Image upload and resizing support for product and brand assets.
- 🔑 **Authentication & Authorization:** JWT-based user sessions with role-based access controls.
- 💌 **Communication & Utilities:** Email notifications, data sanitization, and token generation for seamless workflows.

---

## Features

|      | Component       | Details                                                                                     |
| :--- | :-------------- | :------------------------------------------------------------------------------------------ |
| ⚙️  | **Architecture**  | <ul><li>Modular MVC pattern with separate folders for routes, controllers, models, middleware</li><li>RESTful API endpoints for products, users, orders, payments</li><li>Uses Express.js as core framework</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>ESLint with Airbnb and Prettier configs for consistent style</li><li>Code organized into clear modules</li><li>Uses async/await with express-async-handler for error handling</li></ul> |
| 📄 | **Documentation** | <ul><li>Basic README with project overview, setup instructions, API docs</li><li>Comments and JSDoc in key modules</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Stripe API for payments</li><li>JWT for authentication</li><li>MongoDB via Mongoose for data persistence</li><li>Nodemailer for email notifications</li><li>Cloudinary or Sharp for image processing (implied by dependencies)</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Separation of concerns across routes, controllers, models</li><li>Middleware for security, validation, rate limiting</li><li>Environment variables managed via dotenv</li></ul> |
| 🧪 | **Testing**       | <ul><li>Limited info, but likely includes unit tests for controllers/services</li><li>Uses nodemon for development, suggesting iterative testing</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Uses compression middleware for response optimization</li><li>Rate limiting via express-rate-limit</li><li>Image processing with Sharp for optimized images</li></ul> |
| 🛡️ | **Security**      | <ul><li>Input sanitization with express-mongo-sanitize, xss-clean</li><li>Rate limiting to prevent abuse</li><li>HTTP headers security via hpp</li><li>JWT for secure authentication</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Core: express, mongoose, jsonwebtoken, bcryptjs, cors</li><li>Utilities: uuid, dotenv, morgan, colors, stripe, sharp, nodemailer</li><li>Linting & formatting: eslint, prettier, eslint-config-airbnb</li></ul> |

---

## Project Structure

```sh
└── Ecommerce-backend/
    ├── Modules
    │   ├── brandModule.js
    │   ├── cartModule.js
    │   ├── categoryModule.js
    │   ├── couponModule.js
    │   ├── orderModule.js
    │   ├── productModule.js
    │   ├── reviewModule.js
    │   ├── subCategoryModule.js
    │   └── userModule.js
    ├── README.md
    ├── Routers
    │   ├── addressRoute.js
    │   ├── authRoute.js
    │   ├── brandRoute.js
    │   ├── cartRoute.js
    │   ├── categoryRoute.js
    │   ├── couponRoute.js
    │   ├── index.js
    │   ├── orderRoute.js
    │   ├── productRoute.js
    │   ├── reviewRoute.js
    │   ├── subCategoryRoute.js
    │   ├── userRoute.js
    │   └── wishlistRoute.js
    ├── Services
    │   ├── addressService.js
    │   ├── authService.js
    │   ├── brandService.js
    │   ├── cartService.js
    │   ├── categoryService.js
    │   ├── couponService.js
    │   ├── handlerFactory.js
    │   ├── orderService.js
    │   ├── productService.js
    │   ├── reviewService.js
    │   ├── subCategoryService.js
    │   ├── userService.js
    │   └── wishlistService.js
    ├── config
    │   └── database.js
    ├── middlewares
    │   ├── errormiddleware.js
    │   ├── uploadImageMiddleware.js
    │   └── validatormiddleware.js
    ├── package-lock.json
    ├── package.json
    ├── server.js
    ├── uploads
    │   ├── brands
    │   ├── categories
    │   ├── products
    │   └── users
    └── utils
        ├── ApiFeatures.js
        ├── apiError.js
        ├── createToken.js
        ├── dummyData
        ├── sanitizaData.js
        ├── sendEmail.js
        └── validators
```

---

### Project Index

<details open>
	<summary><b><code>ECOMMERCE-BACKEND/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/server.js'>server.js</a></b></td>
					<td style='padding: 8px;'>- Sets up the core server infrastructure, handling API routing, middleware integrations, security enhancements, and error management<br>- Facilitates communication between clients and the backend, manages database connections, and ensures robust request processing, security, and scalability within the overall application architecture<br>- Acts as the central entry point for incoming requests and orchestrates essential server functionalities.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Defines the core backend architecture for an ecommerce platform, enabling user management, product and order operations, secure authentication, and payment processing<br>- Facilitates seamless integration of essential functionalities such as role-based access, email notifications, and API documentation, forming the backbone that supports the entire applications data flow, security, and business logic.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the core configuration and dependencies for a Node.js REST API server, establishing project metadata, scripts, and essential libraries for handling authentication, data validation, security, and server operations<br>- Serves as the foundational setup that orchestrates the applications development, testing, and production workflows within the overall architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- middlewares Submodule -->
	<details>
		<summary><b>middlewares</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ middlewares</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/middlewares/errormiddleware.js'>errormiddleware.js</a></b></td>
					<td style='padding: 8px;'>- Provides centralized error handling for the application, ensuring consistent responses during development and production<br>- Manages various error scenarios, including JWT authentication issues, and formats error messages appropriately based on environment, thereby enhancing robustness and user experience across the codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/middlewares/validatormiddleware.js'>validatormiddleware.js</a></b></td>
					<td style='padding: 8px;'>- Implements validation error handling within the Express.js middleware layer, ensuring that incoming requests adhere to predefined validation rules<br>- It intercepts validation results, returning detailed error responses for invalid inputs, thereby maintaining data integrity and streamlining error management across the application’s request processing pipeline.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/middlewares/uploadImageMiddleware.js'>uploadImageMiddleware.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates image upload handling within the application by configuring middleware for processing single or multiple image files<br>- Ensures only image files are accepted and manages file storage in memory, supporting efficient image validation and upload workflows integral to features involving media management in the overall architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- utils Submodule -->
	<details>
		<summary><b>utils</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ utils</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/sanitizaData.js'>sanitizaData.js</a></b></td>
					<td style='padding: 8px;'>- Provides a user data sanitization function that extracts and returns only essential user attributes such as ID, name, and email<br>- It supports data privacy and security by ensuring sensitive information is excluded before user data is processed or shared within the application<br>- This utility promotes consistent and secure handling of user information across the codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/sendEmail.js'>sendEmail.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates email communication within the application by providing a streamlined method to send emails through various email service providers<br>- Integrates with external email services to automate notifications, alerts, or user correspondence, ensuring reliable delivery and centralized email handling as part of the overall system architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/createToken.js'>createToken.js</a></b></td>
					<td style='padding: 8px;'>- Generates JSON Web Tokens (JWT) for user authentication by signing user identifiers with a secret key and expiration time<br>- Facilitates secure, stateless user session management within the overall architecture, enabling reliable verification of user identity across different components of the system<br>- Supports the authentication layer essential for safeguarding protected resources and maintaining user access control.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/apiError.js'>apiError.js</a></b></td>
					<td style='padding: 8px;'>- Defines a custom error class to handle predictable API operation errors, enabling consistent error management across the application<br>- It categorizes errors based on HTTP status codes, facilitating clear differentiation between client and server issues<br>- This class integrates into the broader architecture to streamline error handling, improve debugging, and enhance user feedback throughout the system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/ApiFeatures.js'>ApiFeatures.js</a></b></td>
					<td style='padding: 8px;'>- Provides a flexible utility for constructing advanced MongoDB queries by enabling filtering, sorting, field limiting, keyword searching, and pagination<br>- Integrates seamlessly with Mongoose to streamline data retrieval processes, ensuring efficient and customizable API responses within the applications architecture<br>- Enhances query management and improves overall data handling consistency across endpoints.</td>
				</tr>
			</table>
			<!-- dummyData Submodule -->
			<details>
				<summary><b>dummyData</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ utils.dummyData</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/dummyData/seeder.js'>seeder.js</a></b></td>
							<td style='padding: 8px;'>- Facilitates bulk data management for product information within the database, enabling efficient seeding and clearing of sample data<br>- Supports development and testing workflows by automating the insertion of predefined product datasets or their removal, ensuring a consistent and streamlined approach to populating the database during project setup or testing phases.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/dummyData/fakeproducts.json'>fakeproducts.json</a></b></td>
							<td style='padding: 8px;'>- Provides a curated set of sample product data for testing and development purposes within the project<br>- Facilitates realistic data-driven features, such as product listings, filtering, and display components, by simulating a diverse catalog across multiple categories with detailed attributes like pricing, descriptions, images, and ratings<br>- Enhances development efficiency and consistency across the codebase.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/dummyData/products.json'>products.json</a></b></td>
							<td style='padding: 8px;'>- Provides a curated set of sample product data for an e-commerce platform, enabling testing, development, and demonstration of product listing, filtering, and management functionalities within the broader application architecture<br>- Facilitates consistent data handling and UI rendering across various components, supporting seamless integration and user experience.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- validators Submodule -->
			<details>
				<summary><b>validators</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ utils.validators</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/validators/productValidator.js'>productValidator.js</a></b></td>
							<td style='padding: 8px;'>- Defines validation schemas for product-related operations within the API, ensuring data integrity and consistency<br>- It enforces rules for creating, updating, retrieving, and deleting products, including field formats, value constraints, and relational checks with categories and subcategories<br>- These validators help maintain robust data quality aligned with the overall application architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/validators/userValidator.js'>userValidator.js</a></b></td>
							<td style='padding: 8px;'>- Defines comprehensive validation schemas for user-related operations, ensuring data integrity and security across user creation, retrieval, updates, and password management<br>- Integrates with middleware to enforce rules such as email uniqueness, password confirmation, and format validation, supporting robust user data handling within the overall application architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/validators/brandValidator.js'>brandValidator.js</a></b></td>
							<td style='padding: 8px;'>- Provides validation rules for brand-related operations within the application, ensuring input data integrity for creating, updating, retrieving, and deleting brand entities<br>- Integrates with middleware to enforce data formats and constraints, facilitating consistent and reliable handling of brand data across the system<br>- Supports the overall architecture by maintaining data quality and preventing invalid inputs.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/validators/authValidator.js'>authValidator.js</a></b></td>
							<td style='padding: 8px;'>- Defines validation schemas for user authentication workflows, ensuring input integrity and security across sign-up, login, password reset, and verification processes<br>- Integrates with middleware to enforce rules and prevent invalid or duplicate data, supporting the overall architectures focus on robust user management and data validation within the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/validators/subCategoryValidator.js'>subCategoryValidator.js</a></b></td>
							<td style='padding: 8px;'>- Defines validation rules for managing subcategories within the application, ensuring data integrity and proper formatting for create, update, retrieve, and delete operations<br>- Integrates with middleware to enforce validation logic, including ID format checks and slug generation, supporting consistent and reliable subcategory data handling across the project architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/validators/categoryValidator.js'>categoryValidator.js</a></b></td>
							<td style='padding: 8px;'>- Provides validation rules for category-related operations within the API, ensuring input data integrity and proper formatting<br>- Facilitates consistent validation for creating, updating, retrieving, and deleting categories, while automatically generating URL-friendly slugs from category names<br>- Integrates seamlessly into the broader architecture to maintain data quality and streamline category management workflows.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/utils/validators/reviewValidator.js'>reviewValidator.js</a></b></td>
							<td style='padding: 8px;'>- Defines validation rules for review-related operations within the API, ensuring data integrity and authorization<br>- It enforces proper review ID formats, verifies review ownership for updates and deletions, and restricts users to a single review per product<br>- These validators uphold security and consistency, integrating seamlessly into the broader architecture to manage review data securely and accurately.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- Modules Submodule -->
	<details>
		<summary><b>Modules</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ Modules</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Modules/categoryModule.js'>categoryModule.js</a></b></td>
					<td style='padding: 8px;'>- Defines the Category schema for managing product categories within the application, ensuring data integrity and uniqueness<br>- Facilitates category creation, retrieval, and updates while automatically generating accessible image URLs<br>- Integrates middleware to enhance data consistency and prepare category data for client responses, supporting the overall architecture of organized, accessible product categorization.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Modules/orderModule.js'>orderModule.js</a></b></td>
					<td style='padding: 8px;'>- Defines the data structure for customer orders within the system, enabling the storage and retrieval of comprehensive order details such as user association, cart items, shipping information, payment status, and delivery tracking<br>- Serves as a core component for managing order lifecycle and ensuring data consistency across the e-commerce architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Modules/subCategoryModule.js'>subCategoryModule.js</a></b></td>
					<td style='padding: 8px;'>- Defines the SubCategory model within the database schema, enabling structured management of subcategory data linked to main categories<br>- Facilitates creation, validation, and retrieval of subcategory information, ensuring data integrity and consistency across the applications hierarchical categorization system<br>- Supports efficient organization and querying of subcategories in the overall project architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Modules/userModule.js'>userModule.js</a></b></td>
					<td style='padding: 8px;'>- Defines the user data model within the applications architecture, facilitating user management, authentication, and personalization<br>- It structures user information, including credentials, roles, addresses, and wishlist references, supporting secure password handling and role-based access control<br>- This module integrates seamlessly with other components to enable user registration, login, and profile management across the platform.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Modules/brandModule.js'>brandModule.js</a></b></td>
					<td style='padding: 8px;'>- Defines the Brand schema for managing brand entities within the application, ensuring data integrity and uniqueness<br>- Facilitates consistent handling of brand information, including name, slug, and image URL formatting<br>- Integrates middleware to automatically generate complete image URLs upon data retrieval and storage, supporting seamless brand data management within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Modules/reviewModule.js'>reviewModule.js</a></b></td>
					<td style='padding: 8px;'>- Defines the review schema and logic for managing product reviews, including validation, user association, and automatic updates of product ratings<br>- Facilitates user-generated feedback, ensuring real-time aggregation of review ratings to maintain accurate product ratings within the overall application architecture<br>- Enhances data consistency and supports dynamic review-related functionalities across the platform.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Modules/cartModule.js'>cartModule.js</a></b></td>
					<td style='padding: 8px;'>- Defines the data structure for shopping carts within the application, enabling storage and retrieval of user-specific cart details, including items, quantities, prices, and discounts<br>- Facilitates seamless management of cart contents and pricing calculations, supporting the overall e-commerce architecture by linking cart data to users and products for efficient order processing and user experience.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Modules/couponModule.js'>couponModule.js</a></b></td>
					<td style='padding: 8px;'>- Defines the schema and model for managing promotional coupons within the application<br>- Facilitates creation, validation, and storage of coupon data, including name, expiration date, and discount value<br>- Integrates with the overall architecture to support features like discount application and promotional campaigns, ensuring consistent and reliable coupon handling across the system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Modules/productModule.js'>productModule.js</a></b></td>
					<td style='padding: 8px;'>- Defines the Product schema for the database, encapsulating product attributes, relationships, and validation rules<br>- Facilitates efficient product data management, including categorization, image handling, and ratings<br>- Supports seamless integration with related collections like reviews, categories, and brands, enabling comprehensive product operations within the overall application architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- config Submodule -->
	<details>
		<summary><b>config</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ config</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/config/database.js'>database.js</a></b></td>
					<td style='padding: 8px;'>- Establishes a connection to the MongoDB database using Mongoose, enabling data persistence and retrieval across the application<br>- Integrates seamlessly into the overall architecture by providing a reliable database connection setup, which supports the core functionality of data management within the project<br>- Ensures the application can interact with the database efficiently and securely.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- Routers Submodule -->
	<details>
		<summary><b>Routers</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ Routers</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/categoryRoute.js'>categoryRoute.js</a></b></td>
					<td style='padding: 8px;'>- Defines RESTful API endpoints for managing product categories, including creation, retrieval, updating, and deletion<br>- Integrates authorization controls to restrict access based on user roles and supports nested subcategory routes<br>- Facilitates image upload and resizing, ensuring efficient category management within the broader e-commerce or content organization architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/wishlistRoute.js'>wishlistRoute.js</a></b></td>
					<td style='padding: 8px;'>- Defines API endpoints for managing user wishlists within the application<br>- Facilitates adding, removing, and retrieving products for authenticated users, integrating with the overall architecture to support personalized shopping experiences<br>- Ensures secure access through authorization middleware, contributing to a modular and scalable backend structure focused on user-centric features.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/authRoute.js'>authRoute.js</a></b></td>
					<td style='padding: 8px;'>- Defines authentication-related API endpoints, facilitating user registration, login, and password recovery processes within the application<br>- Serves as the central routing mechanism for handling user authentication requests, ensuring proper validation and delegation to service functions<br>- Integrates seamlessly into the overall architecture to support secure user access and account management workflows.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/subCategoryRoute.js'>subCategoryRoute.js</a></b></td>
					<td style='padding: 8px;'>- Defines RESTful API endpoints for managing subcategories within the applications hierarchical structure, enabling creation, retrieval, updating, and deletion of subcategory data<br>- Integrates authorization controls to restrict access based on user roles and ensures proper validation and association with parent categories, supporting the overall modular architecture of the project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/couponRoute.js'>couponRoute.js</a></b></td>
					<td style='padding: 8px;'>- Defines RESTful API endpoints for managing coupons within the application, enabling authorized users such as admins and managers to perform CRUD operations<br>- Integrates authentication and authorization to secure access, ensuring that only permitted roles can manipulate coupon data<br>- Serves as a key routing layer connecting client requests to underlying coupon services, supporting the overall architectures modular and secure design.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/brandRoute.js'>brandRoute.js</a></b></td>
					<td style='padding: 8px;'>- Defines RESTful API endpoints for managing brand entities within the application, enabling operations such as retrieval, creation, updating, and deletion<br>- Incorporates authorization checks to restrict access based on user roles and integrates image upload and processing functionalities<br>- Serves as a central routing component that connects client requests to brand-related services, supporting the overall architectures modular and secure design.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/reviewRoute.js'>reviewRoute.js</a></b></td>
					<td style='padding: 8px;'>- Defines review-related API endpoints for managing user reviews within the application<br>- Facilitates retrieving, creating, updating, and deleting reviews while enforcing authorization and validation rules<br>- Integrates with service functions to handle core review operations, supporting the overall architecture by enabling user feedback management and ensuring secure, validated interactions.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/index.js'>index.js</a></b></td>
					<td style='padding: 8px;'>- Defines and mounts the primary API routes for the e-commerce platform, organizing endpoints related to categories, products, users, authentication, reviews, wishlists, addresses, coupons, carts, and orders<br>- Serves as the central routing hub, ensuring structured access to core functionalities and facilitating seamless integration across the applications architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/productRoute.js'>productRoute.js</a></b></td>
					<td style='padding: 8px;'>- Defines RESTful API endpoints for product management, enabling creation, retrieval, updating, and deletion of products within the application<br>- Incorporates authorization controls to restrict sensitive operations to authorized roles and supports nested review routes<br>- Facilitates image upload and processing, ensuring comprehensive product data handling aligned with the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/cartRoute.js'>cartRoute.js</a></b></td>
					<td style='padding: 8px;'>- Defines the API endpoints for managing user shopping carts, enabling operations such as viewing, adding, updating, removing items, clearing the cart, and applying coupons<br>- Integrates authentication and authorization to ensure secure access, serving as a central interface within the e-commerce architecture for seamless cart interactions.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/userRoute.js'>userRoute.js</a></b></td>
					<td style='padding: 8px;'>- Defines user-related API endpoints for managing user data, authentication, and authorization within the application<br>- Facilitates user registration, profile updates, password changes, and account activation/deactivation, while enforcing access control based on user roles<br>- Integrates with validation and image processing services to ensure data integrity and security, supporting the overall architectures user management functionality.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/addressRoute.js'>addressRoute.js</a></b></td>
					<td style='padding: 8px;'>- Defines address management routes, enabling authenticated users to add, retrieve, and delete addresses within the application<br>- Integrates authorization middleware to ensure secure access, supporting user-specific address operations that contribute to personalized user profiles and seamless address handling across the platform.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Routers/orderRoute.js'>orderRoute.js</a></b></td>
					<td style='padding: 8px;'>- Defines API endpoints for managing customer orders, including creation, retrieval, payment updates, and delivery status<br>- Integrates authorization to ensure appropriate access control for users, administrators, and managers<br>- Serves as the central routing layer connecting client requests to order-related business logic within the overall application architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- Services Submodule -->
	<details>
		<summary><b>Services</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ Services</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/categoryService.js'>categoryService.js</a></b></td>
					<td style='padding: 8px;'>- Manages category-related operations within the application, including CRUD functionalities and image handling<br>- Facilitates uploading, resizing, and storing category images, while providing endpoints for retrieving, creating, updating, and deleting categories<br>- Integrates with the overall architecture to support organized categorization and visual representation, ensuring efficient management of category data and assets.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/wishlistService.js'>wishlistService.js</a></b></td>
					<td style='padding: 8px;'>- Provides wishlist management functionalities within the user-centric architecture, enabling users to add, remove, and retrieve products from their personal wishlists<br>- Integrates seamlessly with user data models to ensure real-time updates and consistency, supporting a personalized shopping experience in the broader e-commerce platform<br>- Facilitates protected access, maintaining user privacy and data integrity.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/userService.js'>userService.js</a></b></td>
					<td style='padding: 8px;'>- Provides comprehensive user management functionalities within the application, including user creation, retrieval, updating, password management, and account activation/deactivation<br>- Handles user profile image uploads and processing, ensuring seamless integration of media assets<br>- Serves as the core controller for user-related operations, facilitating secure and efficient interactions aligned with the overall system architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/couponService.js'>couponService.js</a></b></td>
					<td style='padding: 8px;'>- Defines core CRUD operations for managing coupons within the application, enabling authorized users to retrieve, create, update, and delete coupon data<br>- Integrates with a generic handler factory to streamline functionality, supporting the overall architecture of the service layer by facilitating efficient coupon management and ensuring secure access control.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/productService.js'>productService.js</a></b></td>
					<td style='padding: 8px;'>- Manages product-related operations within the application, including image upload and processing, as well as CRUD functionalities<br>- Facilitates seamless handling of product data, ensuring images are optimized and stored correctly, while providing endpoints for retrieving, creating, updating, and deleting products<br>- Integrates with the overall architecture to support product management workflows efficiently.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/cartService.js'>cartService.js</a></b></td>
					<td style='padding: 8px;'>- Manages shopping cart operations within the application, enabling users to add, retrieve, update, and remove products, as well as apply coupons<br>- Ensures seamless cart interactions, maintains accurate total pricing, and integrates coupon discounts, supporting a smooth e-commerce experience aligned with user-specific cart management and order processing workflows.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/brandService.js'>brandService.js</a></b></td>
					<td style='padding: 8px;'>- Defines brand management operations within the application, including CRUD functionalities and image handling<br>- Facilitates uploading, resizing, and storing brand images, while providing endpoints for retrieving, creating, updating, and deleting brand records<br>- Integrates with the overall architecture to support brand-related data management and media processing, ensuring a streamlined and scalable approach to brand representation.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/orderService.js'>orderService.js</a></b></td>
					<td style='padding: 8px;'>- Manages order processing within the e-commerce platform by facilitating cash and card payments, updating inventory, and handling order status updates<br>- Integrates with Stripe for secure payment sessions and webhook events, ensuring seamless order creation, payment confirmation, and inventory management, thereby supporting the entire order lifecycle from cart to delivery.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/subCategoryService.js'>subCategoryService.js</a></b></td>
					<td style='padding: 8px;'>- Defines CRUD operations and middleware for managing subcategories within the applications architecture<br>- Facilitates creation, retrieval, updating, and deletion of subcategory data, supporting nested routing and category association<br>- Ensures streamlined handling of subcategory-related requests, integrating with the overall service layer to maintain data consistency and access control.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/authService.js'>authService.js</a></b></td>
					<td style='padding: 8px;'>- Implements core authentication functionalities including user registration, login, token validation, role-based access control, and password recovery workflows<br>- Facilitates secure user management by handling account verification, password resets via email, and ensuring authorized access to protected routes within the application architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/addressService.js'>addressService.js</a></b></td>
					<td style='padding: 8px;'>- Manages user addresses within the application by enabling addition, removal, and retrieval of addresses linked to authenticated users<br>- Facilitates seamless address management to support personalized user profiles and streamline order fulfillment processes, integrating with the overall user data architecture to maintain consistency and data integrity.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/handlerFactory.js'>handlerFactory.js</a></b></td>
					<td style='padding: 8px;'>- Provides generic, reusable CRUD operation handlers for database modules, streamlining create, read, update, and delete functionalities within the applications architecture<br>- Facilitates consistent API responses, error handling, and query features like filtering, pagination, and population, thereby promoting modularity and reducing boilerplate across different service layers.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Ecommerce-backend/blob/master/Services/reviewService.js'>reviewService.js</a></b></td>
					<td style='padding: 8px;'>- Provides core review management functionalities within the application, enabling retrieval, creation, updating, and deletion of reviews<br>- Supports nested routes for product-specific reviews and ensures proper association of reviews with users and products<br>- Serves as a key component in maintaining user-generated feedback, facilitating review-related operations across the platforms architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### Installation

Build Ecommerce-backend from the source and install dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/Lak-MedRida027/Ecommerce-backend
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd Ecommerce-backend
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

Ecommerce-backend uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
