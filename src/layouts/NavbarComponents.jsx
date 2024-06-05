import React from "react";
import styles from "../styles/layout/navbar.module.css";
import { TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function NavbarComponents() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          src="https://raw.githubusercontent.com/manikant-codes/react-course-files-final/57e0be496b125c47048b9862cd9012c6babf9f26/public/images/logo.svg"
          alt=""
        />
        <p>Seven News</p>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search..." />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className={styles.pages}>
        <Link to="/">home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavbarComponents;
