import { createPostModel } from "../models/post.model.js";

const deleteSinglePost = async (req, res) => {
  try {
    const { PostId } = req.query;
    console.log(PostId)
    const respData = await createPostModel.findByIdAndDelete(PostId);
    
    if (!respData) {
      return res.status(404).send({
        success: false,
        message: 'Post not found'
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
      message: 'Server error'
    });
  }
};

export { deleteSinglePost };
