const { Empresa } = require("../models/empresa.model");

const { catchAsync } = require("../utils/catchAsync.util");

const getEmpresas = catchAsync(async (req, res, next) => {
  const empresas = await Empresa.findAll({
    where: { status: "active" },
  });
  res.status(200).json({
    status: "sucess",
    data: { empresas },
  });
});

const createEmpresa = catchAsync(async (req, res, next) => {
  const { nombre, ubicacion, tipo_negocio } = req.body;

  const newEmpresa = await Empresa.create({
    nombre,
    ubicacion,
    tipo_negocio,
  });
  res.status(201).json({
    status: "sucess",
    data: { newEmpresa },
  });
});

const updateEmpresa = catchAsync(async (req, res, next) => {
  const { nombre, ubicacion, tipo_negocio } = req.body;
  const { empresa } = req;

  await empresa.update({ nombre, ubicacion, tipo_negocio });

  res.status(200).json({
    status: "success",
    data: { empresa },
  });
});

const deleteEmpresa = catchAsync(async (req, res, next) => {
  const { empresa } = req;

  await empresa.update({ status: "deleted" });

  res.status(200).json({
    status: "success",
  });
});

module.exports = { getEmpresas, createEmpresa, updateEmpresa, deleteEmpresa };
