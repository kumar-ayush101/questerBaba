import { createPostModel } from "../models/post.model.js";

const getSinglePost = async (req, res) => { 
  try {
    const { PostId } = req.query;
    console.log('PostId:', PostId); 
    const respData = await createPostModel.findById(PostId);
    if (!respData) {
      return res.status(404).send({
        success: false,
        message: 'Post not found',
      });
    }
    res.send({
      success: true,
      respData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Server error',
    });
  }
};

export { getSinglePost };
