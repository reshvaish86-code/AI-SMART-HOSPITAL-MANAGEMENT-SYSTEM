/**
 * Restrict routes to specific user roles
 * @param  {...string} roles - e.g. 'patient', 'doctor', 'admin'
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        status: 'fail',
        message: `Forbidden. Role '${req.user ? req.user.role : 'unauthenticated'}' is not authorized to access this resource.`
      });
    }
    next();
  };
};

module.exports = { authorize };
