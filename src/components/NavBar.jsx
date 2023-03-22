import { NavLink } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            users
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
