// In routes/dashboard.js

const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/authGuard");

// Dashboard route
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find posts by the logged-in user
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ model: Post }],
    });

    // Extract posts from user data
    const posts = userData.posts.map((post) => post.get({ plain: true }));

    // Render the dashboard template with posts data
    res.render("dashboard", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
