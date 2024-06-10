import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles/detailPage/detailsPage.module.css";

function DetailsPage() {
  const { state } = useLocation();

  if (!state) return null;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src={
            state.urlToImage ||
            "https://raw.githubusercontent.com/manikant-codes/react-course-files-final/57e0be496b125c47048b9862cd9012c6babf9f26/public/images/logo.svg"
          }
          alt="img"
        />
      </div>
      <div className={styles.descContainer}>
        {state.title && (
          <h3 className={styles.title}>
            <span>Title : </span>
            {state.title}
          </h3>
        )}
        {state.content && (
          <p className={styles.title}>
            <span>Content : </span>
            {state.content}
          </p>
        )}
        {state.description && (
          <p className={styles.title}>
            <span>Desc : </span>
            {state.description}
          </p>
        )}
        {state.author && (
          <p className={styles.title}>
            <span>Author : </span>
            {state.author}
          </p>
        )}
      </div>
    </div>
  );
}

export default DetailsPage;
