const mongoose = require("mongoose");
const socialSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Social', socialSchema);