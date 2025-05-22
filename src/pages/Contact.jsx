import React from "react";
import { useContact } from "../context/ContactContext";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";

const Contact = () => {
  const { contacts } = useContact();

  return (
    <div style={{ maxWidth: 700, margin: "20px auto", padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
        <Link to="/add" style={styles.addButton}>
          Add new contact
        </Link>
      </div>
      {contacts.length === 0 ? (
        <p>No hay contactos.</p>
      ) : (
        contacts.map((contact) => <ContactCard key={contact.id} contact={contact} />)
      )}
    </div>
  );
};

const styles = {
  addButton: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "8px 12px",
    borderRadius: 4,
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Contact;
