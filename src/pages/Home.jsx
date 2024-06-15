import React, { useEffect } from "react";
import NewsCard from "../components/home/NewsCard";
import { getNews } from "../services/apiServices";
import styles from "../styles/home/home.module.css";

function Home({ news, setNews }) {
  useEffect(() => {
    getNews().then((data) => {
      setNews(data);
    });
  }, []);

  if (!news) return;
  return (
    <div className={styles.containerOuter}>
      <span> Total News : </span> {news?.articles?.length}
      {news && news.articles ? (
        <div className={styles.container}>
          {news.articles.map((value, index) => {
            return <NewsCard key={index} news={value} />;
          })}
        </div>
      ) : (
        <div>City Not Found</div>
      )}
    </div>
  );
}

export default Home;
