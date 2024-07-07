import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Essentials from "./pages/Essentials";
import Advanced from "./pages/Advanced";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto">
          <Routes>
            <Route path="/" element={<Essentials />} />
            <Route path="/advanced" element={<Advanced />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
