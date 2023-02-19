import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "..";
import Footer from "./Footer";

import Navbar from "./Navbar";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");

    tokenLocal ? navigate("/dashboard") : <></>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default Homepage;
