import React, { useState } from "react";

import "./assets/css/main.css";
import safetyImg from "./assets/safety-img.png";

import { ForgotPassword } from "./ForgotPassword";
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [loginScreen, setLoginScreen] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <div className="container">
      <div className="container__content">
        {!loginScreen ? (
          <Login
            forgotPassword={forgotPassword}
            setForgotPassword={setForgotPassword}
            loginScreen={loginScreen}
            setLoginScreen={setLoginScreen}
          />
        ) : (
          <Register loginScreen={loginScreen} setLoginScreen={setLoginScreen} />
        )}

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
      <p className="final_password">
        This project ONLY simulate a login screen,{" "}
        <span>
          click on "Forgot password?" to see the valid email and password.
        </span>
      </p>
    </div>
  );
}

export default App;
