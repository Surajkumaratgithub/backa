// controllers/userController.js
import User from "./model/userModel.js";

export const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: {
        firstName: "John",
        lastName: "Doe"
      },
      email: "john.doe@example.com",
      mobileNumber: "1234567890",
      password: "password123", // Will be hashed automatically
      mode: "online",
      role: "user"
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: error.message
    });
  }
};
