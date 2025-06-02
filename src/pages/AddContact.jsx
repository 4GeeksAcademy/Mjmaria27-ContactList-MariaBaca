import React, { useState } from "react";
import { createContact } from "../services/contactService";

export default function AddContact({ onContactCreated }) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const newContact = await createContact(formData);
      alert("Contacto creado correctamente!");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        address: "",
        description: "",
      });
      if (onContactCreated) onContactCreated(newContact);
    } catch (err) {
      setError("Error al crear contacto. Revisa los datos.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="full_name"
        value={formData.full_name}
        onChange={handleChange}
        placeholder="Nombre completo"
        required
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Teléfono"
        required
      />
      <input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Dirección"
        required
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Descripción"
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Creando..." : "Crear Contacto"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
