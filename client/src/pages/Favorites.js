import { useEffect } from "react";

//Import components
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";

//Import actions
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";

//Include global context
import { useStoreContext } from "../utils/GlobalState";

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
        <div className="container my-5">
            <h1 className="text-center">Favorite Posts</h1>
            {state.favorites.length ? (
                <List>
                    <h3 className="my-5">Click a post to view details</h3>
                    {state.favorites.map(post => (
                        <ListItem key={post._id}>
                            <Link to={`/posts/${post._id}`}>
                                <strong>
                                    {post.title} by {post.author}
                                </strong>
                            </Link>
                            <DeleteBtn onClick={() => removeFromFavorites(post._id)}/>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <h3>No Favorites Yet</h3>
            )}
            <div className="mt-5">
                <Link to="home">Go Back</Link>
            </div>
        </div>
    );
};

export default Favorites;