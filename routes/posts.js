const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ messahe: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  const savedPost = await post.save();
  res.json(savedPost);
});

module.exports = router;
