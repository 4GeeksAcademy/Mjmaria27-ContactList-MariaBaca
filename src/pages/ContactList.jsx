import { useContacts } from '../context/ContactContext';
import { Link } from 'react-router-dom';
import ContactCard from '../components/ContactCard';

function ContactList() {
  const { contacts } = useContacts();

  return (
    <div className="container">
      <h1>Contactos</h1>
      <Link to="/add">➕ Agregar Contacto</Link>
      {contacts.length === 0 ? (
        <p>No hay contactos.</p>
      ) : (
        contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      )}
    </div>
  );
}

export default ContactList;
