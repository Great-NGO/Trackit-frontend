// AdminSidebar.jsx

import { Link } from "react-router-dom";
import "../../styles/adminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin" id="wrapper">
      {" "}
      {/* Add 'admin' class to apply admin-specific styles */}
      {/* Sidebar content */}
      <div className="admin bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa-user-secret me-2"></i>TRACKIT
        </div>
        <div className="list-group list-group-flush my-3">
          <Link
            to="/admin/dashboard"
            className="list-group-item list-group-item-action bg-transparent second-text active"
          >
            <i className="fas fa-tachometer-alt me-2"></i>DASHBOARD
          </Link>
          {/* Add other links here */}

          <Link
            to="/admin/issues"
            className="list-group-item list-group-item-action bg-transparent second-text active"
          >
            <i className="fas fa-tachometer-alt me-2"></i>ISSUES
          </Link>
      
          <Link
            to="/admin/users"
            className="list-group-item list-group-item-action bg-transparent second-text active"
          >
            <i className="fas fa-tachometer-alt me-2"></i>USERS
          </Link>
    
          <Link
            to="/admin/notifications"
            className="list-group-item list-group-item-action bg-transparent second-text active"
          >
            <i className="fas fa-tachometer-alt me-2"></i>NOTIFICATIONS
          </Link>
    
          <Link
            to="/admin/profile"
            className="list-group-item list-group-item-action bg-transparent second-text active"
          >
            <i className="fas fa-tachometer-alt me-2"></i>PROFILE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
