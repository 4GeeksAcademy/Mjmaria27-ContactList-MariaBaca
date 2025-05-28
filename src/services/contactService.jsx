const BASE_URL = 'https://playground.4geeks.com/apis/fake/contact/';
const AGENDA_SLUG = 'contacts_app';

export const getContacts = async () => {
  try {
    const res = await fetch(`${BASE_URL}agenda/${AGENDA_SLUG}`);
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error obteniendo contactos:", error);
    return [];
  }
};

export const createContact = async (contact) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...contact, agenda_slug: AGENDA_SLUG }),
    });

    if (!res.ok) throw new Error('Error creando contacto');
    return await res.json();
  } catch (error) {
    console.error("Error creando contacto:", error);
    throw error;
  }
};

export const updateContact = async (id, contact) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...contact, agenda_slug: AGENDA_SLUG }),
    });

    if (!res.ok) throw new Error('Error actualizando contacto');
    return await res.json();
  } catch (error) {
    console.error("Error actualizando contacto:", error);
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) throw new Error('Error eliminando contacto');
  } catch (error) {
    console.error("Error eliminando contacto:", error);
    throw error;
  }
};
