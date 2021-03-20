import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

function SignUp() {
  const [flag, setFlag] = useState(false);

  function signupValidateForm(e) {
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var email = document.getElementById("inputEmail").value;
    var pass = document.getElementById("password").value;
    var cNumber = document.getElementById("contactNumber").value;
    var dob = document.getElementById("inputDate").value;

    if (!fName.match(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/)) {
      alert("Please provide valid input in first name");
      e.preventDefault();
      return false;
    }
    if (!lName.match(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/)) {
      alert("Please provide valid input in last name");
      e.preventDefault();
      return false;
    }
    if (!cNumber.match(/(?<!\d)\d{10}(?!\d)/)) {
      alert("Please provide valid contact number");
      e.preventDefault();
      return false;
    }
    if (
      !pass.match(
        /^.*(?=.{8,15})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
      )
    ) {
      alert("Please provide valid input in password");
      e.preventDefault();
      return false;
    }
    setFlag(true);

    // local Storage
    var data = {
      fName,
      lName,
      email,
      pass,
      cNumber,
      dob,
    };
    var fdata = JSON.stringify(data);

    localStorage.setItem("fdata", fdata);
  }

  return (
    <>
      <br />
      <br />
      <br />
      <div class="container">
        <h3>Sign Up</h3>
        <hr size="5px" />
        <form class="row g-3" name="f1" onSubmit={signupValidateForm}>
          <div class="col-md-6">
            <label for="firstName" class="form-label">
              FirstName
            </label>
            <input
              type="text"
              class="form-control inp-size"
              id="firstName"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">
              LastName
            </label>
            <input
              type="text"
              class="form-control inp-size"
              id="lastName"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control inp-size"
              id="inputEmail"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="password" class="form-label">
              password
            </label>
            <input
              type="password"
              class="form-control inp-size"
              id="password"
              data-toggle="tooltip"
              data-placement="top"
              title="1) Your password must be between 8 and 30 characters. 
                     2) Your password must contain at least one uppercase, or capital, letter (ex: A, B, etc.) 
                     3) Your password must contain at least one lowercase letter. 
                     4) Your password must contain at least one number digit (ex: 0, 1, 2, 3, etc.)"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="contactNumber" class="form-label">
              Contact Number
            </label>
            <input
              type="number"
              class="form-control inp-size"
              id="contactNumber"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="date" class="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              class="form-control inp-size"
              id="inputDate"
              required
            />
          </div>

          <div class="text-center">
            <br />
            <br />
            &nbsp; &nbsp;
            <button type="submit" class="btn btn-size btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <div class="text-center">
        Already have an Account ? &nbsp;
        <Link to="/login">
          <a>
            <u>LogIn</u>
          </a>
        </Link>
      </div>
      {flag ? <Redirect to="/login" /> : null}
    </>
  );
}

export default SignUp;
