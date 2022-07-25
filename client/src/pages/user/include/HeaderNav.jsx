import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import profileimg from "../../../img/profile.png";

function Header() {
  const [fullname, setFullname] = useState("");
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;
  const Logout = async () => {
    Axios.get("http://localhost:3001/logout").then((response) => {
      if (response.data.LoggedIn === false) {
        console.log("logged out");
        navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.LoggedIn === true) {
        setFullname(response.data.user[0].fullname);
        console.log(response.data);
      } else {
        navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    Axios.get("http://localhost:3001/glogin").then((response) => {
      if (response.data.LoggedIn === true) {
        setFullname(response.data.user[0].fullname);
        console.log(response.data);
      } else {
        navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function Toggle_bar() {
    const bar = document.getElementById("sb-nav-fixed");
    bar.classList.toggle("sb-sidenav-toggled");
  }

  function Foo() {
    var x = document.querySelector(".dropdown-menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <nav
      className="sb-topnav navbar navbar-expand navbar-dark fixed-bottom"
      style={{ backgroundColor: "#000" }}
    >
      <Link to={"/user/index"} className="navbar-brand">
        Dividend tracker
      </Link>
      <button
        className="btn btn-link btn-sm order-1 order-lg-0"
        id="sidebarToggle"
        onClick={Toggle_bar}
      >
        <i className="fas fa-bars fa-lg text-white"></i>
      </button>
      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div className="input-group"></div>
      </form>
      <ul className="navbar-nav ml-auto ml-md-0">
        <li className="nav-item dropdown">
          <button
            className="nav-link bg-transparent text-white dropdown-toggle"
            id="userDropdown"
            onClick={Foo}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src={profileimg}
              className="mr-2 img-fluid"
              width="30"
              height="30"
              alt=""
            />
            {fullname}
          </button>
          <div
            className="dropdown-menu dropdown-menu-right mini-menu-dark"
            aria-labelledby="userDropdown"
          >
            <Link
              to={"/user/settings"}
              className="dropdown-item mini-menu text-white"
            >
              Settings
            </Link>
            <button
              className="border-0 bg-transparent dropdown-item mini-menu text-white"
              onClick={Logout}
            >
              Logout
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
