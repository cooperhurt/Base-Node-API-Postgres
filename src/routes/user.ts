import express from "express";
import { User } from "../models";

const router = express.Router();

// This is recommended to
router.route("/").get(async (req, res) => {
  const users = await User.find();
  return res.status(200).json(users);
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const users = await User.find({ _id: id });
  return res.status(200).json(users);
});

router.route("/").post(async (req, res) => {
  const { name, email } = req.body;

  try {
    const createdUser = await User.create({ name, email });
    return res.status(200).json(createdUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

export default router;
