import React, { useState } from "react";
import logo from "../../assets/images/pike_main.png";

function Login(props) {
  const [studentId, setStudentId] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const history = props.history;

  function isValidStudentId(studentId) {
    const id = studentId.trim();
    return id && id !== "";
  }
  function loginFn() {
    if (isValidStudentId(studentId))
      history.push({
        pathname: "/report/1",
        state: { studentId: studentId }
      });
    else
      setErrMsg(
        "Invalid Student Number. Please check the number and try again. "
      );
  }
  return (
    <div className="page-wrapper">
      <div className="img-wrapper">
        <img src={logo} alt="Pike High School" />
      </div>
      <h3 className="page-subtitle login-subtitle">
        Safe schools. Safe communities.
      </h3>
      <p className="err-msg">{errMsg}</p>
      <div className="input-wrapper">
        <p className="input-title">Student Number</p>
        <input
          className="input-box student-num-input"
          type="text"
          value={studentId}
          onChange={e => {
            setStudentId(e.target.value);
          }}
        />
      </div>
      <button className="btn login-btn" onClick={loginFn}>
        Login
      </button>
    </div>
  );
}

export default Login;
