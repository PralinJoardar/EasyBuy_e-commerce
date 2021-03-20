import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

function LogIn({ setName }) {
  const [flag, setFlag] = useState(false);
  function loginValidateForm(e) {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    if (
      !pass.match(
        /^.*(?=.{8,15})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
      )
    ) {
      alert("Please provide valid input in password");
      e.preventDefault();
      return false;
    }

    // verification

    var objFetchData = localStorage.getItem("fdata");

    var fetchData = JSON.parse(objFetchData);

    if (fetchData.email == email && fetchData.pass == pass) {
      alert(`Welcome ${fetchData.fName} ${fetchData.lName}`);
      setName(`${fetchData.fName} ${fetchData.lName}`);
    } else {
      alert("Please provide valid Username & Password");
      e.preventDefault();
      return false;
    }
    setFlag(true);
  }
  return (
    <div class="container float-center">
      <br />
      <br />
      <br />
      <br />
      <h3>Login to your account !</h3>
      <hr />
      <br />
      <form name="f2" onSubmit={loginValidateForm}>
        <a>Email</a>
        <br />
        <input
          type="email"
          name="t5"
          id="email"
          class="formt"
          size="30"
          required
        />{" "}
        <br />
        <a>Password</a>
        <br />
        <input
          type="password"
          name="t6"
          id="pass"
          class="formt"
          size="30"
          data-toggle="tooltip"
          data-placement="top"
          title="1) Your password must be between 8 and 30 characters. 
              2) Your password must contain at least one uppercase, or capital, letter (ex: A, B, etc.) 
              3) Your password must contain at least one lowercase letter. 
              4) Your password must contain at least one number digit (ex: 0, 1, 2, 3, etc.)"
          required
        />{" "}
        <br />
        <br />
        <button
          type="submit"
          class="btn btn-primary"
        >
          Login
        </button>
        <br />
        {flag ? <Redirect to="/" /> : null}
      </form>
    </div>
  );
}

export default LogIn;
