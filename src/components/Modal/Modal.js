import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// function AddPersonModal(props) {
//   const [show, setShow] = useState(false);
//   const handleShow = () => setShow(false);
//   const handleClose = () => setShow(true);

//   return (
//     <div>
//       <Button
//         variant="primary"
//         className="mb-2 float-right"
//         onClick={handleShow}
//       >
//         Add Person
//       </Button>
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         show={show}
//         onHide={handleClose}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Modal heading
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>Centered Modal</h4>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
//             ac consectetur ac, vestibulum at eros.
//           </p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

function AddPersonModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        className="mb-2 float-right"
        onClick={handleShow}
      >
        {props.buttonName}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPersonModal;
