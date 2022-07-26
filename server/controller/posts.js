import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newpost = new PostMessage(post);
  try {
    await newpost.save();
    res.status(200).json(newpost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
