import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href>
          HubSpot
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link " href>
              Software
            </a>
            <a className="nav-link" href>
              Pricing
            </a>
            <a className="nav-link" href>
              Resources
            </a>
            <a className="nav-link" href>
              Parteners
            </a>
            <a className="nav-link" href>
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
