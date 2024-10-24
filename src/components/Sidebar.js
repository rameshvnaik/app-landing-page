import React from "react";
import "./sidebar.scss";
import { useNavigate, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  const handleSignOut = () => {
    console.log("User signed out");
  };

  const navItems = [
    { path: "/", iconClass: "fas fa-home", label: "Home" },
    { path: "/info", iconClass: "fas fa-user", label: "Info" },
    { path: "/departments", iconClass: "fas fa-cog", label: "Departments" },
    { iconClass: "fas fa-bell", label: "Notifications", action: () => alert("No new notifications") },
    { iconClass: "fas fa-sign-out-alt", label: "Sign Out", action: handleSignOut },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4>Vajra</h4>
      </div>
      <div className="sidebar-icons">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`icon ${item.path && isActive(item.path) ? "active" : ""}`}
            onClick={item.path ? () => navigate(item.path) : item.action}
          >
            <i className={item.iconClass}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
