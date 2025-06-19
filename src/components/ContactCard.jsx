// src/components/ContactCard.jsx
import React, { useContext }  from 'react'
import { useNavigate }        from 'react-router-dom'
import { ContactContext }     from '../context/ContactContext'

export default function ContactCard({ contact }) {
  const { removeContact } = useContext(ContactContext)
  const navigate          = useNavigate()

  const handleDelete = async () => {
    if (window.confirm('¿Eliminar este contacto?')) {
      console.log('🗑️ Clicked delete on id=', contact.id)
      try {
        await removeContact(contact.id)
      } catch (err) {
        console.error('Error eliminando contacto:', err)
      }
    }
  }

  return (
    <li className="list-group-item d-flex align-items-center py-3">
      {/* Avatar /*/}
      <div className="rounded-circle bg-secondary me-4" style={{ width: '70px', height: '70px' }} />

      <div className="flex-grow-1">
        <h5 className="mb-1">{contact.name}</h5>
        {contact.address && <p className="mb-1 text-muted small"><i className="bi bi-geo-alt-fill me-2"></i>{contact.address}</p>}
        {contact.phone   && <p className="mb-1 text-muted small"><i className="bi bi-telephone-fill me-2"></i>{contact.phone}</p>}
        {contact.email   && <p className="text-muted small"><i className="bi bi-envelope-fill me-2"></i>{contact.email}</p>}
      </div>

      <div className="text-end">
        <button className="btn btn-link text-dark" onClick={() => navigate(`/edit/${contact.id}`)}>
          <i className="bi bi-pencil-fill fs-5"></i>
        </button>
        <button className="btn btn-link text-danger" onClick={handleDelete}>
          <i className="bi bi-trash-fill fs-5"></i>
        </button>
      </div>
    </li>
  )
}
