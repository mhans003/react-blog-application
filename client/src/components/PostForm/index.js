import React, { useRef } from "react";

//Include Global State
import { useStoreContext } from "../../utils/GlobalState";

//Include actions
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

//Include API functions

function PostForm() {
    //Create references for user input.
    const titleRef = useRef();
    const bodyRef = useRef();
    const authorRef = useRef();

    //Declare state and dispatch below
    const [state, dispatch] = useStoreContext();

    //Handle submit here
    const handleSubmit = event => {
        //Prevent page from reloading.
        event.preventDefault();
        
        //Indicate that the page is currently loading.
        dispatch({ type: LOADING });

        //Make a call to save this post to the database, using the fields referenced by useRef.
        API.savePost({
            title: titleRef.current.value,
            body: bodyRef.current.value,
            author: authorRef.current.value ? authorRef.current.value : "Anonymous"
        })
        .then(result => {
            dispatch({
                type: ADD_POST,
                post: result.data
            });
        })
        .catch(error => console.log(error));

        //Reset the current value of the title and body references.
        titleRef.current.value = "";
        bodyRef.current.value = "";
    };

    return (
        <div>
            <div className="jumbotron">
                Blog Placeholder(image)
            </div>
            <h1>Create Blog Post</h1>
            <form className="form-group my-5" onSubmit={handleSubmit}>
                <input className="form-control mb-5" required ref={titleRef} placeholder="Title" maxLength="50"/>
                <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Post Body" maxLength="15000"/>
                <input className="form-control mb-5" ref={authorRef} placeholder="Author Name" maxLength="50"/>
                <button className="btn btn-success mt-3 mb-5" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
}

export default PostForm;