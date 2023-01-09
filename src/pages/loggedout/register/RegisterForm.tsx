import { useNavigate } from "react-router-dom";
import logo from "../../../assets/ImproveMe.png";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="main-form">
        <div className="form-wrapper">
          <h1 className="txt-300">
            Fill in the information to create an account
            <img src={logo} alt="improveMe face" className="improveme-face" />
          </h1>
          <form>
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input id="username" type="text" required />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input id="password" type="password" required />
            <button type="submit" onClick={() => navigate("/dashboard")}>
              Create account
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginForm;
