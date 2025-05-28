import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactProvider } from "./context/ContactContext";
import ContactList from "./pages/ContactList";
import AddContact from "./pages/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <ContactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<AddContact />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  );
};

export default App;
