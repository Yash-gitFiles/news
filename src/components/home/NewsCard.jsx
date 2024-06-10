import React from "react";
import styles from "../../styles/home/newsCard.module.css";
import { useNavigate } from "react-router-dom";

function NewsCard({ news }) {
  const navigate = useNavigate();
  function handleNavigate() {
    const slug = news.title.toLowerCase().replaceAll(" ", "-");
    navigate(`details/${slug}`, { state: news });
  }
  if (!news) return null;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src={
            news.urlToImage ||
            "https://raw.githubusercontent.com/manikant-codes/react-course-files-final/57e0be496b125c47048b9862cd9012c6babf9f26/public/images/logo.svg"
          }
          alt=""
        />
      </div>
      <div className={styles.descContainer}>
        <p className={styles.title}>
          <span>Title : </span>
          {news.title}
        </p>
        <p className={styles.title}>
          <span> Description :</span> {news.description}
        </p>
        <button onClick={handleNavigate}>Read More</button>
      </div>
    </div>
  );
}

export default NewsCard;
