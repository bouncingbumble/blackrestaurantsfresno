const mongoose = require('mongoose');

const r9Schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    website: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    typeOfFood: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const R9 = mongoose.model('r9', r9Schema);

module.exports = R9;
