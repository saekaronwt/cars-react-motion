import React from "react";
import "./App.css";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Car from "./components/Car";
import Cars from "./components/Cars";
import Navigation from "./components/Navigation";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Cars />} />
          <Route path="/car/:id" element={<Car/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
