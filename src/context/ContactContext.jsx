import React, { createContext, useContext, useState, useEffect } from 'react';
import * as api from '../services/contactService';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  // ... tu código del provider con estado, funciones, etc.

  return (
    <ContactContext.Provider value={{
      contacts,
      fetchContacts,
      addContact,
      updateContact,
      deleteContact,
      // cualquier otra cosa que exportes
    }}>
      {children}
    </ContactContext.Provider>
  );
};

// Este hook personalizado es para usar más fácil el contexto
export const useContacts = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContacts debe usarse dentro de un ContactProvider');
  }
  return context;
};
