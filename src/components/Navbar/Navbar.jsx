import NavbarDropdown from "./NavbarDropdown/NavbarDropdown";
import NavbarInput from "./NavbarInput/NavbarInput";
import AddRepositoryDropdown from "./AddRepositoryDropdown/AddRepositoryDropdown";

import { AiFillGithub, AiOutlineStar, AiFillAppstore } from "react-icons/ai";
import { BsFillHddStackFill, BsPlusSquareFill } from "react-icons/bs";
import { IoContrastSharp } from "react-icons/io5";

import "./Navbar.css";
export default function Navbar() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
          <ul className="navbar-nav d-flex align-items-center w-100 justify-content-evenly">
            <li className="nav-item">
              <AiFillGithub size={24} color="#6B6C7E" />
              <ul>
                <li className="nav-item m-4">Github Compare</li>
              </ul>
            </li>
            <li className="nav-item">
              <NavbarDropdown />
            </li>
            <li className="nav-item">
              <NavbarInput />
            </li>
            <li className="nav-item">
              <AiOutlineStar size={20} />
            </li>
            <li className="nav-item">
              <IoContrastSharp size={20} />
            </li>
            <li className="nav-item">
              <AiFillAppstore size={20} />
            </li>
            <li>
              <AddRepositoryDropdown />
            </li>
            {/* <li>
              <BsFillHddStackFill />
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
