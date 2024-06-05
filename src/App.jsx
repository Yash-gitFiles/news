import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { getNews } from "./services/apiServices";
import DetailsPage from "./pages/DetailsPage";

function App() {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              setQuery={setQuery}
              query={query}
              news={news}
              setNews={setNews}
            />
          }
        >
          <Route
            index
            element={
              <Home
                setQuery={setQuery}
                query={query}
                news={news}
                setNews={setNews}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/details/:name" element={<DetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// https://newsapi.org/v2/everything?q=${query}&pageSize=10&page=${page}&apiKey=fd3aeeaa770f4c2e8293b91f3be8e429
