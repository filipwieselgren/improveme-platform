import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/ImproveMe.png";
import logoConfirm from "../../../assets/ImproveMe.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  const registerState = (name: string, userName: string, password: string) => {
    setUser({
      fullName: name,
      userName: userName,
      password: password,
    });
  };
  const [success, setSuccess] = useState<boolean>(false);
  const registerUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await fetch("http://localhost:8000/api/v1/register", {
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
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      <main className="main-form">
        <div className="form-wrapper">
          {!success ? (
            <>
              <h1 className="txt-300">
                Fill in the information to create an account
                <img
                  src={logo}
                  alt="improveMe face"
                  className="improveme-face"
                />
              </h1>
              <form>
                <label htmlFor="username" className="form-label">
                  Full name
                </label>
                <input
                  id="fullname"
                  type="text"
                  required
                  onChange={(e) => registerState(e.target.value, "", "")}
                />
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  required
                  onChange={(e) =>
                    registerState(user.fullName, e.target.value, "")
                  }
                />
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  onChange={(e) =>
                    registerState(user.fullName, user.userName, e.target.value)
                  }
                />
                <button type="submit" onClick={(e) => registerUser(e)}>
                  Create account
                </button>
              </form>
            </>
          ) : (
            <>
              <h3 className="success-header">Your account has been created</h3>
              <p className="success-ptag">
                You will be directed to the login page
              </p>
              <img src={logoConfirm} alt="Logo" className="success-img" />
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default LoginForm;
