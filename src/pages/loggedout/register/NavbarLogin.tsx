import logo from "../../../assets/improveMeLogo.png";
import { useNavigate } from "react-router-dom";

const NavbarLogin = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar-login">
      <img
        src={logo}
        alt="logo"
        className="nav-logo"
        onClick={() => navigate("/")}
      />
    </nav>
  );
};

export default NavbarLogin;
