const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/authGuard");

// Create comment
router.post("/", withAuth, async (req, res) => {
  try {
    const { comment_text, post_id } = req.body;
    const user_id = req.session.user_id;

    const newComment = await Comment.create({
      comment_text,
      post_id,
      user_id,
    });

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
