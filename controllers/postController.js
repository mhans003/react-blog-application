//Include the Post model.
const Post = require("../models/Post");

module.exports = {
    //Find all the posts from the database.
    findAll: function(request, response) {
        Post.find(request.query)
            .sort({ date: -1 })
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(422).json(error));
    }
};