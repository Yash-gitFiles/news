import React from "react";
import styles from "../../styles/home/newsCard.module.css";

function NewsCard({ news }) {
  console.log("news", news);

  if (!news) return null;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={news.urlToImage} alt="" />
      </div>
      <div className={styles.descContainer}>
        <p>Lorem, ipsum.</p>
        <p>{news.description}</p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default NewsCard;
