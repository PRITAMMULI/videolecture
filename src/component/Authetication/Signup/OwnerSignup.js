import React from 'react'

function OwnerSignup() {
  return (
    <>
       <div className="progressbar">
        <div className="progress" id="progress"></div>
        <div
          className="progress-step progress-step-active"
          data-title="Cart"
        ></div>
        <div className="progress-step" data-title="Checkout"></div>
        <div className="progress-step" data-title="Thank You"></div>
      </div>
    </>
  )
}

export default OwnerSignup
