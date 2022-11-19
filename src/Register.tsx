import React, { useEffect, useState } from "react";
import "./assets/css/register.css";

import { emailPassword } from "./loginEmailPassword";

export const Register = ({ loginScreen, setLoginScreen }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [failRegister, setFailRegister] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (
      email !== undefined &&
      email !== null &&
      password !== undefined &&
      password !== null &&
      password === comfirmPassword
    ) {
      emailPassword.push({
        email,
        password,
      });

      setTimeout(() => {
        setLoginScreen(!loginScreen);
      }, 2000);
    } else {
      setFailRegister(true);

      setTimeout(() => {
        setFailRegister(false);
      }, 1500);
    }
  };

  return (
    <div className="container__content__register">
      <h1>Registrar</h1>
      <form action="">
        <label htmlFor="">Usúario</label>
        <input
          type="text"
          placeholder="Email/Usuário"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Senha</label>
        <input
          type="password"
          placeholder="*"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Comfirmar senha</label>
        <input
          type="password"
          placeholder="*"
          onChange={(e) => setComfirmPassword(e.target.value)}
        />
        <input className="inputSubmit" type="submit" onClick={handleSubmit} />
      </form>
      <span
        className="login_screen"
        onClick={() => setLoginScreen(!loginScreen)}
      >
        Login
      </span>

      {failRegister ? <MessageFail /> : ""}
    </div>
  );
};

const MessageFail = () => {
  return (
    <div className="message_fail_register">
      <p>Dados invalidos!!</p>
      <p>Tente novamente</p>
    </div>
  );
};
