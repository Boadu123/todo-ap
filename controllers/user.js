import {
  userRegisterValidator,
  userloginValidator,
} from "../validators/userValidator.js";
import { UserModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res, next) => {
  try {
    const { error, value } = userRegisterValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    // validate user input
    const user = await UserModel.findOne({ email: value.email });
    // Check if user does not exist
    if (user) {
      return res.status(409).json("User already exist!");
    }

    // Hash their password
    const hashedPassword = bcrypt.hashSync(value.password, 10);
    // Save user to database
    await UserModel.create({
      ...value,
      password: hashedPassword,
    });
    // Send user confirmation email
    // Respond to request
    res.json("User is registered");
  } catch (error) {
    next(error);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    // validate user input
    const { error, value } = userloginValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    // find one user with identifier
    const user = await UserModel.findOne({ email: value.email });
    if (!user) {
      return res.status(404).json("User does not exist");
    }
    // compare their passwords
    const correctPassword = bcrypt.compareSync(value.password, user.password);
    if (!correctPassword) {
      return res.status(401).json("Invalid credentials");
    }
    // Sign a token for the user
    const token = jwt.sign({ id: user.id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "24h",
    });
    // Respond to request
    res.json({
      message: "User logged In",
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    // Find authenticated user from the database
    const user = await UserModel.findById(req.auth.id).select({
      password: false,
    });
    // Respond to request
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const userLogout = (req, res, next) => {
  res.json("User is Logged Out");
};

export const updateProfile = (req, res, next) => {
try {
    res.json("USer Profile was updated");
  
} catch (error) {
  next(error)
}};
