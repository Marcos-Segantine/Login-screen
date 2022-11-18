import { useState } from "react";

import "./assets/css/login.css";

import { emailPassword } from "./loginEmailPassword";

export const Login = ({ forgotPassword, setForgotPassword, loginScreen, setLoginScreen }: any) => {
  const [email, setEmai] = useState("");
  const [password, setPassword] = useState("");
  const [loginValid, setLoginValid] = useState(false);
  const [messageLoginValid, setMessageLoginValid] = useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    emailPassword.forEach((value) => {
      if (value.email === email.trim() && value.password === password.trim()) {
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
          type="password"
          placeholder="*"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <span onClick={() => setForgotPassword(!forgotPassword)}>
            Forgot password?
          </span>
          <span onClick={() => setLoginScreen(!loginScreen)}>Cadastrar</span>
        </div>
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};
