import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function GLogin() {
  const [LoggedIn, setloginStatus] = useState({});
  function handleResponse(response) {
    console.log("Encoded jwt ID token:" + response.credential);
    var userObj = jwt_decode(response.credential);
    console.log(userObj);
    setloginStatus(userObj);
    document.getElementById("loginDiv").hidden = true;
  }

  function handleSignout(event) {
    setloginStatus({});
    document.getElementById("loginDiv").hidden = false;
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
    });
    google.accounts.id.prompt();
  }, []);
  return (
    <div className="text-white">
      <h1 className="text-center mt-2">Google Login</h1>
      <div id="loginDiv"></div>
      {Object.keys(LoggedIn).length !== 0 && (
        <button onClick={(e) => handleSignout(e)}>Sign Out</button>
      )}

      {LoggedIn && (
        <div>
          <img src={LoggedIn.picture} alt="user pic" />
          <h3>{LoggedIn.name}</h3>
        </div>
      )}
    </div>
  );
}

export default GLogin;
