import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="main-color">
      <footer className="container d-flex flex-wrap justify-content-between align-items-center py-5 main-color">
        <p className="col-md-4 mb-0 text-white">© Example Library App, Inc</p>
        <ul className="nav navbar-dark col-md-4 justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link px-2 text-white" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link px-2 text-white" to="/search">
              Search Books
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
};
