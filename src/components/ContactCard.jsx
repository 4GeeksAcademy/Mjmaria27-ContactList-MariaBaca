import React from "react";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../context/ContactContext";
import { FaTrash, FaEdit } from "react-icons/fa";

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContacts();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este contacto?")) {
      deleteContact(contact.id);
    }
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{contact.full_name}</h5>
          <p className="card-text mb-1"><strong>Email:</strong> {contact.email}</p>
          <p className="card-text mb-1"><strong>Teléfono:</strong> {contact.phone}</p>
          <p className="card-text"><strong>Dirección:</strong> {contact.address}</p>
        </div>
        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => navigate(`/edit/${contact.id}`)}
            title="Editar"
          >
            <FaEdit />
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={handleDelete}
            title="Eliminar"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
