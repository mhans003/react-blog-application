//Include the Post model.
const Post = require("../models/Post");

module.exports = {
    //Find all the posts from the database.
    findAll: function(request, response) {
        Post.find(request.query)
            .sort({ date: -1 })
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(422).json(error));
    },
    //Find one post from the database using ID.
    findById: function(request, response) {
        Post.findById(request.params.id)
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(422).json(error));
    },
    //Send a new blog post to the database using the post data received by the client.
    create: function(request, response) {
        Post.create(request.body)
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(422).json(error));
    }
};