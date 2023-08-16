const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
  },

  likes: {
    type: Number,

    },
    
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;