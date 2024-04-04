import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar is-fixed-bottom">
      <NavLink to="/" className="navbar-link">
        Home
      </NavLink>
      <NavLink to="/energy" className="navbar-link">
        Energy
      </NavLink>
    </nav>
  );
};
