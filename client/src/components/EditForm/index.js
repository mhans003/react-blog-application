import React, { useRef } from "react";
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

//Include Global State
import { useStoreContext } from "../../utils/GlobalState";

//Include actions
import { UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";

//Include API functions

function EditForm(props) {
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
        API.updatePost(props.id, {
            title: titleRef.current.value,
            body: bodyRef.current.value,
            author: authorRef.current.value ? authorRef.current.value : "Anonymous"
        })
        .then(result => {
            //After updating one post, get all posts again to re-render the page.
            console.log(result);
            API.getPosts()
                .then(results => {
                    dispatch({
                        type: UPDATE_POSTS,
                        posts: results.data
                    });
                })
                .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    };

    return (
        <>
            <Modal show={props.editShow} onHide={props.handleEditClose}>
                <Modal.Header closeButton className="dim-background">
                    <Modal.Title>
                        <h2 className="spaced-mini text-primary large-heading">Edit Post</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid slightly-larger">
                    <div>
                        <form className="form-group my-3" onSubmit={handleSubmit}>
                            <input className="form-control mb-3 dim-background" required ref={titleRef} placeholder="Title" defaultValue={props.title} maxLength="50"/>
                            <textarea className="form-control mb-3 dim-background" rows="8" required ref={bodyRef} placeholder="Post Body" defaultValue={props.body} maxLength="15000"/>
                            <input className="form-control mb-3 dim-background" ref={authorRef} placeholder="Author" defaultValue={props.author} maxLength="50"/>
                            <button className="btn btn-primary btn-block mt-3 mb-3" type="submit" onClick={() => {
                                props.handleEditClose();
                            }}>
                                Save <i className="fal fa-save"></i>
                            </button>
                        </form>
                        <hr className="mb-4"/>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditForm;