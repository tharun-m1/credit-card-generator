import React from "react";
import "./back.css";
function Back({ formdata }) {
  return (
    <>
      <div className="card-back">
        <div className="code"></div>
        <div className="cvv-container">
          <div>{formdata ? formdata.cvv : "000"}</div>
        </div>
        <div className="design">
          <div className="row1">
            <div className="fifty"></div>
            <div className="twenty"></div>
            <div className="twenty"></div>
            <div className="ten"></div>
          </div>
          <div className="row2">
            <div className="twenty"></div>
            <div className="fourty"></div>
            <div className="thirty"></div>
            <div className="ten"></div>
          </div>
          <div className="row3">
            <div className="fifty"></div>
            <div className="twenty"></div>
            <div className="twenty"></div>
            <div className="ten"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Back;
