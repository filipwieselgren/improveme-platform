import { useNavigate } from "react-router-dom";
import logo from "../../assets/ImproveMe.png";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <div className="form-wrapper">
          <h1 className="txt-300">
            Fill in the information to login
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
            <button type="submit">Log in</button>
          </form>
          <p className="txt-200">
            Don't have an account? Create one{" "}
            <span
              className="create-account txt-400"
              onClick={() => navigate("/create-account")}
            >
              here
            </span>
          </p>
        </div>
      </main>
    </>
  );
};

export default LoginForm;
