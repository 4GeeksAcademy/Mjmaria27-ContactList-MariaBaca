// src/pages/ContactList.jsx

import React, { useContext } from 'react'
import { Link }               from 'react-router-dom'
import { ContactContext }     from '../context/ContactContext'
import ContactCard            from '../components/ContactCard'

export default function ContactList() {
  const { contacts, loading } = useContext(ContactContext)

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Contacts</h2>
        <Link to="/add" className="btn btn-success">
          Add new contact
        </Link>
      </div>

      {loading ? (
        <p>Loading contacts…</p>
      ) : contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul className="list-group list-group-flush">
          {contacts.map(c => (
            <ContactCard key={c.id} contact={c} />
          ))}
        </ul>
      )}
    </div>
  )
}
