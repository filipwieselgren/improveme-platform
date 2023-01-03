import logo from "../../assets/improveMeLogo.png";

const Navbar = () => {
  return (
    <nav className="home-navbar">
      <img src={logo} alt="logo" />
      <button className="btn-login txt-200">Log in</button>
    </nav>
  );
};

export default Navbar;
