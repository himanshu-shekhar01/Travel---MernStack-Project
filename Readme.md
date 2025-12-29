# 🌍 TravelXpress – Travel Booking Web Application (MERN Stack)

TravelXpress is a full-stack travel booking web application built using the **MERN stack**.  
It allows users to explore tours, search destinations, view tour details, book trips, and submit reviews with authentication.

---

## 🚀 Features

### 👤 User Features
- User registration & login (JWT Authentication)
- View all available tours
- Search tours by city, distance & group size
- View detailed tour information
- Book tours
- Submit reviews & ratings
- View reviews with username & date
- Secure logout

### 🛠 Admin / Backend Features
- JWT-based authentication & authorization
- Role-based access (User / Admin)
- CRUD operations for tours
- Review management
- Booking management
- Secure API routes

---

## 🧑‍💻 Tech Stack

### Frontend
- React.js
- React Router
- Context API
- Reactstrap
- CSS / Flexbox
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Cookie-based authentication

---

## 📁 Project Structure

TravelXpress/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── hooks/
│ │ ├── utils/
│ │ └── assets/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── server.js
│
└── README.md


---

## 🔐 Authentication Flow

- JWT token generated on login
- Token stored in **HTTP-only cookies**
- Protected routes using `verifyToken`, `verifyUser`, `verifyAdmin`
- Authorization checked on backend APIs

---

## 🔍 Search Functionality

Users can search tours using:
- City
- Distance
- Maximum group size

Results are displayed on a separate search results page.

---

## 📝 Review System

- Logged-in users can submit reviews
- Reviews include:
  - Username
  - Rating
  - Review text
  - Date
- Reviews are linked to tours in MongoDB

---

## 📦 Booking System

- Users can book tours by selecting:
  - Date
  - Number of guests
- Total price calculated dynamically
- Booking stored securely in database

---

## ⚙️ Environment Variables

Create a `.env` file in the backend folder:




### 1️⃣ Clone the repository
```bash
git clone https://github.com/himanshu-shekhar01/Travel---MernStack-Project.git

Frontend Setup
cd frontend
npm install
npm run dev

Backend Setup
cd backend
npm install
npm run dev
