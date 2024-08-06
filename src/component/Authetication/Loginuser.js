import React, { useContext, useEffect, useState } from "react";
import loginuser from "../images/loginuser.webp";
import "../Genralcomponent/Global.css";
import HttpsIcon from "@mui/icons-material/Https";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import ProjectContext from "../context/ProjectContext";
import { auth } from "../context/Firebase";
import { db } from "../context/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
function Loginuser() {
  const navigate = useNavigate();
  const context = useContext(ProjectContext);
  const { onSubmit, errorLogin, setErrorLogin, handlegoogleSignIn } = context;

  const [Crredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = Crredentials;

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setCredentials({ ...Crredentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="content">
        <button
          className="btn tbn-success"
          onClick={() => {
            navigate("ownerlogin");
          }}
        >
          Admin Login
        </button>
        <div className="row pt-5">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 loginuser">
            <div className="row">
              <div className="col-lg-6">
                <img src={loginuser} className="loginuser_image" alt="" />
              </div>

              <div className="col-lg-6" id="loginform">
                <h1 className="studentlogin_heading">Student Login</h1>
                <p className="enter_details_inst">
                  Hey Enter you details to login
                </p>
                <form>
                  <div
                    className={`input-group form_input ${
                      errorLogin.email ? "has-error" : ""
                    }`}
                  >
                    {" "}
                    <span
                      class="input-group-text icon_on_userlogin"
                      id="basic-addon1"
                    >
                      <AlternateEmailIcon className="" />
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="email"
                      name="email"
                      onChange={onChange}
                      id="email"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  {errorLogin.email && (
                    <small className="text-danger">Email is required</small>
                  )}
                  <p></p>

                  <div
                    className={`input-group form_input ${
                      errorLogin.password ? "has-error" : ""
                    }`}
                  >
                    {" "}
                    <span
                      class="input-group-text icon_on_userlogin"
                      id="basic-addon1"
                    >
                      <HttpsIcon />
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      onChange={onChange}
                      placeholder="password"
                      name="password"
                      id="password"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  {errorLogin.password && (
                    <small className="text-danger">
                      <ul>
                        <h6>Password Should Contain at least: </h6>
                        <li>One upper case Charactor</li>
                        <li>One lower case Charactor</li>
                        <li>one mumber and special charactor</li>
                        <li>Lenght minimum 8</li>
                      </ul>
                    </small>
                  )}
                  <p></p>
                  <Link to="/usersignup">Sign up</Link>
                  <br />
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      // register()
                      onSubmit(Crredentials.email, Crredentials.password);
                    }}
                    class="btn btn-primary mt-3 w-100 loginbutton"
                  >
                    Login In
                  </button>
                </form>

                <p className="other_signin_method">Or Sign in with</p>
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8 google_button">
                    <button
                      className="btn signin_with_google"
                      onClick={(e) => {
                        e.preventDefault();
                        handlegoogleSignIn();
                      }}
                    >
                      <GoogleIcon /> Sign In with google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Loginuser;
