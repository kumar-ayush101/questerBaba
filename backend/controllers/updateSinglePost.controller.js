import { createPostModel } from "../models/post.model.js";

const updateSinglePost = async (req, res) => {
  try {
    const { PostId, title, question, answer } = req.body;
    const respData = await createPostModel.findByIdAndUpdate(PostId, { title, question, answer }, { new: true });
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



export {
  updateSinglePost,
}