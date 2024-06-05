import React from "react";
import styles from "../../styles/home/newsCard.module.css";
import { useNavigate } from "react-router-dom";

function NewsCard({ news }) {
  console.log("news", news);
  const navigate = useNavigate();
  function handleNavigate() {
    const slug = news.title.toLowerCase().replaceAll(" ", "-");
    navigate(`details/${slug}`, { state: news });
  }
  if (!news) return null;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={news.urlToImage} alt="" />
      </div>
      <div className={styles.descContainer}>
        <p>
          <span>Title : </span>
          {news.title}
        </p>
        <p>
          <span> Description :</span> {news.description}
        </p>
        <button onClick={handleNavigate}>Read More</button>
      </div>
    </div>
  );
}

export default NewsCard;
