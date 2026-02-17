// Barra inferior com navegação por abas
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <nav className="nav-bar-links">
            <Link to="/"        className="link-router">Feed</Link>
            <Link to="/Login"   className="link-router">Entrar</Link>
            <Link to="/Teste"  className="link-router">Teste</Link>
        </nav>
    );
}