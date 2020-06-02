const mongoose = require('mongoose');

const vistorCountSchema = new mongoose.Schema({
    visitorCount: {
        type: Number,
    }
});

const VistorCount = mongoose.model('visitorCount', vistorCountSchema);

module.exports = VistorCount;
