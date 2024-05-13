const router = require("express").Router();
const postuserRoutes = require("./postuser-routes");
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);
router.use("/posts", postuserRoutes);

module.exports = router;
