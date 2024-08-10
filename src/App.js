import Loginuser from "./component/Authetication/Loginuser";
import Ownerlogin from "./component/Authetication/Ownerlogin";
import PersonalInfo from "./component/Authetication/Signup/PersonalInfo";
import Preview from "./component/Authetication/Signup/Preview";
import RegestrationForm from "./component/Authetication/Signup/RegestrationForm";
import UserSignup from "./component/Authetication/Signup/UserSignup";
import AddaContent from "./component/ContentSection/AddaContent";
import Projectstate from "./component/context/Projectstate";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const check_out_step = [
    {
      name: "Regestration",
      Component: () => <RegestrationForm />,
    },
    {
      name: "Personal Information",
      Component: () => <PersonalInfo />,
    },
    {
      name: "Preview",
      Component: () => <Preview />,
    },
  ];
  return (
    <>
      <Router>
        <Projectstate>
          <Routes>
            <Route exact path="/" element={<AddaContent />} />
            {/* <Route exact path="/" element={<Loginuser />} /> */}
            <Route
              exact
              path="/usersignup"
              element={<UserSignup stepConfig={check_out_step} />}
            />
            <Route exact path="/ownerlogin" element={<Ownerlogin />} />
          </Routes>
        </Projectstate>
      </Router>{" "}
    </>
  );
}

export default App;
