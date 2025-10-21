import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <h2>(ノ・∀・)ノ</h2>
            <div className="links">
                <Link to="/">Home</Link>
            </div>
        </nav>
  );
}

export default NavBar;