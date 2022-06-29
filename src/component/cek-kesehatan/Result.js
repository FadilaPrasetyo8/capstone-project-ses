import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header  closeButton style={{ textAlign: 'center' }} >
        <Modal.Title id="contained-modal-title-vcenter">
          Result
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Kemungkinan Stunting ...% Mari cari tahu penangananya.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal