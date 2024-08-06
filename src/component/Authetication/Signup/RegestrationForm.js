import React, { useContext, useState } from "react";
import registeruserImage from "../../images/registeruserImage.png";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import ProjectContext from "../../context/ProjectContext";

function RegestrationForm() {
  const context = useContext(ProjectContext)
  const { credentials,
    setCredentials, onChange,  errorInregestration, 
    setErrorInregestration} = context

  const { fullname, email, password, cpassword, dob } = credentials;

  console.log(credentials)


  const handleClick = () => {
    console.log("click");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-5">
            <img src={registeruserImage} className="registeruserImage" alt="" />
          </div>

          <div className="col-lg-5">
            <h1 className="mt-1">Sign up</h1>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  onChange={onChange}
                  name="fullname"
                  placeholder="Enter full name..."
                  class="input-field-signup form-control"
                  id="fullname"
                  aria-describedby="emailHelp"
                />
                <hr className="horizontal_line" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={onChange}
                  placeholder="Enter your email"
                  class="input-field-signup form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
                <hr className="horizontal_line" />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control input-field-signup"
                  name="password"
                  onChange={onChange}
                  placeholder="Enter passsword..."
                  id="password"
                />
                <hr />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  onChange={onChange}
                  class="form-control input-field-signup"
                  name="cpassword"
                  placeholder="Re-enter passsword..."
                  id="cpassword"
                />
                <hr />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegestrationForm;
