import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

function DeleteModal(props) {
    return (
        <>
            <Modal show={props.modalShow} onHide={props.handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>Confirm</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    Are you sure you want to delete this post?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.removePost(props._id)}>
                        DELETE
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EmployeeProfile;