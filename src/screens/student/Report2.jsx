import React, { useState } from "react";
import ReportHeader from "../../components/ReportHeader.jsx";

function Report2(props) {
  const { history, location } = props;
  const [errMsg, setErrMsg] = useState("");
  const [description, setDescription] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("notSure");
  const [checkbox, setCheckbox] = useState(false);

  if (!location || !location.state) {
    return () => history.push("/");
  }
  const { involvedPosition, involvedNames, studentId } = location.state;

  function reportFn() {
    if (!checkbox && !description)
      setErrMsg("Please fill out all fields below.");
    else if (!checkbox) setErrMsg("Please check the box below.");
    else if (!description)
      setErrMsg("Please fill out the description of events");
    else
      history.push({
        pathname: "/report/complete",
        state: {
          studentId,
          involvedPosition,
          involvedNames,
          description,
          isDanger: selectedRadio
        }
      });
  }
  const RadioButtons = () => (
    <>
      <div className="radio-wrapper">
        <label htmlFor="yes">
          <input
            type="radio"
            name="yes"
            value="yes"
            id="yes"
            className="radio-btn"
            onChange={e => setSelectedRadio(e.target.value)}
            checked={selectedRadio === "yes"}
          />
          Yes
        </label>
      </div>

      <div className="radio-wrapper">
        <label htmlFor="no">
          <input
            type="radio"
            name="no"
            value="no"
            id="no"
            className="radio-btn"
            onChange={e => setSelectedRadio(e.target.value)}
            checked={selectedRadio === "no"}
          />
          No
        </label>
      </div>

      <div className="radio-wrapper">
        <label htmlFor="notSure">
          <input
            type="radio"
            name="notSure"
            value="notSure"
            id="notSure"
            className="radio-btn"
            onChange={e => setSelectedRadio(e.target.value)}
            checked={selectedRadio === "notSure"}
          />
          I'm not sure
        </label>
      </div>
    </>
  );
  return (
    <div className="page-wrapper">
      <ReportHeader />
      <p className="err-msg">{errMsg}</p>
      <div className="report-form-wrapper">
        <p className="report-form-title">Describe what's goin on</p>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="description-input"
        />
        <RadioButtons />
      </div>
      <div className="understand-wrapper">
        <input
          type="checkbox"
          value={checkbox}
          checked={checkbox}
          onChange={() => (checkbox ? setCheckbox(false) : setCheckbox(true))}
          className="understand-input"
        />
        <p className="understand-title">
          I understand thatintentionally false reporting is unethical and a
          crime.
        </p>
      </div>
      <div className="btn-wrapper">
        <button className="btn" onClick={reportFn}>
          Report
        </button>
      </div>
    </div>
  );
}

export default Report2;
