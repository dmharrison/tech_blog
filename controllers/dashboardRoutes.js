// In routes/dashboard.js

const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/authGuard");

// Dashboard route
router.get("/", withAuth, async (req, res) => {
  try {
    await req.session.save();
    console.log("Session User ID:", req.session.user_id);
    // Find posts by the logged-in user
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ model: Post }],
    });
    // Check if user exists
    if (!userData) {
      // Handle case where user not found (e.g., redirect or error message)
      return res.status(404).json({ message: "User not found!" });
    }
    console.log("User Data:", userData);
    // Extract posts from user data
    const posts = userData.posts.map((post) => post.get({ plain: true }));

    // Render the dashboard template with posts data
    res.render("dashboard", { posts, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:postId", withAuth, async (req, res) => {
  try {
    // Get the post ID from request parameters
    const postId = req.params.postId;

    // Fetch the post from the database
    const post = await Post.findByPk(postId);

    // Check if the post exists
    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    // Render the post view with the retrieved post data
    res.render("post", { post, loggedIn: true });
  } catch (err) {
    console.log(err, "err");
    res.status(500).json(err);
  }
});
module.exports = router;
