import { Link } from "react-router-dom";

function Header() {
  const navStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    backgroundColor: "#1e1e1e",
    background: "rgba(10, 10, 10, 0.5)",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2em",
    margin: "0 12px",
  };

  const headerStyle = {
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 1000, // Ensures the header is on top of other content
  };

  const navContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "20px",
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <div style={linkContainerStyle}>
            <Link to="/" style={navLinkStyle}>
              Home
            </Link>
            <Link to="/browse" style={navLinkStyle}>
              Browse Cocktails
            </Link>
            <Link to="/favorites" style={navLinkStyle}>
              Favorites
            </Link>
            <Link to="/about" style={navLinkStyle}>
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
