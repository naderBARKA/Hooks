import React, { useState } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";

export default function AddToTheList(props) {
  const [newSerie, setNewSerie] = useState({
    id: Math.random(),
    title: "serie title",
    description: "it's a new serie",
    posterURL:
      "https://donnalba.files.wordpress.com/2016/07/cute-fingers-happy-love-smile-favim_com-129263.jpg?w=640",
    rating: 0,
  });
  const addNewSerie = (e) =>
    setNewSerie({ ...newSerie, [e.target.name]: e.target.value });
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    setShow(false);
    props.addSerie(newSerie);
  };
  const handleClose = () => setShow(false);

  return (
    <div className="Add">
      <Button variant="primary" onClick={handleShow}>
        Add A New Serie
      </Button>

      <Modal id="adds" show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Serie Details</Modal.Title>
        </Modal.Header>

[22:36]
<Modal.Body>
          <div className="newSerie">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Serie title"
                name="title"
                onChange={addNewSerie}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Serie description"
                name="description"
                onChange={addNewSerie}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Serie posterURL "
                name="posterURL"
                onChange={addNewSerie}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Serie rating"
                name="rating"
                onChange={addNewSerie}
              />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}