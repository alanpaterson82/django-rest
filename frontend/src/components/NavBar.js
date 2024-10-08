import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // //console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i className="fa-solid fa-carrot"></i><strong>Post</strong>
    </NavLink>
  );

  const contactIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/contact/create"
    >
      <i className="far fa-plus-square"></i><strong>Contact</strong>
    </NavLink>
  )

  const recipesIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/recipes"
    >
      <i className="fa-solid fa-kitchen-set"></i><strong>Recipes</strong>
    </NavLink>
  )

  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i className="fa-solid fa-list-ul"></i><strong>Feed</strong>
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fa-solid fa-pepper-hot"></i><strong>Hot Stuff</strong>
      </NavLink>
      <p onClick={handleSignOut}>
        <i className="fa-solid fa-person-through-window"></i><strong>Exit</strong>
      </p>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fa-solid fa-utensils"></i><strong>Sign in</strong>
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-drumstick-bite"></i><strong>Sign up</strong>
      </NavLink>
    </>
  );



  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" className="logo" />
            <h3><strong>Mince 'n' Patties</strong></h3>
            <h5><strong>Your favourite burger comparison site</strong></h5>
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        {currentUser && contactIcon}
        {currentUser && recipesIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-burger"></i><strong>Home</strong>
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;