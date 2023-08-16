const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text:{
    type: String,
  },

  
  message: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;