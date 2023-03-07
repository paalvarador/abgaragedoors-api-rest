const mongoose = require("mongoose");
const serviceSchema = mongoose.Schema({
    image: {
        type: String,
        requried: true
    },
    name: {
        type: String,
        requried: true
    },
    description: {
        type: String,
        requried: true
    },
});

module.exports = mongoose.model('Service', serviceSchema);