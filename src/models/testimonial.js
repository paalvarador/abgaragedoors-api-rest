const mongoose = require("mongoose");
const testimonialSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        requried: true
    }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);