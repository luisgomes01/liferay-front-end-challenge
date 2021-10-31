import { AiOutlineSearch } from "react-icons/ai";
import "./NavbarInput.css";
export default function NavbarInput() {
  return (
    <div className="cover d-flex align-items-center">
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <div className="m-2">
        <AiOutlineSearch size={16} />
      </div>
    </div>
  );
}
