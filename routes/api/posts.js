//Set up Express Router
const router = require("express").Router();

//Include controller for performing CRUD operations on database.
const postController = require("../../controllers/postController");

//Non-ID specific routes
router
    .route("/")
    .get(postController.findAll);

//These routes match specific blog posts based on ID.
router
    .route("/:id")
    .get(postController.findById)

module.exports = router;