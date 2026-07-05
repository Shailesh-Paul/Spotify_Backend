# 🎵 Spotify Backend API

A robust **Spotify-inspired Backend REST API** built with **Node.js**, **Express.js**, and **MongoDB**. This project provides secure authentication, role-based authorization, music upload, album management, and media storage using **ImageKit**.

> 🚀 Built as a backend service for a Spotify-like music streaming application.

---

## 📌 Features

- 🔐 JWT Authentication
- 🍪 Cookie-Based Authentication
- 🔒 Password Hashing using bcrypt
- 👨‍🎤 Artist Role Authorization
- 🎵 Upload Music
- 💿 Create Albums
- 📂 Fetch Music
- 📀 Fetch Albums
- ☁️ ImageKit File Storage
- 🛡️ Protected API Routes
- 📁 MVC Architecture
- 🌐 RESTful API Design

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| Multer | File Upload |
| ImageKit | Cloud File Storage |
| Cookie Parser | Cookie Management |
| dotenv | Environment Variables |

---

# 📂 Project Structure

```text
spotify-backend/
│
├── src
│   ├── controllers
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   │
│   ├── db
│   │   └── db.js
│   │
│   ├── middlewares
│   │   └── auth.middleware.js
│   │
│   ├── models
│   │   ├── user.model.js
│   │   ├── music.model.js
│   │   └── album.model.js
│   │
│   ├── routes
│   │   ├── auth.routes.js
│   │   └── music.routes.js
│   │
│   ├── services
│   │   └── storage.service.js
│   │
│   └── app.js
│
├── server.js
├── package.json
└── .gitignore
```

---

# ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/spotify-backend.git
```

### Navigate to the project

```bash
cd spotify-backend
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=
MONGODB_URI=

JWT_SECRET=

IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
```

### Start Development Server

```bash
npm run dev
```

### Production

```bash
npm start
```

---

# 🔐 Authentication

The API uses **JWT Authentication** with **HTTP Cookies**.

### Authentication Flow

```
Register/Login
        │
        ▼
Generate JWT Token
        │
        ▼
Store Token in Cookie
        │
        ▼
Protected Routes
        │
        ▼
Role Verification
```

Only users with the **Artist** role can upload music and create albums.

---

# 🎵 API Endpoints

## Authentication

| Method | Endpoint | Description |
|----------|------------------|----------------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| POST | `/api/auth/logout` | Logout User |

---

## Music

| Method | Endpoint | Description |
|----------|--------------------|--------------------|
| POST | `/api/music/upload` | Upload Music |
| POST | `/api/music/album` | Create Album |
| GET | `/api/music` | Get All Music |
| GET | `/api/music/albums` | Get All Albums |

---

# 🗄️ Database Models

## User

- Name
- Email
- Password
- Role

---

## Music

- Title
- URI
- Artist

---

## Album

- Title
- Cover Image
- Songs
- Artist

---

# ☁️ File Upload

Music files are uploaded using **Multer** and stored securely on **ImageKit**.

---

# 🏗️ Architecture

```
                Client
                   │
                   ▼
             Express Routes
                   │
                   ▼
            Authentication
             & Middleware
                   │
                   ▼
             Controllers
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
   MongoDB               ImageKit
```

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing
- Protected Routes
- Role-Based Authorization
- Secure Cookie Handling
- Environment Variable Management

---

# 🚀 Future Improvements

- Playlist Management
- Like Songs
- Recently Played
- Search API
- Music Streaming
- Refresh Token Authentication
- User Profile
- Recommendation System
- Docker Support
- API Documentation with Swagger
- Unit & Integration Testing

---

# 📦 Dependencies

- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- ImageKit
- Cookie Parser
- dotenv

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Shailesh Paul**

GitHub: https://github.com/your-github-username

---

⭐ If you found this project useful, consider giving it a star.
