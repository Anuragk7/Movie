const mongoose = require('mongoose');
const User = require('./User'); // Ensure the correct path to User model

const MovieSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    imdb: String
  },
  { timestamps: true }
);

const MovieModel = mongoose.model('movie', MovieSchema); // Use 'Movie' as the model name
module.exports = MovieModel;
