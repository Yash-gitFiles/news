import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailsPage from "./pages/DetailsPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout setQuery={setQuery} query={query} setNews={setNews} />
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
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
