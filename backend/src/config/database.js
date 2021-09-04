const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useMongoClient: true,
});
