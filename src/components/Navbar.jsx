import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { backgroundColor: isActive && "#c01a00" };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return { backgroundColor: isActive && "#c01a00" };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={({ isActive }) => {
              return { backgroundColor: isActive && "#c01a00" };
            }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return { backgroundColor: isActive && "#c01a00" };
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
