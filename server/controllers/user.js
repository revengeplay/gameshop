import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/user.js";

const secret = "test";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModel.findOne({ email });
    if (!oldUser)
      return req.status(404).json({ message: "유저가 존재하지 않습니다." });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "비밀번호가 틀렸습니다." });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });
    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "이메일 혹은 비밀번호를 확인해주세요" });
    console.log(err);
  }
};

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const oldUser = await UserModel.findOne({ email });

    if (oldUser) {
      return res
        .status(400)
        .json({ message: "이미 존재하는 이메일주소입니다." });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name: `${name}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });
    res.status(201).json({ result, token });
  } catch (err) {
    res.status(500).json({ message: "이메일 혹은 비밀번호를 확인해주세요" });
    console.log(err);
  }
};

export const googleSignIn = async (req, res) => {
  const { email, name, token, googleId } = req.body;
  try {
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      const result = { _id: oldUser._id.toString(), email, name };
      return res.status(200).son({ result, token });
    }
    const result = await UserModel.create({
      email,
      name,
      googleId,
    });
    res.status(200).json({ result, token });
  } catch (err) {
    res.status(500).json({ message: "잘못되었습니다." });
    console.log(err);
  }
};
