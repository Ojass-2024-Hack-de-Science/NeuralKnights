"use server";
import User from "../../NeuralKnights/database/model/User";
import dbConnect from "../components/database/database";
export const getUser = async (userId) => {
  await dbConnect();
  try {
    const user = await User.findOne({ GoogleId: userId });
    console.log(user);
    return { user: user.toObject() };
  } catch (error) {}
};
