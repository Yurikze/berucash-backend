const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('offer', offerSchema);
