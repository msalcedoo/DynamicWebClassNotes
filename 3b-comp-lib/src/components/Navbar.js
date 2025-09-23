import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
        </div>

        <ul className="navbar-links">

                <a href="/">Home</a>
                <a href="/about.html">About</a>
                <a href="/services.html">Services</a>
                <a href="/contact.html">Contact</a>

        </ul>
    </nav>
  );
};

export default Navbar;