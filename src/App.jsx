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
import UserProvider from "./provider/UserProvider";
import AuthGuard from "./guard/AuthGuard";

function App() {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState(null);

  return (
    <BrowserRouter>
      <UserProvider>
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
                <AuthGuard>
                  <Home
                    setQuery={setQuery}
                    query={query}
                    news={news}
                    setNews={setNews}
                  />
                </AuthGuard>
              }
            />
            <Route
              path="about"
              element={
                <AuthGuard>
                  <About />
                </AuthGuard>
              }
            />
            <Route
              path="contact"
              element={
                <AuthGuard>
                  <Contact />
                </AuthGuard>
              }
            />
            <Route path="/details/:name" element={<DetailsPage />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
