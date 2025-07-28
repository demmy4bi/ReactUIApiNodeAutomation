const expressAsyncHandler = require("express-async-handler");
const isValid = require("../../utils/isValid.js");
const Post = require("../../models/PostsModel");

const UpdatePosts = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  isValid(userId);

  const { id, title, description } = req.body;
  isValid(id);

  const post = await Post.findById(id);
  if (!post) throw new Error("Post does not exist!");

  // Make title and description required
  if (!title || !description) {
    throw new Error("Title and description are required");
  }

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        title,
        description,
        author: userId,
      },
      { new: true }
    ).populate("author");

    res.json({
      message: "Item updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = UpdatePosts;
