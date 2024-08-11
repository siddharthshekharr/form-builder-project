// backend/src/config/env.js
require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 4000, // Changed default port to 4000
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/formbuilder',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
};