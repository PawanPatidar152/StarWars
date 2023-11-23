import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import MoviePage from "./Pages/MoviePage.jsx";

import ListMoviePage from "./Pages/ListMoviePage.jsx";
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Films" element={<MoviePage />} />
        <Route path="/Films/List" element={<ListMoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
