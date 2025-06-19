// src/services/contactService.jsx

const API_BASE     = 'https://playground.4geeks.com';
const AGENDA_SLUG  = 'ContactList';
const AGENDA_URL   = `${API_BASE}/contact/agendas/${AGENDA_SLUG}`;
const CONTACTS_URL = `${AGENDA_URL}/contacts`;

// Crear agenda si no existe
export async function createAgenda() {
  const res = await fetch(AGENDA_URL, { method: 'POST' });
  if (!res.ok) throw new Error('Error al crear la agenda');
  return res.json();
}

// Leer todos los contactos (array puro)
export async function getContacts() {
  const res = await fetch(CONTACTS_URL);
  if (!res.ok) {
    const err = new Error('Error al leer contactos');
    err.status = res.status;
    throw err;
  }
  return res.json();
}

// Crear nuevo contacto
export async function createContact({ name, email, phone, address }) {
  const payload = { name, email, phone, address };
  const res = await fetch(CONTACTS_URL, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Error al crear el contacto');
  return res.json();
}

// Actualizar contacto existente
export async function updateContact(id, { name, email, phone, address }) {
  const url = `${CONTACTS_URL}/${id}`;
  const res = await fetch(url, {
    method:  'PUT',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ name, email, phone, address }),
  });
  if (!res.ok) throw new Error('Error al actualizar el contacto');
  return res.json();
}

// ELIMINAR contacto: no parsear JSON vacío
export async function deleteContact(id) {
  const url = `${CONTACTS_URL}/${id}`;
  const res = await fetch(url, { method: 'DELETE' });
  if (!res.ok) throw new Error('Error al eliminar el contacto');
  // La API no devuelve body, devolvemos void
  return;
}
