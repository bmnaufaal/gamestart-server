function errorHandler(error, req, res, next) {
  let code = "";
  let message = "";

  switch (error.name) {
    case "AlreadyOnWishlist":
      code = 400;
      message = "Game is alraedy on wishlist";
      break;
    case "AxiosError":
      code = 400;
      message = "Axios Error";
      break;
    case "NotFound":
      code = 404;
      message = "Data not found";
      break;
    case "Forbidden":
      code = 403;
      message = "Not authorized";
      break;
    case "Unauthenticated":
      code = 401;
      message = "Unauthenticated";
      break;
    case "JsonWebTokenError":
    case "InvalidAccessToken":
      code = 401;
      message = "Invalid token";
      break;
    case "InvalidEmail":
      code = 400;
      message = "Email is required";
      break;
    case "InvalidPassword":
      code = 400;
      message = "Password is required";
      break;
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      code = 400;
      message = error.errors[0].message;
      break;
    default:
      code = 500;
      message = "Internal server error";
      break;
  }

  console.log(error);
  res.status(code).json({
    message: message,
  });
}

module.exports = errorHandler;
