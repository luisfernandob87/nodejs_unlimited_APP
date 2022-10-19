const express = require("express");

const {
  getEmpresas,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa,
} = require("../controllers/empresas.controller");

const { protectSession } = require("../middlewares/auth.middlewares");
const { empresaExists } = require("../middlewares/empresa.middlewares");

const empresaRouter = express.Router();

// empresaRouter.use(protectSession);

empresaRouter.get("/", getEmpresas);

empresaRouter.post("/", createEmpresa);

empresaRouter.patch("/:id", empresaExists, updateEmpresa);

empresaRouter.delete("/:id", empresaExists, deleteEmpresa);

module.exports = { empresaRouter };
