const { Aplicacion } = require("../models/aplicacion_a_ofertas.model");

const { catchAsync } = require("../utils/catchAsync.util");

const { AppError } = require("../utils/appError.util");

const aplicacionExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const aplicacion = await Aplicacion.findOne({ where: { id } });

  if (!aplicacion) {
    return next(new AppError("Aplicacion no existe", 404));
  }
  req.aplicacion = aplicacion;
  next();
});

module.exports = { aplicacionExists };
