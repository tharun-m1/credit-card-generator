import React, { useState } from "react";
import "./form.css";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
function Form() {
  const [cardHolderName, setCardHolderName] = useState("");
  const [validName, setValidName] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [validCard, setValidCard] = useState(true);
  const [month, setMonth] = useState("");
  const [validMonth, setValidMonth] = useState(true);
  const [year, setYear] = useState("");
  const [validYear, setValidYear] = useState(true);
  const [cvc, setCvc] = useState("");
  const [validCvc, setValidCvc] = useState(true);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cardHolderName.length === 0 || cardNumber.length === 0) {
      setError(true);
    }
    if (month.length === 0) {
      setValidMonth(false);
    }
    if (year.length === 0) {
      setValidYear(false);
    }
    if (cvc.length === 0 || cvc.length < 3) {
      setValidCvc(false);
    }
    if (cardNumber.length === 0) {
      setValidCard(false);
    } else {
      if (cardNumber.length < 16 && cardNumber.length > 0) {
        setValidCard(false);
      }
    }
  };
  const handleMonthChange = (e) => {
    setValidMonth(true); // every time we assume Month is valid.
    // console.log("change executed");
    // checks neccessary conditions

    // used this strMonth bcz setstate is async so updated month is immediately not availabel for using.
    let strMonth = e.target.value;
    // console.log(strMonth);
    setMonth(e.target.value);
    if (isNaN(strMonth)) {
      setValidMonth(false);
    } else {
      const numMonth = parseInt(strMonth, 10);
      if (numMonth > 12 || numMonth < 1) {
        setValidMonth(false);
      }
    }
  };
  const handleYearChange = (e) => {
    setValidYear(true);

    setYear(e.target.value);
    let strYear = e.target.value;
    if (isNaN(strYear)) {
      setValidYear(false);
    }
  };
  const handleCvcChange = (e) => {
    setValidCvc(true);
    setCvc(e.target.value);
    let strCvc = e.target.value;
    if (isNaN(strCvc)) {
      setValidCvc(false);
    }
  };
  const handleCardNumberChange = (e) => {
    setValidCard(true);
    setCardNumber(e.target.value);
    let strCard = e.target.value;
    if (strCard[strCard.length - 1] == " ") {
      e.target.value = strCard.slice(0, strCard.length - 1);
      setCardNumber(e.target.value);
    }

    if (isNaN(strCard)) {
      setValidCard(false);
    }
  };
  const handleNameChange = (e) => {
    setValidName(true);
    let name = e.target.value;
    // console.log(e.target.value);
    setCardHolderName(e.target.value);
    if (
      name[name.length - 1] == " " &&
      name[name.length - 2] == " " &&
      name.length
    ) {
      e.target.value = name.slice(0, name.length - 1);
      setCardHolderName(e.target.value);
    }

    const char = name[name.length - 1];

    if (
      !(
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        char === " "
      )
    ) {
      setValidName(false);
    }
  };
  return (
    <div>
      <div className="wrapper">
        <div className="left-gradient"></div>
        <div className="right-container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-elements">
                <div style={{ marginBottom: "8px" }}>CARD HOLDER'S NAME</div>

                <div>
                  <input
                    onChange={handleNameChange}
                    placeholder="e.g. Jane Appleseed"
                    className="shape"
                    type={"text"}
                  ></input>
                  {error && !cardHolderName ? (
                    <label>Cardholder name required</label>
                  ) : (
                    ""
                  )}
                  {!validName && cardHolderName ? (
                    <label>Invalid Name</label>
                  ) : (
                    ""
                  )}
                </div>
                <div style={{ marginTop: "20px", marginBottom: "8px" }}>
                  CARD NUMBER
                </div>
                <div>
                  <input
                    maxLength={16}
                    onChange={handleCardNumberChange}
                    placeholder="e.g. 1234 5678 9123 0000"
                    className="shape"
                  ></input>
                </div>
                {error & !cardNumber ? <label>Card number required</label> : ""}
                {!validCard && cardNumber ? (
                  <label>Invalid Card Number</label>
                ) : (
                  ""
                )}
                <div style={{ marginTop: "20px" }} className="details-caption">
                  <span>EXP. DATE (MM/YY)</span>

                  <span>CVC</span>
                </div>
                <div style={{ marginTop: "20px" }} className="input-container">
                  <div className="date-container">
                    <input
                      maxLength={2}
                      onChange={handleMonthChange}
                      placeholder="MM"
                      name="month"
                    />
                    <input
                      maxLength={2}
                      onChange={handleYearChange}
                      placeholder="YY"
                      name="year"
                    />
                  </div>

                  <div className="cvc-container">
                    <input
                      maxLength={3}
                      onChange={handleCvcChange}
                      placeholder="e.g. 123"
                      name="cvc"
                    />
                    {!validCvc ? <label>Invalid CVC</label> : ""}
                  </div>
                </div>
                <div className="errors">
                  {!validMonth ? (
                    <label>Invalid Month</label>
                  ) : (
                    <label style={{ visibility: "hidden" }}>
                      Invalid Month
                    </label>
                  )}
                  {!validYear ? <label>Invalid Year</label> : ""}
                </div>

                <div className="button-container">
                  <button type="submit">Confirm</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
