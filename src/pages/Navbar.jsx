import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ marginBottom: "1rem" }}>
    <Link to="/">Contactos</Link> | <Link to="/add">Agregar</Link>
  </nav>
);

export default Navbar;
