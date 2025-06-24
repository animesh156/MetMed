
# 🩺 Doctor Appointment Booking Platform

A full-stack MERN application for online appointment booking with real-time video consultations (via Jitsi), patient-doctor authentication, earnings tracking, and doctor reviews.

## 🚀 Features

### 👨‍⚕️ Doctor Features
- View and accept/cancel appointments
- Auto-generate Jitsi video meeting links
- Track earnings per appointment
- Receive patient reviews

### 🧑‍💼 Patient Features
- Book appointments with available doctors
- Pay online (or mark as paid)
- Join video consultations securely
- Review doctors after consultations

### 🔒 Authentication
- Firebase Auth for secure login (email/password + Google)
- Role-based access: Patient, Doctor, Admin
- HTTP-only cookies for session protection

## 📺 Tech Stack

| Tech              | Description                         |
|-------------------|-------------------------------------|
| React.js          | Frontend UI                         |
| Tailwind CSS      | Styling                             |
| Node.js + Express | Backend REST API                    |
| MongoDB + Mongoose| Database & Schema Modeling          |
| Firebase          | Auth for login/signup               |
| Jitsi Meet        | Video call integration              |
| Axios             | HTTP requests                       |

## 📂 Folder Structure

```
project/
├── client/                   # React Frontend
│   ├── pages/                # Pages like Booking, Reviews
│   ├── components/           # Reusable UI components
│   └── utils/                # Axios wrapper
├── server/                   # Express Backend
│   ├── models/               # Mongoose schemas
│   ├── routes/               # Route handlers
│   └── controllers/          # Controller logic
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/doctor-app.git
cd doctor-app
```

### 2. Backend Setup

```bash
cd server
npm install
```

- Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/doctor-app
FIREBASE_API_KEY=your_firebase_key
JWT_SECRET=your_jwt_secret
```

- Start server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd client
npm install
```

- Create `.env` file:

```env
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_app.firebaseapp.com
```

- Start frontend:

```bash
npm run dev
```

## 📦 APIs (Highlights)

| Method | Endpoint                      | Description                    |
|--------|-------------------------------|--------------------------------|
| GET    | `/doctor/schedule`            | Get doctor’s appointments      |
| PUT    | `/doctor/update-status`       | Confirm/cancel appointment     |
| POST   | `/doctor/earnings`            | Record earnings                |
| POST   | `/appointment/create`         | Book appointment (patient)     |
| GET    | `/patient/appointments`       | List patient’s upcoming appts  |
| POST   | `/review`                     | Submit doctor review           |

## 🧪 Upcoming Features

- Stripe payment integration

- Real-time notifications (via socket.io or email)

## 🙏 Acknowledgements

- [Jitsi Meet](https://jitsi.org/)
- [Firebase Auth](https://firebase.google.com/products/auth/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Tailwind CSS](https://tailwindcss.com/)

---


