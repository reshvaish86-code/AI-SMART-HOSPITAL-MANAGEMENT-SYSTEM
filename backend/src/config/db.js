const mongoose = require('mongoose');

/**
 * Connect to MongoDB Atlas / Local MongoDB instance
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`✅ [Database] MongoDB Connected: ${conn.connection.host}`);
    console.log(`📦 [Database] Active Database Name: ${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ [Database Error] Connection failed: ${error.message}`);
    console.warn(`⚠️ [Database Warning] Running in offline mode or please verify MONGODB_URI in backend/.env`);
    // Non-fatal during initial architecture setup to permit API health probing
  }
};

// Monitor connection events
mongoose.connection.on('disconnected', () => {
  console.log('ℹ️ [Database] MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error(`❌ [Database Error] MongoDB connection error: ${err.message}`);
});

module.exports = connectDB;
