import "./style.css";
import { useEffect } from "react";

//Include components
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

//Include API functionality
import API from "../utils/API";

//Include Global State
import { useStoreContext } from "../utils/GlobalState";

//Include actions (add favorites actions to this)
import { SET_CURRENT_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";

const Detail = props => {
    //Declare state and dispatch to use global state.
    const [state, dispatch] = useStoreContext();

    //When the page loads, get the blog post matching the ID in the URL.
    useEffect(() => {
        API.getPost(props.match.params.id)
            //After getting response, set this as the current post.
            .then(response => dispatch({ type: SET_CURRENT_POST, post: response.data }))
            .catch(error => console.log(error));
    }, []);
    
    //Functions that allow the user to add or remove this post as a favorite.
    const addFavorite = () => {
        dispatch({
            type: ADD_FAVORITE,
            post: state.currentPost
        });
    };

    const removeFavorite = () => {
        dispatch({
            type: REMOVE_FAVORITE,
            _id: state.currentPost._id
        })
    };

    return (
        <div>
            <Jumbotron>
                <div className="text-center">
                    <h1 className="display-3 large-heading">{state.currentPost.title}</h1>
                    <h4>By: <i>{state.currentPost.author}</i></h4>
                    {state.favorites.indexOf(state.currentPost) !== -1 ? (
                        <button className="btn btn-danger btn-danger-inverted mt-3" onClick={removeFavorite}>
                            Remove from Favorites
                        </button>
                    ) : (
                        <button className="btn btn-success btn-success-inverted mt-3" onClick={addFavorite}>
                            Add to Favorites
                        </button>
                    )}
                </div>
            </Jumbotron>
            <div className="text-center mt-3">
                <Link to="favorites">View Favorites</Link>
            </div>
            {state.currentPost ? (
                <Container fluid nopadding>
                    <Row noMargin={true}>
                        <Col size="md-12 md-offset-1" noPadding>
                            <div className="dim-background my-4">
                                <article className="px-2 px-md-5">
                                    <p className="blog-content blog-detail-content">{state.currentPost.body}</p>
                                </article>
                            </div>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <div className="text-center">Loading...</div>
            )}
            <div className="text-center">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    );
};

export default Detail;