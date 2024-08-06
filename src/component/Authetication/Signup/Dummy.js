// import React, { useEffect, useRef, useState } from "react";
// import registeruserImage from "../../images/registeruserImage.png";
// import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
// import TaskAltIcon from "@mui/icons-material/TaskAlt";
// import RegestrationForm from "./RegestrationForm";
// import PersonalInfo from "./PersonalInfo";
// function UserSignup({ stepConfig = [] }) {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isComplete, setIscomplete] = useState(false);

//   const [margin, setMargin] = useState({
//     marginLeft: 0,
//     marginRight: 0,
//   });
//   const stepRef = useRef([]);
//   useEffect(() => {
//     setMargin({
//       marginLeft: stepRef.current[0].offsetWidth / 2,
//       marginRight: stepRef.current[stepConfig.length - 1].offsetWidth / 2,
//     });
//   }, [stepRef]);

//   console.log(margin.marginLeft, margin.marginRight);
//   if (!stepConfig.length) {
//     return <></>;
//   }

//   const handleNext = () => {
//     setCurrentStep((prevStep) => {
//       if (prevStep === stepConfig.length) {
//         setIscomplete(true);
//         return prevStep;
//       } else {
//         return prevStep + 1;
//       }
//     });
//   };

//   const ActiveComponent = stepConfig[currentStep - 1]?.Component;

//   const calculateProgressBarwidth = () => {
//     return ((currentStep - 1) / (stepConfig.length - 1)) * 100;
//   };
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-2"></div>
//           <div className="col-lg-8">
//             <div className="stepper">
//               {stepConfig.map((value, index) => {
//                 return (
//                   <>
//                     <div
//                       ref={(el) => (stepRef.current[index] = el)}
//                       key={stepConfig.name}
//                       className={`step ${
//                         currentStep > index + 1 || isComplete ? "Complete" : ""
//                       } ${currentStep === index + 1 ? "active" : ""}`}
//                     >
//                       <div className="step-number">
//                         {" "}
//                         {currentStep > index + 1 || isComplete ? (
//                           <span>&#10003;</span>
//                         ) : (
//                           index + 1
//                         )}
//                       </div>
//                       <div className="step-name">{value.name}</div>
//                     </div>
//                   </>
//                 );
//               })}{" "}
//               <div
//                 className="progress-bar"
//                 style={{
//                   width: `calc(100% - ${
//                     margin.marginLeft + margin.marginRight
//                   })px`,
//                   marginLeft: margin.marginLeft,
//                   marginRight: margin.marginRight,
//                 }}
//               >
//                 <div
//                   className="progress"
//                   style={{ width: `${calculateProgressBarwidth()}%` }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <ActiveComponent />
//       {!isComplete && (
//         <button type="submit" className="btn" onClick={handleNext}>
//           {currentStep === stepConfig.length ? "Finissh" : `Next`}
//           {currentStep === stepConfig.length ? (
//             <TaskAltIcon />
//           ) : (
//             <KeyboardTabIcon />
//           )}
//         </button>
//       )}
//     </>
//   );
// }

// export default UserSignup;


// import React, { useState } from 'react'
// import registeruserImage from "../../images/registeruserImage.png";
// import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";

// function RegestrationForm() {
//   const [credentials, setCredentials] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//     cpassword: "",
//     dob:""
//   })

//   const {fullname, email, password, cpassword, dob} = credentials

//   const onChange = ((e) => {
//     console.log(e.target.name, e.target.value)
//     setCredentials({...credentials, [e.target.name]: e.target.value})
//   })

//   const handleClick = () => {
//     console.log("click")
//   }
//   return (
//       <>
 
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-2"></div>
//           <div className="col-lg-5">
//             <img src={registeruserImage} className="registeruserImage" alt="" />
//           </div>

//           <div className="col-lg-5">
//             <h1 className="mt-1">Sign up</h1>
//             <form>
//               <div class="mb-3">
//                 <label for="exampleInputEmail1" class="form-label">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   onChange={onChange}
//                   name="fullname"
//                   placeholder="Enter full name..."
//                   class="input-field-signup form-control"
//                   id="fullname"
//                   aria-describedby="emailHelp"
//                 />
//                 <hr className="horizontal_line" />
//               </div>
//               <div class="mb-3">
//                 <label for="exampleInputEmail1" class="form-label">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   onChange={onChange}

//                   placeholder="Enter your email"
//                   class="input-field-signup form-control"
//                   id="email"
//                   aria-describedby="emailHelp"
//                 />
//                 <hr className="horizontal_line" />
//               </div>

//               <div class="mb-3">
//                 <label for="exampleInputPassword1" class="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   class="form-control input-field-signup"
//                   name="password"
//                   onChange={onChange}
//                   placeholder="Enter passsword..."
//                   id="password"
//                 />
//                 <hr />
//               </div>

//               <div class="mb-3">
//                 <label for="exampleInputPassword1" class="form-label">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   onChange={onChange}
//                   class="form-control input-field-signup"
//                   name="cpassword"
//                   placeholder="Re-enter passsword..."
//                   id="cpassword"
//                 />
//                 <hr />
//               </div>

//               <div class="mb-3">
//                 <label for="exampleInputPassword1" class="form-label">
//                   Enter date of Birth
//                 </label>
//                 <input
//                   type="date"
//                   class="form-control input-field-signup"
//                   name="dob"
//                   onChange={onChange}
//                   id="dob"
//                 />
//                 <hr />
//               </div>

//               <div className="row">
//                 <div className="col-lg-6">
//                   <button type="submit" class="btn user-registartion-button check_out" onClick={(e) => {
//                     e.preventDefault()
//                     handleClick()
//                   }}>
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         </div>
//     </>
//   )
// }

// export default RegestrationForm
