const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

// Routers
const { usersRouter } = require("./routes/users.routes");
const { empresaRouter } = require("./routes/empresas.routes");
const { ofertaRouter } = require("./routes/ofertas.routes");
const { aplicacionRouter } = require("./routes/aplicacion_a_ofertas.routes");

// Controllers
const { globalErrorHandler } = require("./controllers/error.controller");

// Init our Express app
const app = express();

// Enable Express app to receive JSON data
app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(compression());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
}

// Define endpoints
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/empresas", empresaRouter);
app.use("/api/v1/ofertas", ofertaRouter);
app.use("/api/v1/aplicacion", aplicacionRouter);

// Global error handler
app.use(globalErrorHandler);

// Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
