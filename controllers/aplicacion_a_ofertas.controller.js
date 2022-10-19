const { Aplicacion } = require("../models/aplicacion_a_ofertas.model");
const { AppError } = require("../utils/appError.util");

const { catchAsync } = require("../utils/catchAsync.util");

const getAplicaciones = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;

  const aplicaciones = await Aplicacion.findAll({
    where: { status: "active", idUsuario: sessionUser.id },
  });
  res.status(200).json({
    status: "success",
    data: { aplicaciones },
  });
});

const createAplicacion = catchAsync(async (req, res, next) => {
  const { usuarioId, ofertaId, fecha_de_aplicacion } = req.body;

  const newAplicacion = await Aplicacion.create({
    usuarioId,
    ofertaId,
    fecha_de_aplicacion,
  });
  res.status(201).json({
    status: "success",
    data: { newAplicacion },
  });
});

const updateAplicacion = catchAsync(async (req, res, next) => {});

const deleteAplicacion = catchAsync(async (req, res, next) => {
  const { user, aplicacion } = req;

  if (user.id !== aplicacion.usuarioId) {
    return next(new AppError("No es tu aplicacion", 400));
  }

  const deleteAplicacion = await Aplicacion.update({ status: "deleted" });
  res.status(200).json({
    status: "success",
    data: { deleteAplicacion },
  });
});

module.exports = {
  getAplicaciones,
  createAplicacion,
  updateAplicacion,
  deleteAplicacion,
};
