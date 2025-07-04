const express = require("express");
const multer = require("multer");
const testimonialSchema = require("../models/testimonial");

const upload = multer();

const router = express.Router();

// create testimonial
router.post("/testimonial", upload.none(), (req, res) => {
  console.log(`req.body: ${JSON.stringify(req.body)}`);
  const data = {
    ...req.body,
    rating: Number(req.body.rating),
  };

  console.log(`data: ${JSON.data}`);

  const testimonial = testimonialSchema(data);
  console.log(`testimonial: ${JSON.stringify(testimonial)}`);
  testimonial
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all testimonial
router.get("/testimonial/all", (req, res) => {
    testimonialSchema.find({ state: true }).then((data) => res.json(data)).catch((error) => res.json({ message: error }));
});

module.exports = router;
