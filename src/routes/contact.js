const express = require("express")
const contactSchema = require("../models/contact")

const router = express.Router()

// create contact
router.post("/contact", (req, res) => {
    const contact = contactSchema(req.body)
    contact
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
});

// get All contacts
router.get("/contact/all", (req, res) => {
    contactSchema.find()
    .then((data) => {res.json(data)})
    .catch((error) => res.json({ message: error }))
})

module.exports = router;