import "./Main.css";
import NothingHere from "../../svgs/DatasetemptyIcon.png";

export default function Main() {
  return (
    <main>
      <img src={NothingHere} alt="Nothing Here Yet" />

      <h3>There's nothing here yet!</h3>
      <p>
        Add your favorites repositories by clicking the plus button <br /> and
        by clicking add new repository
      </p>
    </main>
  );
}
