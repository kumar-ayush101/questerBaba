import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const createUserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  dob: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  password: { type: String, required: true },
});


createUserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
      return next(error);  
    }
  }
  next();
});


createUserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};


const createUserModel = mongoose.model('User', createUserSchema);



export {
  createUserModel,
};