import { useRef } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

import API from "../utils/API";

const Register = () => {
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const handleRegister = event => {
        event.preventDefault();
        console.log("Handle register here");
    }

    return (
        <div>
            <Jumbotron>
                <div className="text-center">
                    <h1 className="display-1 large-heading">Sign Up</h1>
                </div>
            </Jumbotron>
            <Container>
                <Row>
                    <Col size="12">
                        <form className="form-group my-3" onSubmit={handleRegister}>
                            <input type="email" name="email" className="form-control mb-3 dim-background" required ref={emailRef} placeholder="Email"/>
                            <input type="text" name="username" className="form-control mb-3 dim-background" required ref={usernameRef} placeholder="Username" maxLength="25"/>
                            <input type="password" name="password" className="form-control mb-3 dim-background" required ref={passwordRef} placeholder="Password"/>
                            <input type="password" className="form-control mb-3 dim-background" required ref={confirmPasswordRef} placeholder="Confirm Password"/>
                            <button className="btn btn-primary btn-block mt-3 mb-3" type="submit">
                                Sign Up! <i class="fas fa-user-plus"></i>
                            </button>
                        </form>
                        <hr className="mb-4"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;