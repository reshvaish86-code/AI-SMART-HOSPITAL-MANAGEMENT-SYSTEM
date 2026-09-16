const mongoose = require('mongoose');

let isConnecting = false;

/**
 * Connect to MongoDB Atlas / Local MongoDB instance with aggressive auto-retry
 */
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  if (isConnecting) {
    return;
  }

  isConnecting = true;
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ai_smart_hospital';

  if (uri.includes('<db_password>') || uri.includes('<password>')) {
    console.error('❌ [Database Configuration Error]: MONGODB_URI contains placeholder. Please set your real MongoDB password in Render.');
  }

  try {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect().catch(() => {});
    }

    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 20000,
      connectTimeoutMS: 20000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      autoIndex: true
    });

    isConnecting = false;
    console.log(`✅ [Database] MongoDB Connected: ${conn.connection.host}`);
    console.log(`📦 [Database] Active Database Name: ${conn.connection.name}`);
  } catch (error) {
    isConnecting = false;
    console.error(`❌ [Database Error] Connection failed: ${error.message}`);
    console.warn(`⚠️ [Database Warning] Re-attempting MongoDB connection in 3 seconds...`);
    setTimeout(connectDB, 3000);
  }
};

// Monitor connection events
mongoose.connection.on('connected', () => {
  isConnecting = false;
  console.log('✅ [Database Event] Mongoose connected to MongoDB Atlas cluster');
});

mongoose.connection.on('disconnected', () => {
  isConnecting = false;
  console.log('ℹ️ [Database Event] MongoDB disconnected. Triggering auto-reconnect...');
  setTimeout(connectDB, 2000);
});

mongoose.connection.on('error', (err) => {
  isConnecting = false;
  console.error(`❌ [Database Event] MongoDB connection error: ${err.message}`);
});

module.exports = connectDB;
