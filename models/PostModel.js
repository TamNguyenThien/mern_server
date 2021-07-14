import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: 'anonymous',
  },
  attachment: String,
  likeCount: {
    type: Number,
    default: 0
  },
}, { timestamp: true });

export const PostModel = mongoose.model('Post', schema)