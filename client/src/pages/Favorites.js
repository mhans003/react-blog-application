import { useState, useEffect } from "react";

//Import components
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "../components/Grid";
import RemoveFavorite from "../components/RemoveFavorite";

//Import actions
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";

//Include global context
import { useStoreContext } from "../utils/GlobalState";
import Jumbotron from "../components/Jumbotron";

const Favorites = () => {
    //Declare state/dispatch
    const [state, dispatch] = useStoreContext();

    //Declare state for modal and removing favorites.
    const [favoriteShow, setFavoriteShow] = useState(false);
    const [favoriteIdToRemove, setFavoriteIdToRemove] = useState("");
    const [favoriteTitleToRemove, setFavoriteTitleToRemove] = useState("");
    const [favoriteAuthorToRemove, setFavoriteAuthorToRemove] = useState("");

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

    //Handle the opening/closing of the modal to delete a post.
    const handleFavoriteClose = () => setFavoriteShow(false);
    const handleFavoriteShow = (id, title, author) => {
        setFavoriteShow(true);
        setFavoriteIdToRemove(id);
        setFavoriteTitleToRemove(title);
        setFavoriteAuthorToRemove(author);
    };

    //When the page loads, get the favorites.
    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <div>
            <Jumbotron>
                <div className="text-center">
                    <h1 className="display-1 large-heading">Favorites</h1>
                </div>
            </Jumbotron>
            <div className="container my-5">
                {state.favorites.length ? (
                    <List>
                        <h3 className="mb-5 large-heading text-center">Click a post to view details</h3>
                        {state.favorites.map(post => (
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
                                        <Col size="4"></Col>
                                        <Col size="4">
                                            <DeleteBtn onClick={() => handleFavoriteShow(post._id, post.title, post.author)}/>
                                        </Col>
                                        <Col size="4"></Col>
                                    </Row>
                                </Container>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <h3 className="text-center large-heading">No Favorites Yet</h3>
                )}
                <div className="text-center mt-3 mb-5">
                    <Link to="/">Go Back</Link>
                </div>
            </div>
            <RemoveFavorite
                handleFavoriteClose={handleFavoriteClose}
                favoriteShow={favoriteShow}
                id={favoriteIdToRemove}
                removeFromFavorites={removeFromFavorites}
                title={favoriteTitleToRemove}
                author={favoriteAuthorToRemove}
            />
        </div>
    );
};

export default Favorites;