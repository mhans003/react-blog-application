//Set up Express Router
const router = require("express").Router();

//Include controller for performing CRUD operations on database.
const postController = require("../../controllers/postController");

router
    .route("/")
    .get(postController.findAll);

module.exports = router;