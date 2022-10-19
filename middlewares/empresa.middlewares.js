const { Empresa } = require("../models/empresa.model");

const { catchAsync } = require("../utils/catchAsync.util");

const { AppError } = require("../utils/appError.util");

const empresaExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const empresa = await Empresa.findOne({ where: { id } });

  if (!empresa) {
    return next(new AppError("Empresa no existe", 404));
  }
  req.empresa = empresa;
  next();
});

module.exports = { empresaExists };
