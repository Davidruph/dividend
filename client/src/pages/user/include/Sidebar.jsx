import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  var menu_toggle = function () {
    var path = window.location.href;

    var li = document.querySelectorAll(
      "#layoutSidenav_nav .sb-sidenav a.nav-link"
    );
    li.forEach(function (element, index) {
      // current DOM element
      if (element.href === path) {
        element.classList.add("active");
      }
    });
  };

  menu_toggle();
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion text-white"
        id="sidenavAccordion"
        style={{ backgroundColor: "#000" }}
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Home</div>

            <Link to={"/user/index"} className="text-white nav-link">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </Link>

            <Link to={"/user/holdings"} className="text-white nav-link">
              <div className="sb-nav-link-icon">
                <i className="fas fa-layer-group fa-fw"></i>
              </div>
              Holdings
            </Link>

            <Link to={"/user/dividends"} className="text-white nav-link">
              <div className="sb-nav-link-icon">
                <i className="fas fa-home fa-fw"></i>
              </div>
              Dividends
            </Link>

            <Link to={"/user/search"} className="text-white nav-link">
              <div className="sb-nav-link-icon">
                <i className="fa fa-search fa-fw"></i>
              </div>
              Search
            </Link>

            <Link to={"/user/settings"} className="text-white nav-link">
              <div className="sb-nav-link-icon">
                <i className="fas fa-cog fa-fw"></i>
              </div>
              Settings
            </Link>

            <Link to={"/user/profile"} className="text-white nav-link">
              <div className="sb-nav-link-icon">
                <i className="fas fa-user fa-fw"></i>
              </div>
              Profile
            </Link>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          user
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
