import React, { useState, useRef } from "react";
import SaveModal from "../SaveModal";

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

    //Set up Modal
    const [saveShow, setSaveShow] = useState(false);
    const [titleSaved, setTitleSaved] = useState("");
    const [authorSaved, setAuthorSaved] = useState("");

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
            handleSaveOpen(result.data.title, result.data.author);
        })
        .catch(error => console.log(error));

        //Reset the current value of the field references.
        titleRef.current.value = "";
        bodyRef.current.value = "";
        authorRef.current.value = "";
    };

    //Handle the opening/closing of the modal to confirm save of post.
    const handleSaveClose = () => setSaveShow(false);
    const handleSaveOpen = (title, author) => {
        setTitleSaved(title);
        setAuthorSaved(author);
        setSaveShow(true);
    };

    return (
        <div>
            <div className="text-center mb-4">
                <h3 className="large-heading">Create Blog Post</h3>
            </div>
            <form className="form-group my-3" onSubmit={handleSubmit}>
                <input className="form-control form-control-lg mb-3 dim-background" required ref={titleRef} placeholder="Title" maxLength="50"/>
                <textarea className="form-control form-control-lg mb-3 dim-background" rows="8" required ref={bodyRef} placeholder="Post Body" maxLength="15000"/>
                <input className="form-control form-control-lg mb-3 dim-background" ref={authorRef} placeholder="Author Name" maxLength="50"/>
                <button className="btn btn-primary btn-lg btn-block mt-3 mb-3" type="submit">
                    Save <i className="fal fa-save"></i>
                </button>
            </form>
            <hr className="mb-4 mt-4"/>
            <SaveModal
                handleSaveClose={handleSaveClose}
                saveShow={saveShow}
                title={titleSaved}
                author={authorSaved}
            />
        </div>
    );
}

export default PostForm;