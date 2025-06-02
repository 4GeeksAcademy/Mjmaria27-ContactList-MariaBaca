const BASE_URL = "https://playground.4geeks.com/contact/agendas/mis-contactos/contacts";
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
        full_name: contactData.full_name,
        email: contactData.email,
        phone: contactData.phone,
        address: contactData.address,
        agenda_slug: AGENDA_SLUG,
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Detalles del error al crear:", errorDetails);
      throw new Error("Error al crear contacto");
    }

    return await response.json();
  } catch (error) {
    console.error("createContact error:", error);
    throw error;
  }
};

// Eliminar contacto
export const deleteContact = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${AGENDA_SLUG}/contacts/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar contacto");
    return true;
  } catch (error) {
    console.error("deleteContact error:", error);
    throw error;
  }
};

// Editar contacto
export const updateContact = async (id, contactData) => {
  try {
    const response = await fetch(`${BASE_URL}/${AGENDA_SLUG}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: contactData.full_name,
        email: contactData.email,
        phone: contactData.phone,
        address: contactData.address,
        agenda_slug: AGENDA_SLUG,
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Detalles del error al actualizar:", errorDetails);
      throw new Error("Error al actualizar contacto");
    }

    return await response.json();
  } catch (error) {
    console.error("updateContact error:", error);
    throw error;
  }
};
