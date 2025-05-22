import React, { createContext, useContext, useState, useEffect } from "react";

const ContactContext = createContext();

const API_URL = "https://playground.4geeks.com/apis/fake/contact";
const AGENDA_SLUG = "mi_agenda_react";

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  // Obtener contactos de la agenda
  const getContacts = async () => {
    try {
      const res = await fetch(`${API_URL}/agenda/${AGENDA_SLUG}`);
      if (!res.ok) throw new Error("Error al obtener contactos");
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error(error);
      setContacts([]);
    }
  };

  // Crear contacto nuevo
  const addContact = async (contact) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...contact, agenda_slug: AGENDA_SLUG }),
      });
      if (!res.ok) throw new Error("Error al crear contacto");
      await getContacts();
    } catch (error) {
      console.error(error);
    }
  };

  // Actualizar contacto
  const updateContact = async (contact) => {
    try {
      const res = await fetch(`${API_URL}/${contact.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      if (!res.ok) throw new Error("Error al actualizar contacto");
      await getContacts();
    } catch (error) {
      console.error(error);
    }
  };

  // Borrar contacto
  const deleteContact = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al borrar contacto");
      await getContacts();
    } catch (error) {
      console.error(error);
    }
  };

  // Cargar contactos al inicio
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        addContact,
        updateContact,
        deleteContact,
        selectedContact,
        setSelectedContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
