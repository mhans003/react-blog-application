import { useEffect } from "react";

//Include components
import { Link } from "react-router-dom";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";

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
            <h1>Blog Posts</h1>
            {state.posts.length ? (
                <List>
                    {state.posts.map(post => (
                        <ListItem key={post._id}>
                            <Link to={`/posts/${post._id}`}>
                                <strong>
                                    {post.title} by {post.author}
                                </strong>
                            </Link>
                            <DeleteBtn onClick={() => removePost(post._id)}/>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <h3>No Posts Yet</h3>
            )}
            <div>
                Link to favorites here
            </div>
        </div>
    );
}

export default PostList;