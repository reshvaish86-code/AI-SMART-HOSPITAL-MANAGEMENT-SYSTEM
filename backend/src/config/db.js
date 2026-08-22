const mongoose = require('mongoose');

/**
 * Connect to MongoDB Atlas / Local MongoDB instance with auto-retry
 */
const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ai_smart_hospital';

  if (uri.includes('<db_password>') || uri.includes('<password>')) {
    console.error('❌ [Database Configuration Error]: MONGODB_URI still contains placeholder <db_password> or <password>. Please replace it with your real MongoDB user password in Render Environment Variables.');
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 10000,
    });

    console.log(`✅ [Database] MongoDB Connected: ${conn.connection.host}`);
    console.log(`📦 [Database] Active Database Name: ${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ [Database Error] Connection failed: ${error.message}`);
    console.warn(`⚠️ [Database Warning] Retrying MongoDB connection in 5 seconds...`);
    setTimeout(connectDB, 5000);
  }
};

// Monitor connection events
mongoose.connection.on('connected', () => {
  console.log('✅ [Database Event] Mongoose connected to MongoDB Atlas cluster');
});

mongoose.connection.on('disconnected', () => {
  console.log('ℹ️ [Database Event] MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error(`❌ [Database Event] MongoDB connection error: ${err.message}`);
});

module.exports = connectDB;
