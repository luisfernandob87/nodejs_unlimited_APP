const { db, DataTypes } = require("../utils/database.util");

const User = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_de_nacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  codigo_postal: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cargo_reciente: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  estudiante: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  universidad: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  especializacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  anio_inicio: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  anio_fin: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  en_busqueda_de_empleo: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "normal",
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active",
  },
});

module.exports = { User };
