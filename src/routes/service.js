const express = require("express");
const { restart } = require("nodemon");
const serviceSchema = require("../models/service");

const router = express.Router();

// create service
router.post("/service", (req, res) => {
    const service = serviceSchema(req.body);
    service
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }));
});

// get all services
router.get("/service/all", (req, res) => {
    serviceSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
})

module.exports = router;