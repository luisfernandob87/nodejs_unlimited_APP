const { db, DataTypes } = require("../utils/database.util");

const Aplicacion = db.define("aplicacion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idOferta: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_de_aplicacion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active",
  },
});

module.exports = { Aplicacion };
