# Picture – Backend

A powerful RESTful backend service for the **Picture** image‐sharing platform.  
It handles user authentication, image uploads & management, and serves the frontend application seamlessly.

## Live API (if applicable)  
[https://picture-backend.vercel.app](https://picture-backend.vercel.app)  
*(Update the URL if your deployment differs)*

## Features  
- JWT‐based authentication (signup, login, token refresh)  
- Secure image upload, retrieval & deletion  
- Albums & photo metadata management  
- Integration with the frontend application (Picture Frontend)  
- Scalable architecture using Node.js, Express, MongoDB  

## Tech Stack  
- Node.js & Express.js  
- MongoDB / Mongoose for data modelling  
- JSON Web Tokens (JWT) for security  
- Middleware for authentication, error handling, file upload  
- Folder structure optimized for maintainability  

## 📁 Folder Structure  
```
Picture_Backend/
├── config/ # Configuration (database, environment variables)
├── controllers/ # Express controllers (business logic)
├── middleware/ # Authentication, file upload, error handling
├── models/ # Mongoose models / schemas
├── routes/ # API route definitions
├── utils/ # Helper functions, constants
├── index.js # Entry point of application
├── .env # Environment variables
├── package.json # Project dependencies & scripts
└── README.md # Project documentation
```

## API Endpoints  
Here are some of the main endpoints (update to match your implementation):
```
POST /api/auth/register # Create a new user
POST /api/auth/login # User login – returns JWT
GET /api/images # Get all images (requires auth)
POST /api/images/upload # Upload a new image (requires auth)
DELETE /api/images/:id # Delete an image by ID (requires auth)
```


## Installation & Running Locally  
### Prerequisites  
- Node.js (version 14+ recommended)  
- MongoDB (local or cloud)  
### Setup  
```bash
git clone https://github.com/Anurag-git04/Picture_Backend.git  
cd Picture_Backend  
npm install                # install dependencies  
```
### Sample env 
```bash
# 🌐 Server Configuration
PORT=8080

# 🗄️ MongoDB Connection
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority

# 🔐 JWT Configuration
JWT_SECRET=your_jwt_secret_key

# ☁️ Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# 🔑 Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

```
### Start the Server
```bash
node index.js
npm run dev                # or npm start depending on your scripts
```

## 🧑‍💻 Author  
**Anurag Shaw**  
Full-Stack Developer | MERN & TypeScript Enthusiast  
🌐 GitHub: [https://github.com/Anurag-git04](https://github.com/Anurag-git04)  
🔗 LinkedIn: [https://www.linkedin.com/in/anuragshaw04/](https://www.linkedin.com/in/anuragshaw04/)
