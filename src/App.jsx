import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContactProvider }              from './context/ContactContext'
import ContactList                      from './pages/ContactList'
import AddContact                       from './pages/AddContact'

export default function App() {
  return (
    <ContactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"        element={<ContactList />} />
          <Route path="/add"     element={<AddContact  />} />
          <Route path="/edit/:id" element={<AddContact />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  )
}
