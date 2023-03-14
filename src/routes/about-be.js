const express = require("express");
const aboutSchema = require("../models/about");

const router = express.Router();

// CRUD
// create about
router.post("/about/post", (req, res) => {
    const about = new aboutSchema();
    about.image = 'img/uploads/' + req.file.filename;
    about.title = req.body.title;
    about.description = req.body.description;

    
    about
        .save()
        .then((data) => res.send("DB Saved Success"))
        .catch((error) => console.error(error));
});

router.get("/about/post", (req, res) => {
    res.render("upload");
})

/* get all about
router.get("/about/all", (req, res) => {
    aboutSchema.find().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})*/

module.exports = router;