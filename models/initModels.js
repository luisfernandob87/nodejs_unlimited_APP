// Models
const { User } = require("./user.model");
const { Empresa } = require("./empresa.model");
const { Oferta } = require("./oferta.model");
const { Aplicacion } = require("./aplicacion_a_ofertas.model");

const initModels = () => {
  User.hasMany(Aplicacion, { foreignKey: "usuarioId" });
  Aplicacion.belongsTo(User);

  Empresa.hasMany(Oferta, { foreignKey: "empresaId" });
  Oferta.belongsTo(Empresa);

  Oferta.hasMany(Aplicacion, { foreignKey: "ofertaId" });
  Aplicacion.belongsTo(Oferta);
};

module.exports = { initModels };
