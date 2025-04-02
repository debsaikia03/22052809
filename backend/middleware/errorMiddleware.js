const errorHandler = (err, req, res, next) => {
    console.error(`❌ Error: ${err.message}`); // Log the error
  
    const statusCode = res.statusCode < 400 ? 500 : res.statusCode; // Ensure correct status code
    res.status(statusCode).json({
      success: false,
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack trace in production
    });
  };
  
  export default errorHandler;
  