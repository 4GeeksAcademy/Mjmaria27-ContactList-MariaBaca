// src/context/ContactContext.jsx
import React, { createContext, useState, useEffect } from 'react'
import {
  createAgenda,
  getContacts,
  createContact,
  updateContact,
  deleteContact
} from '../services/contactService'

export const ContactContext = createContext()

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([])
  const [loading,  setLoading]  = useState(true)

  useEffect(() => {
    async function init() {
      setLoading(true)
      try {
        await getContacts()
      } catch (err) {
        if (err.status === 404 || err.status === 422) {
          await createAgenda()
        } else {
          console.error(err)
        }
      }
      try {
        const data = await getContacts()
        setContacts(Array.isArray(data) ? data : [])
      } catch (err) {
        console.error(err)
        setContacts([])
      }
      setLoading(false)
    }
    init()
  }, [])

  const addContact = async contact => {
    const nuevo = await createContact(contact)
    setContacts(prev => [...prev, nuevo])
  }

  const editContact = async (id, contact) => {
    const updated = await updateContact(id, contact)
    setContacts(prev => prev.map(c => (c.id === id ? updated : c)))
  }

  const removeContact = async id => {
    console.log('🔻 Removing in context id=', id)
    await deleteContact(id)
    setContacts(prev => {
      console.log('🔻 Before remove, array=', prev)
      const filtered = prev.filter(c => c.id !== id)
      console.log('🔻 After remove, array=', filtered)
      return filtered
    })
  }

  return (
    <ContactContext.Provider
      value={{ contacts, loading, addContact, editContact, removeContact }}
    >
      {children}
    </ContactContext.Provider>
  )
}
