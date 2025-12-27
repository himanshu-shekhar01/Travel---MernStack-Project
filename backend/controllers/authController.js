import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//user registration
export const register = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // 1️⃣ Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists with this email"
        });
      }
  
      // 2️⃣ Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // 3️⃣ Create user
      const newUser = new User({
        username,
        email,
        password: hashedPassword
      });
  
      await newUser.save();
  
      // 4️⃣ Success response
      res.status(200).json({
        success: true,
        message: "Registration successful"
      });
  
    } catch (error) {
      console.error("REGISTER ERROR:", error);
      res.status(500).json({
        success: false,
        message: "Registration failed. Try again"
      });
    }
  };
  
  
// login 
export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found"
        });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Invalid credentials"
        });
      }
  
      const { password: pwd, role, ...rest } = user._doc;
  
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "15d" }
      );
  
      res
        .cookie("accessToken", token, {
          httpOnly: true,
          expires:token.expiresIn
        })
        .status(200)
        .json({
          success: true,
          message: "Login successful",
          data: {...rest},
          role,
          token // for frontend localStorage 
        });
  
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Login failed. Try again",
        error: error.message
      });
    }
  };
  
