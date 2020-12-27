import axios from "axios";

//Export functions that interact with server API.
export default {
    //Get all posts
    getPosts: function() {
        return axios.get("/api/posts");
    },
    //Get one post matching ID.
    getPost: function(id) {
        return axios.get(`/api/posts/${id}`);
    },
    //Send a new post to the database.
    savePost: function(postData) {
        return axios.post("/api/posts", postData);
    },
    //Delete a post from the database.
    deletePost: function(id) {
        return axios.delete(`/api/posts/${id}`);
    }
};