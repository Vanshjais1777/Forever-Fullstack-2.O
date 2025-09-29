# Forever - Modern E-Commerce Platform

[![Made with React](https://img.shields.io/badge/Made_with-React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Powered by Node.js](https://img.shields.io/badge/Powered_by-Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Database MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled_with-Tailwind-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🌟 Overview

Forever is a full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It features both customer-facing and admin interfaces, providing a complete solution for online retail operations.

## ✨ Key Features

### Customer Interface
- 🛍️ Intuitive product browsing and search
- 🛒 Dynamic shopping cart functionality
- 💳 Secure checkout process
- 👤 User authentication and profile management
- 📦 Order tracking and history
- 🔍 Advanced product filtering and sorting

### Admin Dashboard
- 📊 Comprehensive order management
- 📝 Product inventory management
- 🏷️ Category and tag management
- 🖼️ Image upload and management via Cloudinary

## 🛠️ Technical Stack

### Frontend
- **React.js** - UI development
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling and responsive design
- **Context API** - State management
- **React Router** - Navigation and routing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Cloudinary** - Image management
- **Multer** - File upload handling

## 🚀 Architecture

The project follows a modern three-tier architecture:
1. **Frontend** (Customer & Admin interfaces)
2. **Backend** (RESTful API)
3. **Database** (MongoDB)

### Project Structure
```
├── frontend/          # Customer interface
├── admin/            # Admin dashboard
└── backend/          # Server application
    ├── config/       # Configuration files
    ├── controllers/  # Business logic
    ├── middleware/   # Custom middleware
    ├── models/       # Database models
    └── routes/       # API endpoints
```

## 🔐 Security Features

- JWT-based authentication
- Secure password hashing
- Role-based access control
- Protected API endpoints
- Input validation and sanitization

## 💻 Development

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Cloudinary account

### Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/YourUsername/Forever-Fullstack-2.O.git
cd Forever-Fullstack-2.O
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Install admin dashboard dependencies
cd ../admin
npm install
```

3. Set up environment variables
```bash
# Backend .env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Start the development servers
```bash
# Start backend server
cd backend
npm run dev

# Start frontend
cd frontend
npm run dev

# Start admin dashboard
cd admin
npm run dev
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop devices
- Tablets
- Mobile phones

## 🌐 Deployment

The application is configured for deployment on Vercel with separate configurations for frontend, backend, and admin dashboard.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/YourUsername/Forever-Fullstack-2.O/issues).

## 📄 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

**Vansh Jaiswal**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn URL]
- GitHub: [@Vanshjais1777](https://github.com/Vanshjais1777)

---

⭐️ If you like this project, please give it a star on GitHub!