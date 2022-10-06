const { CustomAPIError } = require('../errors/custom-error');
const errorHandlerMiddleware = (err, req, res, next) => {
   if (err instanceof CustomAPIError) {
      return res.status(err.statusCode).json({ msg: err.message });
   }
   return res
      .status(500)
      .json({ msg: 'Algo salió mal, por favor intentelo de nuevo' });
};

module.exports = errorHandlerMiddleware;
