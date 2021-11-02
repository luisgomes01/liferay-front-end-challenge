import "./Main.css";
import NothingHere from "../../svgs/DatasetemptyIcon.png";
import Card from "../Cards/cards";
import { useState, useContext } from "react";
import { useRepositories } from "../../context/context";

export default function Main() {
  const { repositoriesArray } = useRepositories();

  if (repositoriesArray == 0) {
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
  return <Card />;
}
