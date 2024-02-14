import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Header } from "./components/Header";
import { CocktailDetails } from "./components/CocktailComponents/CocktailDetails";

function App() {
  return (
    <Router>
      <div className="w-full h-full">
        <Header />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/cocktail/:id" element={<CocktailDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
