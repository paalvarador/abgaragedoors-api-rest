const express = require("express");
const workSchema = require("../models/work");

const router = express.Router();

// create work
router.post("/work", (req, res) => {
    const work = workSchema(req.body);
    work
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;