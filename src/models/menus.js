const mongoose = require("mongoose");
const menuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Menu', menuSchema);