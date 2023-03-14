const express = require("express");
const homeSchema = require("../models/home");

const router = express.Router();

// create home
router.post("/home", (req, res) => {
    const home = homeSchema(req.body);
    home
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// get all home
router.get("/home/all", (req, res) => {
    homeSchema.find().then((data) => res.json(data)).catch((error) => res.json({messsage: error}))
});

module.exports = router;