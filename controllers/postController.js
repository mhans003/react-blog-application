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
    },
    //Delete one post from the database using the ID passed in.
    remove: function(request, response) {
        Post.findById({ _id: request.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => response.json(dbModel))
            .catch(error => response.json(422).json(error));
    },
    //Update one post with new data passed in.
    update: function(request, response) {
        Post.findOneAndUpdate({ _id: request.params.id }, request.body)
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(422).json(error));
    }
};