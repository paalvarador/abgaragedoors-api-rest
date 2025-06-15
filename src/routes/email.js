const express = require("express");
const emailSchema = require("../models/email");
const emailer = require("../config/emailer");

const router = express.Router();

// send email
router.post("/email/send", (req, res) => {
  const email = emailSchema(req.body);

  console.log(`LLegoa esta parte`);
  console.log(`Agrego algo a esto`);

  // 1. Save the email in the DB
  email
    .save()
    .then((data) => {
      res.json(data);
      // 2. If email saved at DB, then send email
      emailer.sendMail(data);
    })
    .catch((error) => res.json({ message: error.message }));
});

module.exports = router;
