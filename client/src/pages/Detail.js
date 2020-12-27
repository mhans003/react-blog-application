import { useEffect } from "react";

//Include components
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//include jumbotron below

//Include API functionality
import API from "../utils/API";

//Include Global State
import { useStoreContext } from "../utils/GlobalState";

//Include actions (add favorites actions to this)
import { SET_CURRENT_POST } from "../utils/actions";

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
    
    //Add functions to handle favorites below.

    //Add functionality for adding favorites into return block below.
    return (
        <div>
            {state.currentPost ? (
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <h1>
                                {state.currentPost.title} by {state.currentPost.author}
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-10 md-offset-1">
                            <article>
                                <h1>Content:</h1>
                                <p>{state.currentPost.body}</p>
                            </article>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-2">
                            <Link to="/">Go Back</Link>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Detail;