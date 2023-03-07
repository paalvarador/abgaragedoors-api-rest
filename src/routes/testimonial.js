const express = require("express");
const testimonialSchema = require('../models/testimonial');

const router = express.Router();

// create testimonial
router.post("/testimonial", (req, res) => {
    const testimonial = testimonialSchema(req.body);
    testimonial
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;