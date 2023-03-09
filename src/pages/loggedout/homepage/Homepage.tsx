import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from ".";
import Footer from "./components/Footer";
import Navbar from "./Navbar";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");

    tokenLocal ? navigate("/dashboard") : <></>;
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
