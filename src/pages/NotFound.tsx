import { useNavigate } from "react-router-dom";
import logo from "../assets/improveMeLogo.png";
import face from "../assets/ImproveMe.png";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  }, []);
  return (
    <>
      <nav className="navbar-login">
        <img
          src={logo}
          alt="logo"
          className="nav-logo"
          onClick={() => navigate("/")}
        />
      </nav>
      <div className="main">
        <div className="main-wrapper-notfound">
          <h1 className="txt-200 main-h1">Something went wrong ...</h1>
          <img src={face} alt="logo" className="notfound-logo" />
          <p>You will be redirected to your last page</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
