const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (editing) {
      await updateContact(id, formData);
    } else {
      await addContact(formData);
    }
    navigate('/');
  } catch (error) {
    alert('Error al guardar el contacto');
  }
};
