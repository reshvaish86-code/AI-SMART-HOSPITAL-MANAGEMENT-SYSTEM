/**
 * Global API Error Handler Middleware
 */
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log to console for dev
  if (process.env.NODE_ENV !== 'production') {
    console.error('⚠️ [API Error Details]:', err);
  }

  // Mongoose Bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    return res.status(404).json({ status: 'fail', message });
  }

  // Mongoose Duplicate Key (11000)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    const message = `Duplicate value entered for '${field}'. Please use another value.`;
    return res.status(400).json({ status: 'fail', message });
  }

  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join('. ');
    return res.status(400).json({ status: 'fail', message });
  }

  // JWT Errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ status: 'fail', message: 'Invalid authorization token.' });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ status: 'fail', message: 'Session expired. Please log in again.' });
  }

  res.status(error.statusCode || 500).json({
    status: 'error',
    message: error.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;
