import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
// import Homepage from "../../pages/loggedout/homepage/Homepage";

const Protected = () => {
  const isAuth = useAuth();
  const navigate = useNavigate();

  //   console.log("isAuth:", isAuth);

  //   return isAuth ? <Outlet /> : <Navigate to={"/"} />;
};

export default Protected;
