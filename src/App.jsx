// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import AddContact from "./pages/AddContact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Contact />} />
        <Route path="add" element={<AddContact />} />
      </Route>
    </Routes>
  );
};

export default App;
