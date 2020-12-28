import React from "react";

//Include components
import { Col, Row, Container } from "../components/Grid";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Jumbotron from "../components/Jumbotron";

const Home = () => {
    return (
    <>
        <Jumbotron>
            <div className="text-center">
                <h1 class="display-1 large-heading">My Blog</h1>
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
    </>
    );
};

export default Home;