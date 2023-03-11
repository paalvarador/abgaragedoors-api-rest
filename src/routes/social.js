const express = require("express");
const socialSchema = require("../models/social");

const router = express.Router();

// crate social
router.post("/social", (req, res) => {
    const social = socialSchema(req.body);
    social
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

// get all social
router.get("/social/all", (req, res) => {
    socialSchema
        .find().then((data) => res.json(data)).catch((error) => res.json({ message: error }));
})

module.exports = router;