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
                    <p>Are you sure you want to delete this post?</p>
                    <br/>
                    <i>
                        <strong>
                            <span className="text-secondary">
                                {`${props.postNameToDelete}`}
                            </span>
                        </strong>
                    </i>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => {
                        props.removePost(props.postIdToDelete);
                        props.handleModalClose();
                    }}>
                        YES, DELETE
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;