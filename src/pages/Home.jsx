import React, { useEffect, useState } from "react";
import NewsCard from "../components/home/NewsCard";
import { getNews } from "../services/apiServices";
import styles from "../styles/home/home.module.css";

function Home() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNews().then((data) => {
      setNews(data);
    });
  }, []);

  if (!news) return null;
  return (
    <>
      Total News : {news.totalResults}
      <div className={styles.container}>
        {news.articles.map((value, index) => {
          return <NewsCard key={index} news={value} />;
        })}
      </div>
    </>
  );
}

export default Home;
