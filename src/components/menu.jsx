import {Link} from "react-router-dom"
export default function Menu() {
    return (
      <nav>
        <ul className="menu-list">
          <Link to="/">Garantías</Link>
          <Link to="/rma">RMA</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/login">Login</Link>
        </ul>
      </nav>
    );
  }