import React, { useState } from "react";
import ProjectContext from "./ProjectContext";
import { ToastContainer, toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import { db, storage } from "./Firebase";
import { v4 } from "uuid";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { provider } from "./Firebase";
import { auth } from "./Firebase";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
function Projectstate(props) {
  const [errorLogin, setErrorLogin] = useState({
    email: false,
    password: false,
  });

  const [errorInregestration, setErrorInregestration] = useState({
    fullname: false,
    email: false,
    password: false,
    cpassword: false,
    dateofbirth: false,
    contactnumber: false,
    nationality: false,
    employedstatus: false,
    applyingasacourseowner: false,
  });

  const [errorInAadharUpload, seterrorInAadharUpload] = useState(false);
  const [errorInResumeUpload, seterrorInResumeUpload] = useState(false);
  const [errorInphotoUpload, seterrorInphotoUpload] = useState(false);

  const [countryname, setCountrname] = useState([]);

  const [credentials, setCredentials] = useState({
    fullname: "",
    email: "",
    password: "",
    cpassword: "",
    dateofbirth: "",
    contactnumber: "",
    nationality: "India",
    employedstatus: "unemployed",
    applyingasacourseowner: "no",
  });
  const [imageUpload, setImageUpload] = useState(null);
  const [aadharupload, setAadharupload] = useState(null);
  const [resumeupload, setresumeUpload] = useState(null);

  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIscomplete] = useState(false);

  const [margin, setMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const [google_loginValue, setGoogleLoginValue] = useState("");
  const navigate = useNavigate();
  const onSubmit = (email, password) => {
    const emailError = email.trim() == "";
    const passwordShouldcontail = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    passwordShouldcontail.test(password);
    const passwordError = password.trim() == "";
    const passwordContain = passwordShouldcontail;

    setErrorLogin({ email: emailError, password: passwordError });

    if (!emailError && !passwordError && passwordShouldcontail) {
      handleLogin(email, password);
    } else {
      toast.error("Every filed is important or Check password length", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleLogin = async (email, password) => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Login successful
      toast.success("Congratulations! You are logged-in", {
        position: "top-center",
        theme: "colored",
      });
      localStorage.setItem("accesstoken", auth.currentUser.accessToken);
      localStorage.setItem("email", auth.currentUser.email);
      navigate("/");
      // You can redirect the user to a different page or perform other actions here
    } catch (error) {
      alert(
        toast.error("Invalid Credentials!", {
          position: "top-center",
          theme: "colored",
        })
      );
      // Handle login error, display an error message, etc.
    }
  };

  const handlegoogleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setGoogleLoginValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      setGoogleLoginValue(localStorage.getItem("email"));
      toast.success(`You are signin`, {
        position: "top-center",
        theme: "colored",
      });
      navigate("/");
    });
  };

  const country = async () => {
    await fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Extract country names
        const countryNames = data.map((country) => country.name.common);

        // Sort the country names alphabetically
        const sortedCountryNames = countryNames.sort((a, b) =>
          a.localeCompare(b)
        );

        // Log the sorted country names
        setCountrname(sortedCountryNames);
      })
      .catch((error) => console.error("Error fetching country data:", error));
  };

  const validateNewUser = (
    fullname,
    email,
    password,
    cpassword,
    dateofbirth,
    contactnumber,
    nationality,
    employedstatus,
    applyingasacourseowner,
    aadharupload,
    imageupload,
    resumeupload
  ) => {
    const emailError = email.trim() == "";
    const passwordShouldcontail = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    passwordShouldcontail.test(password);
    const passwordError = password.trim() == "";
    const cpasswordError = cpassword.trim() == "";
    const fullnameError = fullname.trim() == "";
    const dateofbirthError = dateofbirth.trim() == "";
    const contactnumberError = contactnumber.trim() == "";

    const contactnumberLengthError = contactnumber.trim().length != "10";
    const dateofbirthLengthError = dateofbirth.trim().length != "10";

    const errorinaadhar = aadharupload == null;
    const errorInResume = resumeupload == null;
    const errorInImage = imageUpload == null;

    seterrorInAadharUpload(errorinaadhar);
    seterrorInResumeUpload(errorInResume);
    seterrorInphotoUpload(errorInImage);

    setErrorInregestration({
      email: emailError,
      password: passwordError,
      fullname: fullnameError,
      contactnumber: contactnumberError,
    });

    if (
      !dateofbirthLengthError &&
      !contactnumberLengthError &&
      !errorInregestration.email &&
      !errorInregestration.password &&
      !errorInregestration.password &&
      !errorInregestration.contactnumber &&
      !errorInregestration.cpassword &&
      !errorInAadharUpload &&
      !errorInResumeUpload &&
      !errorInphotoUpload
    ) {
      if (password == cpassword) {
        handleSignup(
          email,
          password,
          fullname,
          dateofbirth,
          contactnumber,
          nationality,
          employedstatus,
          applyingasacourseowner
        );
      } else {
        toast.error("Password is not matching", {
          position: "top-center",
          theme: "colored",
        });
      }
    } else {
      toast.error("Something went wrong", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  const handleSignup = async (
    email,
    password,
    fullname,
    dateofbirth,
    contactnumber,
    nationality,
    employedstatus,
    applyingasacourseowner
  ) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      registeruser(
        fullname,
        email,
        dateofbirth,
        contactnumber,
        nationality,
        employedstatus,
        applyingasacourseowner
      );
      toast.success(`Your account is created successfully.`, {
        position: "top-center",
        theme: "colored",
      });
    } catch (error) {
      toast.error(`email is already in use`, {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  const new_student_regestration_collection = collection(db, "new_student");

  const new_student_regestration = (newstudent) => {
    return addDoc(new_student_regestration_collection, newstudent);
  };

  const registeruser = async (
    fullname,
    email,
    dateofbirth,
    contactnumber,
    nationality,
    employedstatus,
    applyingasacourseowner
  ) => {
    uploadImage(email);
    const new_student = {
      fullname,
      email,
      dateofbirth,
      contactnumber,
      nationality,
      employedstatus,
      applyingasacourseowner,
    };

    try {
      await new_student_regestration(new_student);
      toast.success(`regestration Successful`, {
        position: "top-center",
        theme: "colored",
      });
      navigate("/");
    } catch (error) {}
  };

  const uploadImage = (email) => {
    if (imageUpload == null || aadharupload == null || resumeupload == null) {
      alert("Plese upload the file");
      return;
    }
    const imageRef = ref(
      storage,
      `docs/${email}/images/${imageUpload.name + v4()}`
    );

    const aadharRef = ref(
      storage,
      `docs/${email}/aadhar/${aadharupload.name + v4()}`
    );

    const resumeRef = ref(
      storage,
      `docs/${email}/resume/${resumeupload.name + v4()}`
    );
    uploadBytes(imageRef, imageUpload).then(() => {
      toast.success(`Photo uploaded`, {
        position: "top-center",
        theme: "colored",
      });
    });

    uploadBytes(resumeRef, resumeupload).then(() => {
      toast.success(`Resume Uploaded`, {
        position: "top-center",
        theme: "colored",
      });
    });

    uploadBytes(aadharRef, aadharupload).then(() => {
      toast.success(`aadhar uploaded`, {
        position: "top-center",
        theme: "colored",
      });
    });
  };
  return (
    <>
      <ProjectContext.Provider
        value={{
          margin,
          currentStep,
          isComplete,
          setCurrentStep,
          setIscomplete,
          setMargin,
          handlegoogleSignIn,
          onSubmit,
          errorLogin,
          setErrorLogin,
          credentials,
          setCredentials,
          onChange,
          country,
          registeruser,
          validateNewUser,
          imageUpload,
          setImageUpload,
          resumeupload,
          setresumeUpload,
          aadharupload,
          setAadharupload,
          countryname,
          errorInregestration,
          setErrorInregestration,
        }}
      >
        {props.children}
      </ProjectContext.Provider>
      <ToastContainer />
    </>
  );
}

export default Projectstate;
