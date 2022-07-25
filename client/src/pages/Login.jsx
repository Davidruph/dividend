import { useNavigate } from "react-router-dom";
import mailicon from ".././img/mail.png";
import padlockicon from ".././img/padlock.png";
import entericon from ".././img/enter.png";
// import googleicon from ".././img/google.png";
import appleicon from ".././img/apple.png";
import eyeicon from ".././img/eye.png";
import visibilityicon from ".././img/visibility.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setemailInput] = useState("");
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  // end password toggle function
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.LoggedIn === true) {
        navigate("user/index");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/glogin").then((response) => {
      if (response.data.LoggedIn === true) {
        navigate("user/index");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: emailInput,
      password: passwordInput,
    }).then((response) => {
      if (response.data[0]) {
        navigate("user/index");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data.message,
        });
      }
    });
  };

  function handleResponse(response) {
    //console.log("Encoded jwt ID token:" + response.credential);
    var userObj = jwt_decode(response.credential);
    //console.log(userObj);
    const name = userObj.name;
    const email = userObj.email;

    Axios.post("http://localhost:3001/glogin", {
      email: email,
      password: email,
      fullname: name,
    }).then((response) => {
      if (response.data[0]) {
        navigate("user/index");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data.message,
        });
      }
    });
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "525049691437-pjjbqvh4ulhhrulm2qcgh77kj38gcgr8.apps.googleusercontent.com",
      callback: handleResponse,
    });
    google.accounts.id.renderButton(document.getElementById("loginDiv"), {
      theme: "outline",
      size: "large",
      type: "standard",
      shape: "rectangular",
      width: "345",
    });
    //google.accounts.id.prompt();
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 mt-4">
          <h2 className="text-center text-white">Dividend Tracker</h2>
          <h5 className="text-center text-primary">
            Stay focused on your financial goals
          </h5>
          <div autoComplete="off" className="mt-5">
            <div className="input-group mb-2">
              <span className="input-group-text bg-white" id="basic-addon1">
                <img
                  src={mailicon}
                  className="img-fluid"
                  alt="user icon"
                  width="16"
                  height="16"
                />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control border-0"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setemailInput(e.target.value);
                }}
              />
            </div>

            <div className="input-group mb-3" id="show_password">
              <span className="input-group-text bg-white">
                <img
                  src={padlockicon}
                  className="img-fluid"
                  alt="password icon"
                  width="16"
                  height="16"
                />
              </span>
              <input
                type={passwordType}
                onChange={handlePasswordChange}
                value={passwordInput}
                name="password"
                className="form-control border-0"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
              <span
                className="input-group-text bg-white eye"
                onClick={togglePassword}
              >
                {passwordType === "password" ? (
                  <img
                    src={visibilityicon}
                    className="img-fluid"
                    alt="password icon"
                    width="16"
                    height="16"
                  />
                ) : (
                  <img
                    src={eyeicon}
                    className="img-fluid"
                    alt="password icon"
                    width="16"
                    height="16"
                  />
                )}
              </span>
            </div>

            <button
              onClick={login}
              className="btn btn-primary mb-3 w-100 btn-md"
            >
              <img
                src={entericon}
                className="img-fluid mx-2 text-white"
                alt="user icon"
                width="20"
                height="20"
              />
              Login
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <Link to={"./register"} className="text-white">
              Register
            </Link>
            <Link to={"./forgot-password"} className="text-white">
              Forgot Password
            </Link>
          </div>

          <div className="separator mt-5 text-white mb-4">Or</div>

          <div
            className="form-group w-100"
            id="loginDiv"
            style={{ width: "100%" }}
          ></div>

          <div className="form-group">
            <button
              className="btn btn-dark btn-block w-100 btn-md"
              style={{ backgroundColor: "#000" }}
            >
              <img
                src={appleicon}
                className="img-fluid mx-2 text-white"
                alt="apple icon"
                width="20"
                height="20"
              />{" "}
              Log In with Apple
            </button>
          </div>

          <p className="text-center mt-3 text-white">
            Your financies, safe and secure <br /> With 256-bit encryption
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
