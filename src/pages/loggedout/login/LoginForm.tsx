import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/ImproveMe.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const registerState = (userName: string, password: string) => {
    setUser({
      userName: userName,
      password: password,
    });
  };
  const [success, setSuccess] = useState<boolean>(false);

  const registerUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await fetch("http://localhost:8000/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify(user),
    });

    setSuccess(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 300);
  };
  return (
    <>
      <main className="main-form">
        <div className="form-wrapper">
          <h1 className="txt-300">
            Fill in the information to login
            <img
              src={logo}
              alt="improveMe face"
              className={success ? "improveme-face move" : "improveme-face"}
            />
          </h1>
          <form>
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              onChange={(e) => registerState(e.target.value, "")}
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              onChange={(e) => registerState(user.userName, e.target.value)}
            />
            <button type="submit" onClick={(e) => registerUser(e)}>
              Log in
            </button>
          </form>
          <p className="txt-200">
            Don't have an account? Create one{" "}
            <span
              className="create-account txt-400"
              onClick={() => navigate("/register")}
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
