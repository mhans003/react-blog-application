import React from "react";

//Include components
import { Col, Row, Container } from "../components/Grid";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

const Home = () => {
    return (
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
    );
};

export default Home;