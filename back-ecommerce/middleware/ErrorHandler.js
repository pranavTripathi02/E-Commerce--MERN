const { StatusCodes } = require('http-status-codes');

const ErrorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Error please try again later',
  };
  res.status(customError.statusCode).json(customError.message);
};

module.exports = ErrorHandlerMiddleware;
