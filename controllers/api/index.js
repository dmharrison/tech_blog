const router = require("express").Router();
const postuserRoutes = require("./postuser-routes");
const userRoutes = require("./user-routes");
const commentRoutes = require("./comment-routes");
router.use("/users", userRoutes);
router.use("/posts", postuserRoutes);
router.use("/comments", commentRoutes);
module.exports = router;
