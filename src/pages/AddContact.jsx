// src/pages/AddContact.jsx

import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate, useParams }         from 'react-router-dom'
import { ContactContext }                       from '../context/ContactContext'

export default function AddContact() {
  const { contacts, addContact, editContact } = useContext(ContactContext)
  const navigate = useNavigate()
  const { id }   = useParams()

  const [form, setForm] = useState({
    name:    '',
    email:   '',
    phone:   '',
    address: ''
  })

  useEffect(() => {
    if (id) {
      const existing = contacts.find(c => String(c.id) === id)
      if (existing) {
        setForm({
          name:    existing.name    || '',
          email:   existing.email   || '',
          phone:   existing.phone   || '',
          address: existing.address || ''
        })
      }
    }
  }, [id, contacts])

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if (id) {
        await editContact(Number(id), form)
      } else {
        await addContact(form)
      }
      navigate('/')
    } catch (err) {
      console.error('Error guardando contacto:', err)
    }
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        {id ? 'Edit a contact' : 'Add a new contact'}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto"
        style={{ maxWidth: '500px' }}
      >
        {[
          { label: 'Name',    name: 'name',    type: 'text',  required: true },
          { label: 'Email',   name: 'email',   type: 'email', required: true },
          { label: 'Phone',   name: 'phone',   type: 'text',  required: false },
          { label: 'Address', name: 'address', type: 'text',  required: false }
        ].map(({ label, name, type, required }) => (
          <div className="mb-3" key={name}>
            <label className="form-label">{label}</label>
            <input
              className="form-control"
              name={name}
              type={type}
              placeholder={`Enter ${label.toLowerCase()}`}
              value={form[name]}
              onChange={handleChange}
              required={required}
            />
          </div>
        ))}

        <button type="submit" className="btn btn-primary w-100 mb-2">
          save
        </button>
        <div className="text-center">
          <Link to="/">or get back to contacts</Link>
        </div>
      </form>
    </div>
  )
}
