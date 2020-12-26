const path = require("path");

//Require the API routes.
const apiRoutes = require("./api");

//Set up Express Router.
const router = require("express").Router();

//Include API routes.
router.use("/api", apiRoutes);

//If API routes are not used, use the React app.
router.use(function(request, response) {
    response.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;