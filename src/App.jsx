import React, { useEffect, useState } from "react";
import AddContact from "./pages/AddContact";
import { getContacts } from "./services/contactService";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [errorContacts, setErrorContacts] = useState(null);

  const fetchContacts = async () => {
    try {
      setLoadingContacts(true);
      const data = await getContacts();
      setContacts(data);
    } catch (err) {
      setErrorContacts("Error al cargar contactos");
      console.error(err);
    } finally {
      setLoadingContacts(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Actualizar la lista cuando se crea un contacto nuevo
  const handleContactCreated = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mi Lista de Contactos</h1>

      <AddContact onContactCreated={handleContactCreated} />

      {loadingContacts && <p>Cargando contactos...</p>}
      {errorContacts && <p style={{ color: "red" }}>{errorContacts}</p>}

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <b>{contact.full_name}</b> - {contact.email} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
