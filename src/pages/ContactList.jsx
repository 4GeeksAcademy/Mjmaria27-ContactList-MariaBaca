import React from "react";
import { useContacts } from "../context/ContactContext";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";

const ContactList = () => {
  const { contacts } = useContacts();

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Lista de Contactos</h2>
        <Link to="/add" className="btn btn-success">
          Agregar Contacto
        </Link>
      </div>
      {contacts.length === 0 ? (
        <p>No hay contactos disponibles.</p>
      ) : (
        contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      )}
    </div>
  );
};

export default ContactList;
