// backend/src/app.js
const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/env');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');

const app = express();



// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
  }));app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));