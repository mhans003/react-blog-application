import "./style.css";
import { useState, useEffect } from "react";

//Include components
import { Link } from "react-router-dom";
import { ListItem, List } from "../List";
import EditBtn from "../EditBtn";
import DeleteBtn from "../DeleteBtn";
import { Row, Col, Container } from "../Grid";
import DeleteModal from "../DeleteModal";
import EditForm from "../EditForm";

//Include Global Store
import { useStoreContext } from "../../utils/GlobalState";

//Include actions and API functions
import API from "../../utils/API";
import { UPDATE_POSTS, LOADING, REMOVE_POST } from "../../utils/actions";

function PostList() {
    //Declare state and dispatch below
    const [state, dispatch] = useStoreContext();

    //State for modal and id/name for a post to be deleted (shown in modal)
    const [modalShow, setModalShow] = useState(false);
    const [postIdToDelete, setPostIdToDelete] = useState("");
    const [postNameToDelete, setPostNameToDelete] = useState("");
    const [postAuthorToDelete, setPostAuthorToDelete] = useState("");

    const [editShow, setEditShow] = useState(false);
    const [postTitleToEdit, setPostTitleToEdit] = useState("");
    const [postBodyToEdit, setPostBodyToEdit] = useState("");
    const [postAuthorToEdit, setPostAuthorToEdit] = useState("");
    const [postIdToEdit, setPostIdToEdit] = useState("");

    //Handle getting, deleting posts below
    const getPosts = () => {
        dispatch({ type: LOADING });
        API.getPosts()
            .then(results => {
                console.log(results);
                //Send via dispatch the posts retrieved from the database to update the global state.
                dispatch({
                    type: UPDATE_POSTS,
                    posts: results.data
                });
            })
            .catch(error => console.log(error));
    };

    //Delete post matching this ID.
    const removePost = id => {
        API.deletePost(id)
            .then(() => {
                dispatch({
                    type: REMOVE_POST,
                    _id: id
                });
            })
            .catch(error => console.log(error));
    };

    //When the page loads, get the current posts from the database.
    useEffect(() => {
        getPosts();
    }, []);

    //Handle the opening/closing of the modal to delete a post.
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = (id, name, author) => {
        setModalShow(true);
        setPostIdToDelete(id);
        setPostNameToDelete(name);
        setPostAuthorToDelete(author);
    };

    const handleEditClose = () => setEditShow(false);
    const handleEditShow = (title, body, author, id) => {
        setEditShow(true);
        setPostTitleToEdit(title);
        setPostBodyToEdit(body);
        setPostAuthorToEdit(author);
        setPostIdToEdit(id);
    };

    return (
        <div>
            <div className="text-center mb-4">
                <h3 className="large-heading">Blog Posts</h3>
            </div>
            {state.posts.length ? (
                <List>
                    {state.posts.map(post => (
                        <ListItem key={post._id}>
                            <div className="slightly-larger dim-background p-3">
                                <Link to={`/posts/${post._id}`}>
                                    <strong><i>{post.title}</i></strong>
                                </Link> by <span className="lighter heavier">{post.author}</span>
                            </div>
                            <div className="text-muted p-3 blog-content">
                                {`${post.body.substring(0,50)}...`}
                            </div>
                            <Container fluid>
                                <Row>
                                    <Col size="6">
                                        <EditBtn onClick={() => handleEditShow(post.title, post.body, post.author, post._id)}/>
                                    </Col>
                                    <Col size="6">
                                        <DeleteBtn onClick={() => handleModalShow(post._id, post.title, post.author)}/>
                                    </Col>
                                </Row>
                            </Container>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <h3 className="large-heading text-center">No Posts Yet</h3>
            )}
            <div className="text-center mt-3 mb-5">
                <Link to="favorites">View Favorites</Link>
            </div>
            <DeleteModal
                handleModalClose={handleModalClose}
                modalShow={modalShow}
                postIdToDelete={postIdToDelete}
                postNameToDelete={postNameToDelete}
                postAuthorToDelete={postAuthorToDelete}
                removePost={removePost}
            />
            <EditForm
                handleEditClose={handleEditClose}
                editShow={editShow}
                title={postTitleToEdit}
                body={postBodyToEdit}
                author={postAuthorToEdit}
                id={postIdToEdit}
            />
        </div>
    );
}

export default PostList;