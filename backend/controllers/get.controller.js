import { createPostModel } from "../models/post.model.js";

const getTest = async (req, res) => {
  try {
    const respData = await createPostModel.find();

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


export {
  getTest,
}