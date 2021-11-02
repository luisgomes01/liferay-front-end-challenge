import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import "./AddRepositoryDropdown.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRepositories } from "../../../context/context";

export default function AddRepositoryDropdown() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const { searchRepository, urlEnding, setUrlEnding } = useRepositories();

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
            placeholder="user/repository"
            value={urlEnding}
            onChange={(e) => setUrlEnding(e.target.value)}
            required
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              closeModal();
              searchRepository();
            }}
          >
            Add repository
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
