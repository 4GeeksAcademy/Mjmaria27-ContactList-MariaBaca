import { useContacts } from '../context/ContactContext';
import { Link } from 'react-router-dom';

function ContactCard({ contact }) {
  const { deleteContact } = useContacts();

  return (
    <div className="card">
      <h3>{contact.full_name}</h3>
      <p>📞 {contact.phone}</p>
      <p>📧 {contact.email}</p>
      <p>📍 {contact.address}</p>
      <Link to={`/edit/${contact.id}`}>✏️ Editar</Link>
      <button onClick={() => deleteContact(contact.id)}>🗑️ Eliminar</button>
    </div>
  );
}

export default ContactCard;
