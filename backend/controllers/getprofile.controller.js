import { createUserModel } from "../models/user.model.js";

const getProfile = async (req, res) => {
  try {
    const { userId } = req.query;
    console.log(userId);
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }
    console.log(userId)
    const respData = await createUserModel.findById(userId);
    if (!respData) {
      return res.status(404).send({
        success: false,
        message: 'User not found',
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
}




export {
  getProfile,
};