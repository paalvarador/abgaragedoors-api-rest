const express = require("express");
const aboutSchema = require("../models/about");

const router = express.Router();

// CRUD
// create about
router.post("/about", (req, res) => {
    const about = aboutSchema(req.body);
    about
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all about
router.get("/about/all", (req, res) => {
    aboutSchema.find().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

module.exports = router;