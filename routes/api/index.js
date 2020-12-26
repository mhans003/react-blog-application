//Set up Express Router
const router = require("express").Router();

//Require the post routes.
const postRoutes = require("./posts");

//Use the post routes.
router.use("/posts", postRoutes);

module.exports = router;