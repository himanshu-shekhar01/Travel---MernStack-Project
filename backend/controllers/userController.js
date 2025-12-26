import User from '../models/User.js';

// CREATE USER
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: 'Successfully created user',
      data: savedUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create user. Try again",
      error: error.message
    });
  }
};

// UPDATE USER
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated user",
      data: updatedUser
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update user",
      error: err.message
    });
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted user"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
      error: err.message
    });
  }
};

// GET SINGLE USER
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully fetched user",
      data: user
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: err.message
    });
  }
};

// GET ALL USERS (WITH PAGINATION)
export const getAllUser = async (req, res) => {
  const page = parseInt(req.query.page);

  try {
    const users = await User.find({})
      .skip(page * 8)
      .limit(8);
 
    res.status(200).json({
      success: true,
      count: users.length,
      message: "Successfully fetched all users",
      data: users
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: err.message
    });
  }
};
