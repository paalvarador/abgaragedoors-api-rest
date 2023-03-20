const express = require("express")
const workSchema = require("../models/work")

const router = express.Router()

// create work
router.post("/work/post", (req, res) => {
    const work = workSchema(req.body)
    work.image = 'img/uploads/' + req.file.filename
    work.title = req.body.title
    work.description = req.body.description
    work.owner = req.body.owner
    work.qualification = req.body.qualification
    work.place = req.body.place

    work
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/work", (req, res) => {
    res.render("work")
})

// get All works
router.get("/work/all", (req, res) => {
    workSchema.find().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

module.exports = router;