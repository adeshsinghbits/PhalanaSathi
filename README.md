🚗 PhalanaSathi

PhalanaSathi is a modern ride-sharing platform inspired by community-based travel systems.
It enables users to offer rides, book seats, and travel smarter together.

🌍 Vision

To build a trusted, scalable, and user-friendly ride-sharing ecosystem that connects drivers and passengers efficiently.

🚀 Features
👤 Authentication

User Registration

Login

JWT-based authentication

Password hashing

Role-based access (User / Driver / Admin)

🚘 Ride Management

Create Ride

Search Ride

Book Seat

Cancel Booking

⭐ Trust & Safety

Rating System

Profile Verification

Secure Password Handling

📍 Location Support

Geo-based search (2dsphere index ready)

Nearby ride filtering (future-ready)

🛠 Tech Stack
Frontend

React

Tailwind CSS

React Router

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Bcrypt

📂 Project Structure
backend/
 ├── src/
 │   ├── controllers/
 │   ├── models/
 │   ├── routes/
 │   ├── middleware/
 │   ├── config/
 │   └── server.js

frontend/
 ├── src/
 │   ├── pages/
 │   ├── components/
 │   ├── layouts/
 │   └── App.jsx
⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/yourusername/PhalanaSathi.git
2️⃣ Backend Setup
cd backend
npm install
npm run dev

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🔐 Environment Variables
Variable	Description
PORT	Backend server port
MONGO_URI	MongoDB connection string
JWT_SECRET	Secret for JWT authentication
🧱 Database Models

User

Ride

Booking

Review (future)

Payment (future)

📈 Future Roadmap

OTP verification

Real-time ride tracking

Payment integration

Notifications

Microservices migration

Mobile app version

🤝 Contributing

We welcome contributions to improve PhalanaSathi!

If you'd like to contribute:

1️⃣ Fork the repository
2️⃣ Create a new branch
git checkout -b feature/your-feature-name
3️⃣ Make your changes
4️⃣ Commit clearly
git commit -m "Add: short description of feature"
5️⃣ Push your branch
git push origin feature/your-feature-name
6️⃣ Open a Pull Request
📌 Contribution Guidelines

Follow clean code practices

Maintain consistent folder structure

Write meaningful commit messages

Test before submitting PR

Do not push directly to main branch

🧪 Reporting Issues

If you find a bug or have suggestions:

Open an Issue

Provide steps to reproduce

Mention expected vs actual behavior

📜 License

This project is licensed under the MIT License.

🌟 Support

If you like this project:

⭐ Star the repository

Share it

Contribute improvements
