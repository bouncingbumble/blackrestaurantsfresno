const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PW}@cluster0-bm1ri.mongodb.net/test?retryWrites=true&w=majority`);
mongoose.Promise = Promise;

module.exports.R9 = require('./r9');
module.exports.VisitorCount = require('./visitors');
