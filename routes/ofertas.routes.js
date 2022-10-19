const express = require("express");

const {
  createOfertas,
  deleteOfertas,
  getOfertas,
  updateOfertas,
} = require("../controllers/ofertas.controller");

const {
  protectSession,
  protectUsersAccount,
} = require("../middlewares/auth.middlewares");
const { ofertaExists } = require("../middlewares/ofertas.middlewares");

const ofertaRouter = express.Router();

// ofertaRouter.use(protectSession);

ofertaRouter.get("/", getOfertas);

ofertaRouter.post("/", createOfertas);

ofertaRouter.patch("/:id", ofertaExists, updateOfertas);

ofertaRouter.delete("/:id", ofertaExists, deleteOfertas);

module.exports = { ofertaRouter };
