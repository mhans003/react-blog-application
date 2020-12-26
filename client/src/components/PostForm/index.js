import React, { useRef } from "react";

//Include Global State

//Include actions

//Include API functions

function PostForm() {
    //Create references for user input.
    const titleRef = useRef();
    const bodyRef = useRef();
    const authorRef = useRef();

    //Declare state and dispatch below

    //Handle submit here

    return (
        <div>
            <div className="jumbotron">
                Blog Placeholder(image)
            </div>
            <h1>Create Blog Post</h1>
            Form will go here
        </div>
    );
}

export default PostForm;