import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    // <div className={styles.navbar}>
    //   <button className={styles.btn} onClick={() => setShowNavbar(!showNavbar)}>
    //     <GiHamburgerMenu />
    //   </button>
    //   <ul style={{ display: showNavbar ? "none" : "flex" }}>
    //     <li>
    //       <NavLink
    //         to="/"
    //         style={({ isActive }) => {
    //           return { backgroundColor: isActive && "#c01a00" };
    //         }}
    //       >
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/about"
    //         style={({ isActive }) => {
    //           return { backgroundColor: isActive && "#c01a00" };
    //         }}
    //       >
    //         About
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/projects"
    //         style={({ isActive }) => {
    //           return { backgroundColor: isActive && "#c01a00" };
    //         }}
    //       >
    //         Projects
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/contact"
    //         style={({ isActive }) => {
    //           return { backgroundColor: isActive && "#c01a00" };
    //         }}
    //       >
    //         Contact
    //       </NavLink>
    //     </li>
    //   </ul>
    // </div>

    <nav
      className={`${styles.navbar} navbar navbar-expand-lg bg-body-tertiary `}
    >
      <div className="container-fluid justify-content-end">
        <button
          className="navbar-toggler bg-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          color="white"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return { backgroundColor: isActive && "#c01a00" };
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return { backgroundColor: isActive && "#c01a00" };
                }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                style={({ isActive }) => {
                  return { backgroundColor: isActive && "#c01a00" };
                }}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
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
      </div>
    </nav>
  );
};
export default Navbar;
