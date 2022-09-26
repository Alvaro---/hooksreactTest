import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    // <>
    //   {/* <a href="/login">Login</a> */}
    //   {/* esto hace un refresh completo  */}
    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    //   <Link to="/login">Login</Link>
    //   {/* El Css es una etiqueta a href  */}
    // </>

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          UseContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <NavLink className="nav-link active" to="/"> */}
              <NavLink
                exact
                className={(args) => {
                  return `nav-link ${args.isActive ? "active" : ""}`;
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link active" to="/"> */}
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link active" to="/"> */}
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
