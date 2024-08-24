import jwt from 'jsonwebtoken';

import { createUserModel } from "../models/user.model.js";

const SigningIn = async (req, res) => {
  try {
    const { username, dob, email, city, state, password, cpassword } = req.body;
    console.log(username, dob, email, city, state, password, cpassword)
    if (password !== cpassword) {
      return res.status(400).send({
        success: false,
        message: 'Passwords do not match'
      });
    }

    const user = new createUserModel({
      username,
      dob,
      email,
      city,
      state,
      password,
    });

    console.log(user);

    try {
      await user.save();
    } catch (err) {
      console.log(err);
      res.status(500).send({
        success: false,
        message: 'Server error'
      });
      return;
    }

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(201).send({
      success: true,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: 'Server error'
    });
  }
};



export {
  SigningIn,
}