import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { storage } from "../../context/Firebase";
import ProjectContext from "../../context/ProjectContext";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

function PersonalInfo() {
  const context = useContext(ProjectContext);
  const {
    credentials,
    registeruser,
    validateNewUser,
    setCredentials,
    onChange,
    country,
    countryname,
    imageUpload,
    setImageUpload,
    resumeupload,
    setresumeUpload,
    aadharupload,
    setAadharupload,
    errorInregestration,
    setErrorInregestration,
  } = context;

  const {
    dateofbirth,
    contactnumber,
    nationality,
    employedstatus,
    applyingasacourseowner,
    applyasadmin
  } = credentials;

  console.log(credentials)
  useEffect(() => {
    country();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 personal_information">
            <h3>Personal Information</h3>
            <form>
              <div
                className={`mb-3 ${
                  errorInregestration.contactnumber ? "has-error" : ""
                }`}
              >
                {" "}
                <label for="exampleInputEmail1" class="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  class="form-control input-filed"
                  id="contactnumber"
                  onChange={onChange}
                  name="contactnumber"
                  aria-describedby="emailHelp"
                />
              </div>
              {errorInregestration.contactnumber && (
                <small className="text-danger">
                  contact number is required
                </small>
              )}

              <div className="row">
                <div className="col-lg-6">
                  <div
                    className={`mb-3 ${
                      errorInregestration.dateofbirth ? "has-error" : ""
                    }`}
                  >
                    {/* <div className="mb-3"> */}{" "}
                    <label for="exampleInputEmail1" class="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      class="form-control input-filed"
                      id="dateofbirth"
                      onChange={onChange}
                      name="dateofbirth"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  {errorInregestration.dateofbirth && (
                    <small className="text-danger">
                      Date of bi is required
                    </small>
                  )}
                </div>

                <div className="col-lg-6">
                  <div
                    className={`mb-3 ${
                      errorInregestration.dateofbirth ? "has-error" : ""
                    }`}
                  >
                    {" "}
                    <label for="exampleInputEmail1" class="form-label">
                      Nationality
                    </label>
                    <select
                      class="form-select input-filed"
                      name="nationality"
                      onChange={onChange}
                      id="nationality"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>

                      {countryname.map((value) => {
                        return (
                          <>
                            <option value={value} defaultValue="india">
                              {value}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Civil Status
                    </label>
                    <select
                      class="form-select input-filed"
                      onChange={onChange}
                      name="employedstatus"
                      id="employedstatus"
                      aria-label="Default select example"
                    >
                      <option value="unemployeed" selected>
                        Un-employeed
                      </option>
                      <option value="employeed">Employeed</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Applying as a course owner
                    </label>
                    <select
                      class="form-select input-filed"
                      onChange={onChange}
                      name="applyingasacourseowner"
                      id="applyingasacourseowner"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="yes">Yes</option>
                      <option value="no" selected>
                        no
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Applying as Admin
                    </label>
                    <select
                      class="form-select input-filed"
                      onChange={onChange}
                      name="applyasadmin"
                      id="applyasadmin"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="yes">Yes</option>
                      <option value="no" selected>
                        no
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Upload resume
                </label>
                <input
                  type="file"
                  class="form-control input-filed"
                  name="uploadresume"
                  onChange={(e) => {
                    setresumeUpload(e.target.files[0]);
                  }}
                  id="uploadresume"
                />
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Upload Profile Photo
                    </label>
                    <input
                      type="file"
                      class="form-control input-filed"
                      name="profilephoto"
                      id="profilephoto"
                      onChange={(e) => {
                        setImageUpload(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Upload Aadhar Card
                    </label>
                    <input
                      type="file"
                      class="form-control input-filed"
                      name="aadharcard"
                      id="aadharcard"
                      onChange={(e) => {
                        setAadharupload(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
