import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./screens/student/Login.jsx";
import Report from "./screens/student/Report.jsx";
import Report2 from "./screens/student/Report2.jsx";
import Completed from "./screens/student/Completed.jsx";
export default function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/report/1" component={Report} />
      <Route path="/report/2" component={Report2} />
      <Route path="/report/complete" component={Completed} />
    </Router>
  );
}
