export function getNews(query = "surat") {
  return fetch(
    // `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API}`
    `https://newsapi.org/v2/everything?q=${query}&apiKey=fd3aeeaa770f4c2e8293b91f3be8e429`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });
}
