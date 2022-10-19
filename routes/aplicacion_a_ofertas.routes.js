const express = require("express");

const {
  getAplicaciones,
  createAplicacion,
  updateAplicacion,
  deleteAplicacion,
} = require("../controllers/aplicacion_a_ofertas.controller");

const { protectSession } = require("../middlewares/auth.middlewares");
const { aplicacionExists } = require("../middlewares/aplicacion.middlewares");

const aplicacionRouter = express.Router();

aplicacionRouter.use(protectSession);

aplicacionRouter.get("/", getAplicaciones);

aplicacionRouter.post("/", createAplicacion);

aplicacionRouter.patch("/:id", aplicacionExists, updateAplicacion);

aplicacionRouter.delete("/:id", aplicacionExists, deleteAplicacion);

module.exports = { aplicacionRouter };
