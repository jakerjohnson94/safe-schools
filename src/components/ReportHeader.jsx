import React from "react";
import pikeImg from "../assets/images/pike-header.jpg";
function ReportHeader() {
  return (
    <>
      <div className="img-top-wrapper">
        <img src={pikeImg} alt="Pike High School" className="header-img" />
      </div>
      <h1 className="header-title">Make a Report</h1>
      <p className="header-subtitle">Remember, all reports are anonymous.</p>
    </>
  );
}

export default ReportHeader;
