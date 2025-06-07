const express = require("express");
const mongoose = require("mongoose");
const connectiondb = require("./src/config/database");
const menuRoutes = require("./src/routes/menu");
const aboutRoutes = require("./src/routes/about");
const workRoutes = require("./src/routes/work");
const testimonialRoutes = require("./src/routes/testimonial");
const contactRoutes = require("./src/routes/contact");
const serviceRoutes = require("./src/routes/service");
const socialRoutes = require("./src/routes/social");
const homeRoutes = require("./src/routes/home");
const emailRoutes = require("./src/routes/email");
const index = require("./src/routes/index");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const crypto = require("crypto");
const { allowedNodeEnvironmentFlags } = require("process");

const app = express();

// Settings
const port = process.env.PORT || 3000;

/** CORS setting with OPTIONS pre-flight handling */
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes: Rutas de la Aplicacion
app.use("/", index);
app.use("/api", menuRoutes);
app.use("/api", aboutRoutes);
app.use("/api", workRoutes);
app.use("/api", testimonialRoutes);
app.use("/api", contactRoutes);
app.use("/api", serviceRoutes);
app.use("/api", socialRoutes);
app.use("/api", homeRoutes);
app.use("/api", emailRoutes);

//Mongo DB Connect
const DB_URI = process.env.DB_URI;
mongoose
  .connect(
    "mongodb+srv://abgarage:bRqJZTgFTvKIPhHH@cluster0.nkcsibf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conectado a la base de datos Mongo"))
  .catch((error) => console.error(error));

// Start Server
app.listen(port, () => console.log("http://localhost:" + port, port));
