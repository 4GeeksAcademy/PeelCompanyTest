import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../img/peelcompany-removebg-preview.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSelect = (eventKey) => {
    if (eventKey === "quienes-somos") {
      navigate("/profile");
    }
  };

  const goHome = () =>{
    navigate("/")
  }

  return (
    <nav className="navbar navbar-expand-md bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={img} className="w-25 h-25" onClick={goHome} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="btn-group ms-auto">
            <button
              type="button"
              className="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            <i className="fa-solid fa-bars"/>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" onClick={handleSelect}>
              <li>
                <a className="dropdown-item" href="#" onClick={() => navigate("/profile")} style={{ cursor: "pointer" }}>
                  Quienes Somos
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={goHome} style={{ cursor: "pointer" }}>Home</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" style={{ cursor: "pointer" }}>Something else here</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/login" style={{ cursor: "pointer" }}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
