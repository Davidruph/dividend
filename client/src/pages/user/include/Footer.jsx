import React from "react";

function Footer() {
  return (
    <footer
      className="py-4 mt-auto footer-section fixed-bottom"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12">
            <nav className="nav fixed-bottom navbar-dark ml-2 mr-2 justify-content-between">
              <a className="btn text-footer" href="/home">
                <i className="fas fa-chart-bar fa-lg mb-0"></i>
                <br />
                <small>Home</small>
              </a>
              <a className="btn text-footer" href="/schedule">
                <i className="fas fa-clock fa-lg"></i>
                <br />
                <small>Schedule</small>
              </a>
              <a className="btn text-footer" href="/search">
                <i className="fas fa-search fa-lg"></i>
                <br />
                <small>Search</small>
              </a>
              <a className="btn text-footer" href="/transactions">
                <i className="fas fa-credit-card fa-lg"></i>
                <br />
                <small>Transactions</small>
              </a>
              <a className="btn text-footer icon-active" href="/profile">
                <i className="fas fa-user fa-lg"></i>
                <br />
                <small>Profile</small>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
