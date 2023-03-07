const express = require("express");
const menuSchema = require("../models/menus");

const router = express.Router();

// create menu
router.post("/menus", (req, res) => {
    const menu = menuSchema(req.body);
    menu
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all menus
router.get("/menus", (req, res) => {
    menuSchema.find().then((data) => res.json(data)).catch((error) => res.json({ message: error }));
})

// get a specific menu
router.get("/menus/:id", (req, res) => {
    const { id } = req.params;
    menuSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({ message: error }));
})

// update a specific menu
router.put("/menus/:id", (req, res) => {
    const { id } = req.params;
    const { name, link } = req.body;
    menuSchema.updateOne({ _id: id }, { $set: {name, link}}).then((data) => res.json(data)).catch((error) => res.json({ message: error }));
})

// delete a user
router.delete("/menus/:id", (req, res) => {
    const { id } = req.params;
    menuSchema.remove({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({ message: error }));
})

module.exports = router;