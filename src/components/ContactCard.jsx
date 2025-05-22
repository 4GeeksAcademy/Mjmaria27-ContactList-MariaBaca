import React from "react";
import { useContact } from "../context/ContactContext";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const { deleteContact, setSelectedContact } = useContact();
  const navigate = useNavigate();

  const handleEdit = () => {
    setSelectedContact(contact);
    navigate("/add");
  };

  const handleDelete = () => {
    if (window.confirm("¿Seguro que deseas eliminar este contacto?")) {
      deleteContact(contact.id);
    }
  };

  return (
    <div style={styles.card}>
      <img
        src={contact.image_url || "https://via.placeholder.com/80"}
        alt={contact.full_name}
        style={styles.avatar}
      />
      <div style={styles.info}>
        <h4>{contact.full_name}</h4>
        <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
        <p><i className="fas fa-phone"></i> {contact.phone}</p>
        <p><i className="fas fa-envelope"></i> {contact.email}</p>
      </div>
      <div style={styles.actions}>
        <button onClick={handleEdit} style={styles.btnEdit} title="Editar">
          ✏️
        </button>
        <button onClick={handleDelete} style={styles.btnDelete} title="Eliminar">
          🗑️
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
    padding: "10px 0",
  },
  avatar: {
    borderRadius: "50%",
    width: 80,
    height: 80,
    marginRight: 20,
    objectFit: "cover",
  },
  info: {
    flex: 1,
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  btnEdit: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: 18,
  },
  btnDelete: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: 18,
  },
};

export default ContactCard;
