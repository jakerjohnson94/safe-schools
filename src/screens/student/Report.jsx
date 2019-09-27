import React, { useState } from "react";
import ReportHeader from "../../components/ReportHeader.jsx";
import addIcon from "../../assets/icons/add.png";

function Report(props) {
  const { history, location } = props;
  const [selectedRadio, setSelectedRadio] = useState("student");
  const [inputValues, setInputValues] = useState([""]);
  const [errMsg, setErrMsg] = useState("");

  if (!location || !location.state) {
    return () => history.push("/");
  }

  function nextFn() {
    if (inputValues.join("") !== "")
      history.push({
        pathname: "/report/2",
        state: {
          studentId: location.state.studentId,
          involvedPosition: selectedRadio,
          involvedNames: inputValues.filter(x => x !== "")
        }
      });
    else setErrMsg("Please enter the name of the person involved");
  }

  function onChangeFn(event, i) {
    //create a copy of state value
    let newInput = inputValues;
    //Replace correct spot in array
    newInput.splice(i, 1, event.target.value);
    //Spread the copy to state
    setInputValues([...newInput]);
  }

  const RadioButtons = () => (
    <>
      <div className="radio-wrapper">
        <label htmlFor="student">
          <input
            type="radio"
            name="student"
            value="student"
            id="student"
            className="radio-btn"
            onChange={e => setSelectedRadio(e.target.value)}
            checked={selectedRadio === "student"}
          />
          Student
        </label>
      </div>

      <div className="radio-wrapper">
        <label htmlFor="staffFaculty">
          <input
            type="radio"
            name="staffFaculty"
            value="staffFaculty"
            id="staffFaculty"
            className="radio-btn"
            onChange={e => setSelectedRadio(e.target.value)}
            checked={selectedRadio === "staffFaculty"}
          />
          Staff or faculty member
        </label>
      </div>

      <div className="radio-wrapper">
        <label htmlFor="other">
          <input
            type="radio"
            name="other"
            value="other"
            id="other"
            className="radio-btn"
            onChange={e => setSelectedRadio(e.target.value)}
            checked={selectedRadio === "other"}
          />
          Someone Else
        </label>
      </div>
    </>
  );

  return (
    <div className="page-wrapper">
      <button className="back-btn" onClick={() => history.goBack()}>
        Back
      </button>
      <ReportHeader />
      <p className="err-msg">{errMsg}</p>
      <div className="report-form-wrapper">
        <p className="report-form-title">I'd like to report a:</p>
        <RadioButtons />
        <div className="report-input-wrapper">
          <p className="report-input-title">Who is involved?</p>
          {inputValues.map((_, i) => (
            <div key={i} className="person-input-wrapper">
              <input
                value={inputValues[i]}
                onChange={event => onChangeFn(event, i)}
              />
            </div>
          ))}

          <img
            src={addIcon}
            alt=""
            onClick={() => setInputValues([...inputValues, ""])}
          />

          <span className="add-person-text">add person</span>
        </div>
        <div className="btn-wrapper">
          <div className="btn" onClick={nextFn}>
            Next
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
