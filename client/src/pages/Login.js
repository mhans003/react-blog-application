import { useRef } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleLogIn = event => {
        event.preventDefault();
        console.log("Handle log in here");
    }

    return (
        <div>
            <Jumbotron>
                <div className="text-center">
                    <h1 className="display-1 large-heading">Sign In</h1>
                </div>
            </Jumbotron>
            <Container>
                <Row>
                    <Col size="12">
                        <form className="form-group my-3" onSubmit={handleLogIn}>
                            <input type="text" className="form-control mb-3 dim-background" required ref={usernameRef} placeholder="Username" maxLength="25"/>
                            <input type="password" className="form-control mb-3 dim-background" required ref={passwordRef} placeholder="Password"/>
                            <button className="btn btn-primary btn-block mt-3 mb-3" type="submit">
                                Sign In <i class="fas fa-sign-in-alt"></i>
                            </button>
                        </form>
                        <hr className="mb-4"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;