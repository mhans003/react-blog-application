import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

function RemoveFavorite(props) {
    return (
        <>
            <Modal show={props.favoriteShow} onHide={props.handleFavoriteClose}>
                <Modal.Header closeButton className="dim-background">
                    <Modal.Title>
                        <h2 className="spaced-mini text-primary large-heading ml-2">Confirm</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid slightly-larger">
                    <p>Are you sure you want to remove this post from favorites?</p>
                    <i>
                        <strong>
                            <span className="text-secondary mx-3 large-heading">
                                {`"${props.title}" by ${props.author}`}
                            </span>
                        </strong>
                    </i>
                </Modal.Body>
                <Modal.Footer className="dim-background">
                    <Button variant="secondary" onClick={() => {
                        props.handleFavoriteClose();
                    }}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => {
                        props.removeFromFavorites(props.id);
                        props.handleFavoriteClose();
                    }}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RemoveFavorite;