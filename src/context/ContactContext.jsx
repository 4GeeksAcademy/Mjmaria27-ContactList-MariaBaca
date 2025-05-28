import React, { createContext, useState, useEffect, useContext } from "react";
import * as api from "../services/contactService";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const data = await api.getContacts();
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (contact) => {
    try {
      await api.createContact(contact);
      await fetchContacts();
    } catch (error) {
      console.error("Error al agregar contacto:", error);
    }
  };

  const updateContact = async (id, contact) => {
    try {
      await api.updateContact(id, contact);
      await fetchContacts();
    } catch (error) {
      console.error("Error al actualizar contacto:", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await api.deleteContact(id);
      await fetchContacts();
    } catch (error) {
      console.error("Error al eliminar contacto:", error);
    }
  };

  return (
    <ContactContext.Provider
      value={{ contacts, fetchContacts, addContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContacts debe usarse dentro de un ContactProvider");
  }
  return context;
};
