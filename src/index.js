require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const menuRoutes = require('./routes/menu');
const aboutRoutes = require('./routes/about');
const workRoutes = require('./routes/work');
const testimonialRoutes = require('./routes/testimonial');
const contactRoutes = require('./routes/contact');
const serviceRoutes = require('./routes/service');

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use('/api', menuRoutes);
app.use('/api', aboutRoutes);
app.use('/api', workRoutes);
app.use('/api', testimonialRoutes);
app.use('/api', contactRoutes);
app.use('/api', serviceRoutes);

// Routes: Rutas de la Aplicacion
app.get("/", (req, res) => {
    res.send("Welcome to ABGARAGE API");
});

// Mongo DB Connect
const DB_URI = process.env.DB_URI;
mongoose
    .connect(DB_URI)
    .then(() => console.log("Conectado a la base de datos Mongo"))
    .catch((error) => console.error(error));


app.listen(port, () => console.log("http://localhost:"+port, port));

