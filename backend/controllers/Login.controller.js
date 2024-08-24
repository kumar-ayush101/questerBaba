import jwt from 'jsonwebtoken';
import { createUserModel } from '../models/user.model.js';

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await createUserModel.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.send({
      success: true,
      token,
      userId: user._id,  
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Server error',
    });
  }
};

export { Login };
