import { createPostModel } from "../models/post.model.js";


const postTest = async (req, res) => {
  try {
    const { title, question, answer } = req.body;

    
    if (!title || !question || !answer) {
      return res.status(400).send({
        success: false,
        message: 'Title, question, and answer are required',
      });
    }

    const respData = await createPostModel.create({
      title,
      question,
      answer,
    });

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
  postTest,
}