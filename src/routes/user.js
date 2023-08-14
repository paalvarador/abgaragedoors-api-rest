const express = require("express")
const userSchema = require("../models/user")

const router = express.Router()

// CRUD
// CREATE USER
router.post("/user/create", (req, res) => {
    const user = new userSchema()
    user.firstname = req.body.firstname
    user.lastname = req.body.lastname
    user.email = req.body.email
    user.username = req.body.username
    user.password = req.body.password

    user
        .save()
        .then((data) => res.send("DB Saved Success"))
        .catch((error) => console.log(error))
})

// GET ALL USERS
router.get("/user/all", (req, res) => {
    userSchema.find().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

module.exports = router