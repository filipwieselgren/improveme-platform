import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LoggedinMain from "./components/pages/LoggedinMain";
import Protected from "./components/pages/Protected";
import FeatureRequests from "./pages/loggedin/featurerequests/FeatureRequests";
import Homepage from "./pages/loggedout/homepage/Homepage";
import Login from "./pages/loggedout/login/Login";
import Register from "./pages/loggedout/register/Register";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* <Route element={<Protected />}> */}
        <Route path="/dashboard" element={<LoggedinMain />}></Route>
        <Route path="/feature-requests" element={<LoggedinMain />}></Route>
        <Route path="/general-improvements" element={<LoggedinMain />}></Route>
        <Route path="/bug-reports" element={<LoggedinMain />}></Route>
        {/* </Route> */}

        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
