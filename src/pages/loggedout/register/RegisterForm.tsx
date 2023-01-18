import { useState, useRef, useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FALSE } from "sass";
import logo from "../../../assets/ImproveMe.png";
import logoConfirm from "../../../assets/ImproveMe.png";

//Validates the userName
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

// Validates the password
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = () => {
  const navigate = useNavigate();
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [userName, setUserName] = useState("");

  const [validName, setValidName] = useState(false);
  const [userFocus, setUserNameFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [userExist, setUserExist] = useState(false);

  useEffect(() => {
    if (userRef.current != null) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(userName);

    setValidName(result);
  }, [userName]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);

    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [userName, pwd, matchPwd]);

  // const registerState = (name: string, userName: string, password: string) => {
  //   setUserName({
  //     fullName: name,
  //     userName: userName,
  //     password: password,
  //   });
  // };

  const setState = (name: string, pass1: string, pass2: string) => {
    setUserExist(false);
    setUserName(name);
    setPwd(pass1);
    setMatchPwd(pass2);
  };

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const v1 = USER_REGEX.test(userName);
    // const v2 = PWD_REGEX.test(pwd);
    // if (!v1 || v2) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }

    await fetch("http://localhost:8000/api/v1/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({ userName, pwd }),
    }).then((response) => {
      if (response.status === 409) {
        setUserExist(true);
        return;
      } else {
        setUserExist(false);
        setSuccess(true);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    });
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
              <p
                ref={errRef}
                className={errMsg ? "errMsg" : "offScreen"}
                aria-live="assertive"
              ></p>
              <form onSubmit={(e) => registerUser(e)}>
                {/* <label htmlFor="username" className="form-label">
                  Full name
                </label>
                <input id="fullname" type="text" required /> */}
                <label htmlFor="username" className="form-label">
                  Username{" "}
                  <span className={validName ? "valid" : "hide"}>
                    <AiOutlineCheckCircle />
                  </span>{" "}
                  <span className={validName || !userName ? "hide" : "invalid"}>
                    <FaRegTimesCircle />
                  </span>
                </label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setState(e.target.value, pwd, matchPwd)}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserNameFocus(true)}
                  onBlur={() => setUserNameFocus(false)}
                  className={
                    userExist ? "username-input user-exist" : "username-input"
                  }
                />
                {userExist ? (
                  <p>Username is already taken. Try another one.</p>
                ) : (
                  <></>
                )}
                <p
                  id="uidnote"
                  className={
                    userFocus && userName && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <AiOutlineInfoCircle /> 4 to 24 characters. <br />
                  Must begin with a letter. <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
                <label htmlFor="password" className="form-label">
                  Password
                  <span className={validPwd ? "valid" : "hide"}>
                    <AiOutlineCheckCircle />
                  </span>{" "}
                  <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FaRegTimesCircle />
                  </span>
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setState(userName, e.target.value, matchPwd)}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  <AiOutlineInfoCircle /> 8 to 24 characters. <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character. <br />
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation-mark">!</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </p>

                <label htmlFor="confirm_pwd" className="form-label">
                  Confirm Password
                  <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <AiOutlineCheckCircle />
                  </span>
                  <span
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  >
                    <FaRegTimesCircle />
                  </span>
                </label>
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setState(userName, pwd, e.target.value)}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <AiOutlineInfoCircle /> Must match the first password input
                  field.
                </p>
                <button
                  disabled={
                    !validName || !validPwd || !validMatch ? true : false
                  }
                  className={
                    !validName || !validPwd || !validMatch
                      ? "disabled-btn"
                      : "active-btn"
                  }
                >
                  Create account
                </button>
              </form>
            </>
          ) : (
            <>
              <h3 className="success-header">Your account has been created</h3>
              <p className="success-ptag">
                You will be redirected to the login page
              </p>
              <img src={logoConfirm} alt="Logo" className="success-img" />
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default RegisterForm;
