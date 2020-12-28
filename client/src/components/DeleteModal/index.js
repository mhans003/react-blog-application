import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

function DeleteModal(props) {
    return (
        <>
            <Modal show={props.modalShow} onHide={props.handleModalClose}>
                <Modal.Header closeButton className="dim-background">
                    <Modal.Title>
                        <h2 className="spaced-mini text-primary large-heading">confirm</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid slightly-larger">
                    <p>Are you sure you want to delete this post?</p>
                    <i>
                        <strong>
                            <span className="text-secondary mx-3 large-heading">
                                {`"${props.postNameToDelete}" by ${props.postAuthorToDelete}`}
                            </span>
                        </strong>
                    </i>
                </Modal.Body>
                <Modal.Footer className="dim-background">
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