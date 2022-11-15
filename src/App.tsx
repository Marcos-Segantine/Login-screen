import React, { useState } from "react";

import "./assets/main.css";
import safetyImg from "./assets/safety-img.png";

import { emailPassword } from "./loginEmailPassword";

import { ForgotPassword } from "./ForgotPassword";

interface ILoginData {
  email: string;
  password: string;
}

function App() {
  const [email, setEmai] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [loginValid, setLoginValid] = useState(false);
  const [messageLoginValid, setMessageLoginValid] = useState("");

  const handleSubmit = (e: React.TouchEvent) => {
    e.preventDefault();
    emailPassword.forEach((value) => {
      if (value.email === email && value.password === password) {
        setMessageLoginValid("Email e senha corretos!");
        setLoginValid(true);
        return;
      } else {
        setMessageLoginValid("Email e/ou senha invalidos!");
        setLoginValid(false);
      }
    });
  };

  return (
    <div className="container">
      <div className="container__content">
        <div className="container__content__login">
          <h1>Bem vindo!</h1>
          <form action="">
            <p
              className={
                loginValid ? "valid_login_message" : "invalid_login_message"
              }
            >
              {messageLoginValid}
            </p>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setEmai(e.target.value)}
            />
            <input
              type="text"
              placeholder="*"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remenber</label>
              <span onClick={() => setForgotPassword(!forgotPassword)}>
                Forgot password?
              </span>
            </div>
            <input type="submit" onClick={handleSubmit} />
          </form>
        </div>

        <div className="container__content__login_img">
          <h2>Navegue com segurança..</h2>
          <img src={safetyImg} alt="" />
        </div>
      </div>

      {forgotPassword ? (
        <ForgotPassword
          forgotPassword={forgotPassword}
          setForgotPassword={setForgotPassword}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
