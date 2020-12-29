//Import components
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <div className="text-center">
                                <h1>404 - Page Not Found</h1>
                                <h3><Link to="/">Go Back</Link></h3>
                            </div>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Error;