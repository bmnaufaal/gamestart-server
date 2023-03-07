function errorHandler(error, req, res, next) {
  let status = "";
  let message = "";

  switch (error.name) {
    default:
      status = 500;
      message = "Internal server error";
      break;
  }

  console.log(error);
  res.status(status).json({
    message: message,
  });
}

module.exports = errorHandler;
