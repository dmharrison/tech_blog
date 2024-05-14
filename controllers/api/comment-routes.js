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
    console.log(err, "err");
    res.status(500).json({ message: "Internal server error" });
  }
});
// Handle comment submission
router.post("/:postId", async (req, res) => {
  try {
    // Extract comment data from the request body
    const { comment_text, user_id } = req.body;
    const postId = req.params.postId;

    // Create the comment in the database
    const newComment = await Comment.create({
      comment_text,
      user_id,
      post_id: postId, // Associate the comment with the post
    });

    // Optionally, you can redirect the user back to the post page
    res.redirect(`/post/${postId}`);

    // Or send a JSON response indicating success
    // res.status(201).json({ message: 'Comment added successfully', comment: newComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
