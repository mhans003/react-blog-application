import { useEffect } from "react";

//Import components
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";

//Import actions
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";

//Include global context
import { useStoreContext } from "../utils/GlobalState";
import Jumbotron from "../components/Jumbotron";

const Favorites = () => {
    //Declare state/dispatch
    const [state, dispatch] = useStoreContext();

    //Get the user's favorite posts
    const getFavorites = () => {
        dispatch({ type: LOADING });
        dispatch({ type: UPDATE_FAVORITES });
    };

    //Remove an item from the favorites list
    const removeFromFavorites = id => {
        dispatch({
            type: REMOVE_FAVORITE,
            _id: id
        });
    };

    //When the page loads, get the favorites.
    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <div>
            <Jumbotron>
                <div className="text-center">
                    <h1 className="display-1 large-heading">Favorite Posts</h1>
                </div>
            </Jumbotron>
            <div className="container my-5">
                {state.favorites.length ? (
                    <List>
                        <h3 className="mb-5">Click a post to view details</h3>
                        {state.favorites.map(post => (
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
                                    <DeleteBtn onClick={() => removeFromFavorites(post._id)}/>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <h3 className="text-center">No Favorites Yet</h3>
                )}
                <div className="text-center mt-3">
                    <Link to="/">Go Back</Link>
                </div>
            </div>
        </div>
    );
};

export default Favorites;