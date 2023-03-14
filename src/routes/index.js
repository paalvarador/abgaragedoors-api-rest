const { Router } = require("express");
const About = require("../models/about");

const router = Router();

// Main server router (http://localhost/port)
router.get('/', (req, res) => {
    res.send("Index page");
});

// Upload Images to About 
router.get('/about/upload', (req, res) => {
    res.send("upload");
});

router.post('/about/upload', (req, res) => {
    const about = new About();
    about.image = '/img/uploads/' + req.file.filename;
    about.title = req.body.title;
    about.description = req.body.description;

    console.log(about);
    res.send("Image uploaded correctly");
});

router.get('/about/delete/:id', (req, res) => {
    res.send('About Deleted Information');
});

// Upload Images to Home
router.get('/home/upload', (req, res) => {
    res.send("Home Upload Information");
});

router.post('/home/upload', (req, res) => {
    res.send("Home Upload Information");
});

// Upload Images to Service
router.get('/service/upload', (req, res) => {
    res.send("Service Uplad Information");
});

router.post('/service/upload', (req, res) => {
    res.send("Service Uplad Information");
});

// Upload Images to Testimonial
router.get('/testimonial/upload', (req, res) => {
    res.send("Testimonials Upload Information");
});

router.post('/testimonial/upload', (req, res) => {
    res.send("Testimonials Upload Information");
});

// Upload Images to Work
router.get('/work/upload', (req, res) => {
    res.send("Work Upload Information");
})

router.post('/work/upload', (req, res) => {
    res.send("Work Upload Information");
})


module.exports = router;