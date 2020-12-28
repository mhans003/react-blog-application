import "./style.css";
import { useEffect } from "react";

//Include components
import { Link } from "react-router-dom";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Row, Col, Container } from "../Grid";

//Include Global Store
import { useStoreContext } from "../../utils/GlobalState";

//Include actions and API functions
import API from "../../utils/API";
import { UPDATE_POSTS, LOADING, REMOVE_POST } from "../../utils/actions";

function PostList() {
    //Declare state and dispatch below
    const [state, dispatch] = useStoreContext();

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

    return (
        <div>
            <div className="text-center mb-4">
                <h3 className="large-heading">Blog Posts</h3>
            </div>
            {state.posts.length ? (
                <List>
                    {state.posts.map(post => (
                        <ListItem key={post._id}>
                            <div className="bg-light p-3">
                                <Link to={`/posts/${post._id}`}>
                                    <strong>{post.title}</strong>
                                </Link> by <i>{post.author}</i>
                               
                            </div>
                            <div className="text-muted p-3 blog-content">
                                {`${post.body.substring(0,50)}...`}
                            </div>
                            <div>
                                <DeleteBtn onClick={() => removePost(post._id)}/>
                            </div>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <h3>No Posts Yet</h3>
            )}
            <div className="text-center mt-3">
                <Link to="favorites">View Favorites</Link>
            </div>
        </div>
    );
}

export default PostList;