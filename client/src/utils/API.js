import axios from "axios";

//Export functions that interact with server API.
export default {
    getPosts: function() {
        return axios.get("/api/posts");
    }
};