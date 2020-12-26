import React from "react";
import { Col, Row, Container } from "../components/Grid";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    Create post form will go here
                </Col>
                <Col size="md-6 sm-12">
                    List of posts will go here
                </Col>
            </Row>
        </Container>
    );
};

export default Home;