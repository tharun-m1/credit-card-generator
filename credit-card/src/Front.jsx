import React from "react";
import "./front.css";
function Front({ formdata }) {
  // console.log(props.mn);
  const card = formdata ? formdata.cno : "0000000000000000";

  const first = card.substring(0, 4);
  const second = card.substring(4, 8);
  const third = card.substring(8, 12);
  const fourth = card.substring(12, 16);

  return (
    <>
      <div className="card">
        <div className="white-circle"></div>
        <div className="hollow"></div>

        <div className="card-number">
          <div>{first}</div>
          <div>{second}</div>
          <div>{third}</div>
          <div>{fourth}</div>
        </div>
        <div className="details-container">
          <div className="name-container">
            {formdata ? formdata.name : "Jane Appleseed"}
          </div>
          <div className="expiry">
            {formdata ? formdata.mn : "00"}/{formdata ? formdata.yr : "00"}
          </div>
        </div>
      </div>
    </>
  );
}
// Front.defaultProps = {
//   name: "Jane Appleseed",
//   mn: "00",
//   yr: "00",
//   cno: "0000000000000000",
// };

export default Front;
