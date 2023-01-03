import { useNavigate } from "react-router-dom";
import logo from "../../../assets/improveMeLogo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="home-navbar">
      <img src={logo} alt="logo" className="nav-logo" />
      <button className="btn-login txt-200" onClick={() => navigate("/login")}>
        Log in
      </button>
    </nav>
  );
};

export default Navbar;
