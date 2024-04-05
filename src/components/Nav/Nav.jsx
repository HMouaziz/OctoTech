import { NavLink , useLocation } from "react-router-dom";
import "./Nav.scss";
export const Nav = () => {

  const location = useLocation();
  const currentRoute = location.pathname;

  const getNavbarColor = (currentRoute, index) => {
    const routes = [
      { path: '/', index: 0, select: '--selected' },
      { path: '/info', index: 0, select: '--selected' },
      { path: '/energy', index: 1, select: '--selected' },
      { path: '/payments', index: 2, select: '--selected' }
    ];
  
    const matchedRoute = routes.find(route => {
      return route.path === currentRoute && route.index === index;
    });
  
    return matchedRoute ? matchedRoute.select : '';
  };
  return (
    <nav className="navbar">
      <NavLink to="/" className={`navbar__link navbar__link--home navbar__link${getNavbarColor(currentRoute, 0)}`}>
       <div className={`navbar__home-icon navbar__home-icon${getNavbarColor(currentRoute, 0)}`}></div>
        Home
      </NavLink>
      <NavLink to="/energy" className={`navbar__link navbar__link--energy navbar__link${getNavbarColor(currentRoute, 1)}`}>
        <div className={`navbar__energy-icon navbar__energy-icon${getNavbarColor(currentRoute, 1)}`}></div>
        Energy
      </NavLink>
      <NavLink to="/payments" className="navbar__link navbar__link--payment">
      <div className={`navbar__payments-icon navbar__energy-icon${getNavbarColor(currentRoute, 2)}`}></div>
        Payments
      </NavLink>
    </nav>
  );
};
