// AdminHeader.jsx
// import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/admin.css";

const AdminHeader = () => {
  return (
    <div className="admin" id="wrapper">
      {" "}
      {/* Add 'admin' class to apply admin-specific styles */}
      {/* Header content */}
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
        <div className="d-flex align-items-center">
          <i
            className="fas fa-align-left primary-text fs-4 me-3"
            id="menu-toggle"
          ></i>
          <h2 className="fs-2 m-0">Dashboard</h2>
        </div>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle second-text fw-bold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user me-2"></i>John Doe
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="#">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
