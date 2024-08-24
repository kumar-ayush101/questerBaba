import { createPostModel } from '../models/post.model.js';

export const updateLikes = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await createPostModel.findByIdAndUpdate(
      postId,
      { $inc: { likes: 1 } }, 
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.json({ success: true, likes: post.likes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateDislikes = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await createPostModel.findByIdAndUpdate(
      postId,
      { $inc: { dislikes: 1 } }, 
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.json({ success: true, dislikes: post.dislikes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
