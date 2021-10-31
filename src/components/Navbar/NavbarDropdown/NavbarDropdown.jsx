export default function NavbarDropdown() {
  return (
    <div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavLightDropdown"
        aria-controls="navbarNavLightDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="" id="navbarNavLightDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarLightDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter and Order
            </a>
            <ul
              className="dropdown-menu dropdown-menu-light"
              aria-labelledby="navbarLightDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
