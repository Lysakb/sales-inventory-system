const userServices = require("../services/user.service");

const createUser = async (req, res) => {
    const data = await userServices.createUser(req.body);
    return res.status(data.statusCode).json(data);
};

const loginUser = async (req, res) => {
    const data = await userServices.loginUser(req.body);
    return res.status(data.statusCode).json(data) 
  }

const getAllUsers = async (req, res) => {
    const data = await userServices.getAllUsers();
    res.status(data.statusCode).json(data);
};
 
const getUserById = async (req, res) => {
    const data = await userServices.getUserById(req.params);
    res.status(data.statusCode).json(data);
};


const updateUser = async (req, res) => {
  const data = await userServices.updateUser(req.params, req.body);
  res.status(data.statusCode).json(data);
};
 
const deleteUser = async (req, res) => {
  const data = await userServices.deleteUser(req.params);
  res.status(data.statusCode).json(data);
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};


