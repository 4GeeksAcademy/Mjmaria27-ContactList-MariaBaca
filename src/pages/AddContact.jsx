import React, { useState, useEffect } from "react";
import { useContacts } from "../context/ContactContext";
import { useParams, useNavigate } from "react-router-dom";

const AddContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { contacts, addContact, updateContact } = useContacts();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });

  const editing = Boolean(id);

  useEffect(() => {
    if (editing) {
      const contactToEdit = contacts.find((c) => c.id === parseInt(id));
      if (contactToEdit) {
        setFormData(contactToEdit);
      }
    }
  }, [id, contacts]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.phone) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    try {
      if (editing) {
        await updateContact(id, formData);
      } else {
        await addContact(formData);
      }
      navigate("/");
    } catch (error) {
      alert("Ocurrió un error al guardar el contacto.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>{editing ? "Editar Contacto" : "Crear Contacto"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre Completo</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="form-control"
            placeholder="Ej. Juan Pérez"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Ej. juan@example.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="Ej. 0999999999"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
            placeholder="Ej. Calle Falsa 123"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editing ? "Guardar Cambios" : "Crear"}
        </button>
      </form>
    </div>
  );
};

export default AddContact;
