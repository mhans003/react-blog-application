import React from "react";

//Include components
import { Col, Row, Container } from "../components/Grid";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Jumbotron from "../components/Jumbotron";

const Home = () => {
    return (
    <div>
        <Jumbotron>
            <div className="text-center">
                <h1 id="logo" className="display-1 large-heading spaced-long"><span className="lighter">note</span><span className="darker">cloud</span></h1>
                <hr/>
                <h5 className="spaced-short darker">REACT BLOG</h5>
            </div>
        </Jumbotron>
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <PostForm/>
                </Col>
                <Col size="md-6 sm-12">
                    <PostList/>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Home;