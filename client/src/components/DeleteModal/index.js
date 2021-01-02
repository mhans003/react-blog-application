import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

function DeleteModal(props) {
    return (
        <>
            <Modal show={props.modalShow} onHide={props.handleModalClose}>
                <Modal.Header closeButton className="dim-background">
                    <Modal.Title>
                        <h2 className="spaced-mini text-primary large-heading ml-2">Confirm</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid slightly-larger">
                    <p>Are you sure you want to delete this post?</p>
                    <strong><i>{props.postNameToDelete}</i></strong> by <span className="lighter heavier">{props.postAuthorToDelete}</span>
                </Modal.Body>
                <Modal.Footer className="dim-background">
                    <Button variant="secondary" onClick={() => {
                        props.handleModalClose();
                    }}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => {
                        props.removePost(props.postIdToDelete);
                        props.handleModalClose();
                    }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;