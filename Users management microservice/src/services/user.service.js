const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { buildFailedResponse, buildResponse} = require("../utils/response");

const createUser = async (payload) => {
  try {
    const {
      first_name,
      middle_name,
      last_name,
      email,
      password,
      phone_number,
      address,
      role,
      state,
      city,
    } = payload;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new userModel({
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      email: email,
      password: hashedPassword,
      phone_number: phone_number,
      address: address,
      role: role,
      state: state,
      city: city
    });

    const existingUser = await userModel.findOne({ email }); 
    if (existingUser) {
      return buildFailedResponse({message: "User already exists, please login!"})
    }

    const createdUser = await user.save();
    return buildResponse({message: "User created", data: createdUser})
  } catch (error) {
    throw new Error(error.message);
  }
};

const loginUser = async(payload) =>{
  try {
    const { email, password } = payload;
    const user = await userModel.findOne({ email });
    if (!user) {
      return buildFailedResponse({message: "user does not exist, please register!"});
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return buildFailedResponse({message: "Invalid password!, please try again"});
    }

    const userId = {
      id: user._id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(userId, process.env.SECRET_KEY, { expiresIn: "1h" });

    const loginuser = await user.save();
    return buildResponse({
      message: "Login successful",
      data: loginuser, 
      token: token})
  } catch (error) { 
    throw new Error(error.message);
  }
};

const getAllUsers = async (payload) => {
  try {
    const user = await userModel.find();
    if (!user) {
      return buildFailedResponse({message: "No user found!"});
    }
   return buildResponse({data: user})
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserById = async (params) => {
  try {
    const user = await userModel.findById({_id: params.id});
    
    if (!user) {
      return buildFailedResponse({message: "User not found"});
    }
    return buildResponse({data: user});
  } catch (error) { 
    throw new Error(error.message);
  }
};

const updateUser = async (params, payload) => {
  try {
  const user = payload;

  const updateUser = await userModel.findByIdAndUpdate({_id: params.id}, user, { new: true });

  if(!updateUser){
      return buildFailedResponse({message: "User cannot be found"})
   }

   await updateUser.save();

   return buildResponse({
      message: "User updated successfully!",
      data: updateUser
   });

  } catch (error) {
      throw new Error(error.message);
  };
};

const deleteUser = async (params) => {
  try {
      const user = await userModel.findByIdAndDelete({_id: params.id});

      if(!user){
          return buildFailedResponse({message: 'User not found'})
      }

      return buildResponse({message: 'User deleted successfully'})

  } catch (error) {
      throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
