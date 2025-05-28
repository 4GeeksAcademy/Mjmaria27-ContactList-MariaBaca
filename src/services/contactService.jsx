const BASE_URL = "https://playground.4geeks.com/contact/agendas";
const AGENDA_SLUG = "mis-contactos";

// Obtener contactos
export const getContacts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${AGENDA_SLUG}/contacts`);
    if (!response.ok) throw new Error("Error al obtener contactos");
    return await response.json();
  } catch (error) {
    console.error("getContacts error:", error);
    throw error;
  }
};

// Crear contacto
export const createContact = async (contactData) => {
  try {
    const response = await fetch(`${BASE_URL}/${AGENDA_SLUG}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...contactData,
        agenda_slug: AGENDA_SLUG,
      }),
    });
    if (!response.ok) throw new Error("Error al crear contacto");
    return await response.json();
  } catch (error) {
    console.error("createContact error:", error);
    throw error;
  }
};
