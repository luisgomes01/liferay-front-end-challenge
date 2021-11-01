import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import "./AddRepositoryModal.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { addRepository } from "../../../api/AddRepository";
import { getRepository } from "../../../api/repository";

export default function AddRepositoryModal() {
  const [showModal, setShowModal] = useState(false);
  const [urlEnding, setUrlEnding] = useState("");

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  useEffect(() => {
    addRepository();
  }, []);
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
          <input
            type="text"
            placeholder="format: user/repository"
            value={urlEnding}
            required
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={(closeModal, getRepository)}>
            Add repository
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
