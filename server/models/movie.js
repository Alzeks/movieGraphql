const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,//name:{type: String}
  genre: String,
  refer: String,
  directorId: {type: mongoose.Schema.Types.ObjectId,
     ref: 'director'},
  // directorId: String,
});

module.exports = mongoose.model('Movie', movieSchema)
