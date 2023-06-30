import React from "react";
import HomePage from "./HomePage";
import ShoesPage from "./ShoesPage";
import ClothesPage from "./ClothesPage";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/ShoesPage" element={<ShoesPage />} />
        <Route path="/ClothesPage" element={<ClothesPage />} />
      </Routes>
    </div>
  );
};

export default App;
