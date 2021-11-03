import { Card, Button, Modal } from "react-bootstrap";
import { useRepositories } from "../../context/context";
import { timeAgo } from "../../timeago";
import liferayLogo from "../../svgs/liferay.png";
import { BiTrash } from "react-icons/bi";
import { AiOutlineStar, AiFillStar, AiFillWarning } from "react-icons/ai";
import { useState } from "react";

import "./cards.css";
export default function Cards() {
  const { repositoriesArray, setRepositoriesArray, deleteRepository } =
    useRepositories();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="cards-container">
      {repositoriesArray.map((repository, id) => (
        <Card
          style={{ width: "20rem", height: "20rem", maxWidth: "23rem" }}
          key={id}
        >
          <div className="card-header">
            <Card.Img src={liferayLogo} />
            <Card.Title>{repository.full_name}</Card.Title>

            <button className="reset-btn-style card-icon">
              <AiOutlineStar size={20} />
            </button>
            <button
              variant="primary"
              onClick={handleShow}
              className="reset-btn-style card-icon trash"
            >
              <BiTrash size={20} />
            </button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <AiFillWarning className="warning-icon m-2" size={20} />
                  <span>
                    <strong>Delete Repository</strong>
                  </span>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="d-flex align-items-center justify-content-center p-4">
                  <p>
                    Are you sure to delete the{" "}
                    <strong>{repository.full_name}</strong> repository?
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleClose();
                    deleteRepository(repository.id);
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <Card.Body>
            <ul>
              <Card.Text>
                <li>
                  <strong>Stars</strong>
                  <span>{repository.stargazers_count}</span>
                </li>
                <li>
                  <strong>Forks</strong> <span>{repository.forks}</span>
                </li>
                <li>
                  <strong>Open Issues</strong>
                  <span>{repository.open_issues_count}</span>
                </li>
                <li>
                  <strong>Age</strong>{" "}
                  <span>{timeAgo(repository.created_at)}</span>
                </li>
                <li>
                  <strong>Last Commit</strong>
                  <span>{timeAgo(repository.pushed_at)}</span>
                </li>
                <li>
                  <strong>License</strong>
                  <span>{repository.license ? repository.license : "N/A"}</span>
                </li>
                <div className="language">
                  <li>
                    {repository.language ? repository.language : "No language"}
                  </li>
                </div>
              </Card.Text>
            </ul>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
