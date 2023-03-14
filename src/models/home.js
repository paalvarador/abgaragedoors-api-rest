const mongoose = require("mongoose");
const homeSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Home', homeSchema);