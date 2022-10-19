const { Oferta } = require("../models/oferta.model");
const { Empresa } = require("../models/empresa.model");
const { AppError } = require("../utils/appError.util");

const { catchAsync } = require("../utils/catchAsync.util");

const getOfertas = catchAsync(async (req, res, next) => {
  const ofertas = await Oferta.findAll({
    include: [{ model: Empresa }],
    where: { status: "active" },
  });
  res.status(200).json({
    status: "success",
    data: { ofertas },
  });
});
const createOfertas = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;
  const { nombre, rol, ubicacion, tipo_contratacion, empresaId } = req.body;

  // if (sessionUser.role !== "admin") {
  //   return next(new AppError("No eres Admin", 400));
  // }
  const newOferta = await Oferta.create({
    nombre,
    rol,
    ubicacion,
    tipo_contratacion,
    empresaId,
  });
  res.status(201).json({
    status: "success",
    data: { newOferta },
  });
});
const updateOfertas = catchAsync(async (req, res, next) => {
  const { oferta } = req;
  const { nombre, rol, ubicacion, tipo_contratacion, empresaId, status } =
    req.body;

  await oferta.update({
    nombre,
    rol,
    ubicacion,
    tipo_contratacion,
    empresaId,
    status,
  });
  res.status(201).json({
    status: "success",
    data: { oferta },
  });
});
const deleteOfertas = catchAsync(async (req, res, next) => {
  const { oferta } = req;

  await oferta.update({ status: "deleted" });
  res.status(200).json({
    status: "success",
    data: { oferta },
  });
});

module.exports = { getOfertas, createOfertas, updateOfertas, deleteOfertas };
