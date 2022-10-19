const { Oferta } = require("../models/oferta.model");

const { catchAsync } = require("../utils/catchAsync.util");

const { AppError } = require("../utils/appError.util");

const ofertaExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const oferta = await Oferta.findOne({ where: { id } });

  if (!oferta) {
    return next(new AppError("Oferta no existe", 404));
  }
  req.oferta = oferta;
  next();
});

module.exports = { ofertaExists };
