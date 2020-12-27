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
    }
};