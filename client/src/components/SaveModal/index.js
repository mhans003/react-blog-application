import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

function SaveModal(props) {
    return (
        <>
            <Modal show={props.saveShow} onHide={props.handleSaveClose}>
                <Modal.Header closeButton className="dim-background">
                    <Modal.Title>
                        <h2 className="spaced-mini text-primary large-heading ml-2">Post Saved</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid slightly-larger">
                    <strong><i>{props.title}</i></strong> by <span className="lighter heavier">{props.author}</span>
                </Modal.Body>
                <Modal.Footer className="dim-background">
                    <Button variant="secondary" onClick={() => {
                        props.handleSaveClose();
                    }}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SaveModal;