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
const homeRoutes = require('./routes/home');
const emailRoutes = require("./routes/email")
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");
const index = require("./routes/index");
const crypto = require("crypto");

const app = express();

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, crypto.randomUUID() + path.extname(file.originalname));
    }
});

// Settings 
const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/** CORS setting with OPTIONS pre-flight handling */
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, accept, access-control-allow-origin');

    if ('OPTIONS' == req.method) res.send(200);
    else next();
});

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(multer({
    storage: storage
}).single('image'));

// Routes
app.use('/api', menuRoutes);
app.use('/api', aboutRoutes);
app.use('/api', workRoutes);
app.use('/api', testimonialRoutes);
app.use('/api', contactRoutes);
app.use('/api', serviceRoutes);
app.use('/api', socialRoutes);
app.use('/api', homeRoutes);
app.use('/api', emailRoutes)

// Routes: Rutas de la Aplicacion
app.use(index);

// Mongo DB Connect
const DB_URI = process.env.DB_URI;
mongoose
    .connect("mongodb+srv://abgarage:bRqJZTgFTvKIPhHH@cluster0.nkcsibf.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Conectado a la base de datos Mongo"))
    .catch((error) => console.error(error));

// Start Server
app.listen(port, () => console.log("http://localhost:" + port, port));

