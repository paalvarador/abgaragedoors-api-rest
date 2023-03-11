require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const menuRoutes = require('./routes/menu');
const aboutRoutes = require('./routes/about');
const workRoutes = require('./routes/work');
const testimonialRoutes = require('./routes/testimonial');
const contactRoutes = require('./routes/contact');
const serviceRoutes = require('./routes/service');
const socialRoutes = require('./routes/social');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

/** CORS setting with OPTIONS pre-flight handling */
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, accept, access-control-allow-origin');

    if ('OPTIONS' == req.method) res.send(200);
    else next();
});

// middleware
app.use(express.json());
app.use('/api', menuRoutes);
app.use('/api', aboutRoutes);
app.use('/api', workRoutes);
app.use('/api', testimonialRoutes);
app.use('/api', contactRoutes);
app.use('/api', serviceRoutes);
app.use('/api', socialRoutes);


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


app.listen(port, () => console.log("http://localhost:" + port, port));

