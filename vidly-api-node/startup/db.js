
const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
  const db = config.get('db');
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
    .then(() => console.log(`Connected to MongoDB...`))
    .catch(err => console.log('Couldnt connect to BD. Error:', err));
}