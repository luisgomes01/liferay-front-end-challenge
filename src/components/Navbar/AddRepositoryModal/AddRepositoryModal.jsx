import { BsPlusSquareFill } from "react-icons/bs";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./AddRepositoryModal.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddRepositoryModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className="add-repository">
      <button className="reset-btn-style" onClick={openModal}>
        <BsPlusSquareFill size={26} color="#0b5fff" />
      </button>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>New repository</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="Repository">
            Repository <span>*</span>
          </label>
          <br />
          <input type="text" required></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
