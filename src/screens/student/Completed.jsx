import React, { useState } from "react";

export default function Completed(props) {
  const { history, location } = props;
  if (!location || !location.state) return () => history.push("/");

  const {
    involvedPosition,
    involvedNames,
    studentId,
    description,
    isDanger
  } = location.state;

  return <div>{JSON.stringify(location.state)}</div>;
}
