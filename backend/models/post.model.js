import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const createPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is necessary"]
  },
  question: {
    type: String,
    required: [true, "Question is necessary"]
  },
  answer: {
    type: String,
    required: [true, "Answer is necessary"]
  },
  likes: {
    type : Number,
    default: 0,
  },
  dislikes: {
    type : Number,
    default: 0,
  },
});


const createPostModel = mongoose.model('Post', createPostSchema);

export {
  createPostModel,
};
