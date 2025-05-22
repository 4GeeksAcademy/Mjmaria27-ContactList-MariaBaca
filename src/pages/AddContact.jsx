import React, { useState, useEffect } from "react";
import { useContact } from "../context/ContactContext";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const { addContact, updateContact, selectedContact, setSelectedContact } = useContact();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (selectedContact) {
      setForm(selectedContact);
    } else {
      setForm({
        full_name: "",
        email: "",
        phone: "",
        address: "",
      });
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.full_name.trim() === "") {
      alert("El nombre es obligatorio");
      return;
    }
    if (form.id) {
      await updateContact(form);
    } else {
      await addContact(form);
    }
    setSelectedContact(null);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <input
        name="full_name"
        value={form.full_name}
        onChange={handleChange}
        placeholder="Nombre completo"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Teléfono"
      />
      <input
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Dirección"
      />
      <button type="submit" style={{ marginTop: 10 }}>
        Guardar
      </button>
    </form>
  );
};

export default AddContact;
