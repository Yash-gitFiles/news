import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/detailPage/detailsPage.module.css";

function DetailsPage() {
  const { state } = useLocation();

  console.log("state", state);
  if (!state) return null;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={state.urlToImage} alt="img" />
      </div>
      <div className={styles.descContainer}>
        {state.title && (
          <h3>
            <span>Title : </span>
            {state.title}
          </h3>
        )}
        {state.content && (
          <p>
            <span>Content : </span>
            {state.content}
          </p>
        )}
        {state.description && (
          <p>
            <span>Desc : </span>
            {state.description}
          </p>
        )}
        {state.author && (
          <p>
            <span>Author : </span>
            {state.author}
          </p>
        )}{" "}
      </div>
    </div>
  );
}

export default DetailsPage;
