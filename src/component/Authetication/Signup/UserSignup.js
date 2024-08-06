import React, { useContext, useEffect, useRef } from "react";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ProjectContext from "../../context/ProjectContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function UserSignup({ stepConfig = [] }) {
   const context = useContext(ProjectContext);
  const {
    margin,
    currentStep,
    isComplete,
    setCurrentStep,
    setIscomplete,
    setMargin,
  } = context;
  const stepRef = useRef([]);

  useEffect(() => {
    setMargin({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepConfig.length - 1].offsetWidth / 2,
    });
  }, [stepRef]);

  if (!stepConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      console.log(prevStep)
      console.log(stepConfig)
      console.log(stepConfig.length)
      if (prevStep === stepConfig.length) {
        setIscomplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => {
      if (prevStep > 1) {
        return prevStep - 1;
      } else {
        return prevStep;
      }
    });
  };

  const ActiveComponent = stepConfig[currentStep - 1]?.Component;

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepConfig.length - 1)) * 100;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="stepper">
              {stepConfig.map((value, index) => {
                return (
                  <div
                    ref={(el) => (stepRef.current[index] = el)}
                    key={value.name}
                    className={`step ${
                      currentStep > index + 1 || isComplete ? "Complete" : ""
                    } ${currentStep === index + 1 ? "active" : ""}`}
                  >
                    <div className="step-number">
                      {currentStep > index + 1 || isComplete ? (
                        <span>&#10003;</span>
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="step-name">{value.name}</div>
                  </div>
                );
              })}
              <div
                className="progress-bar"
                style={{
                  width: `calc(100% - ${
                    margin.marginLeft + margin.marginRight
                  }px)`,
                  marginLeft: margin.marginLeft,
                  marginRight: margin.marginRight,
                }}
              >
                <div
                  className="progress"
                  style={{ width: `${calculateProgressBarWidth()}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ActiveComponent />
      <div className="navigation_buttons">
        {!isComplete && (
          <>
            {currentStep > 1 && (
              <button
                type="button"
                className="btn btn-outline-warning"
                onClick={handlePrevious}
              >
                <ArrowBackIcon /> Previous
              </button>
            )}
            <div className="go_next_btn">
              <button
                type="submit"
                className="btn btn-outline-primary"
                onClick={handleNext}
              >
                {currentStep === stepConfig.length ? "Finish" : `Next`}
                {currentStep === stepConfig.length ? (
                  <TaskAltIcon />
                ) : (
                  <KeyboardTabIcon />
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default UserSignup;
