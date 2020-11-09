import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

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
        <Modal.Body>
          <Form>
            <Form.Group controlId="addNewPersonForm.InputName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Ada Lovelace" />
            </Form.Group>
            <Form.Group controlId="addNewPersonForm.InputAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" placeholder="34" />
            </Form.Group>
            <Form.Group controlId="addNewPersonForm.InputColor">
              <Form.Label>Favourite Colour</Form.Label>
              <Form.Control type="text" placeholder="Green" />
            </Form.Group>
            <Form.Group controlId="addNewPersonForm.InputFood">
              <Form.Label>Favourite Food</Form.Label>
              <Form.Control type="text" placeholder="Spaghetti" />
            </Form.Group>
            <Form.Group controlId="addNewPersonForm.SelectFriends">
              <Form.Label>Friends</Form.Label>
              <Form.Control as="select">
                <option>Bob</option>
                <option>Linda</option>
                <option>Eve</option>
                <option>Ancient Wizard</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
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
