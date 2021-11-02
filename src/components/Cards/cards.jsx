import { Card, Button } from "react-bootstrap";
import { useRepositories } from "../../context/context";
import { timeAgo } from "../../timeago";
import liferayLogo from "../../svgs/liferay.png";
import "./cards.css";
export default function Cards() {
  const { repositoriesArray } = useRepositories();

  return (
    <div className="cards-container">
      {repositoriesArray.map((repository, key) => (
        <Card style={{ width: "18rem" }} key={repository.id}>
          <div className="card-header">
            <Card.Img src={liferayLogo} />
            <Card.Title>{repository.full_name}</Card.Title>
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
                  <span>
                    {repository.license ? repository.license.nome : "N/A"}
                  </span>
                </li>
              </Card.Text>
            </ul>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
