const router = require("express").Router();
const postuserRoutes = require("./postuser-routes");
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);
router.use("/post", postuserRoutes);

module.exports = router;
