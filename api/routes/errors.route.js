const handleRouteErrors = (error, req, res, next) => {
  console.log('name', error.name);
  if (error.name === 'SequelizeValidationError') {
    return res.status(400).json({
      message: "Validation errors",
      errors: error.errors.map(e => e.message)
    })
  };

  res.status(error.status || 500).json({
    status: 'error',
    error: {
      message: error.message || serverErrorMsg,
    },
  });
}

module.exports = handleRouteErrors;