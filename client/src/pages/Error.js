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
                                <h1 className="large-heading">404 - Page Not Found</h1>
                            </div>
                        </Jumbotron>
                        <h3 className="large-heading text-center"><Link to="/">Go Back</Link></h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Error;