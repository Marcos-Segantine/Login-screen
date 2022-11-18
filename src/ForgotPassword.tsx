import React, { SetStateAction } from "react";
import "./assets/css/ForgotPassword.css";

interface IState {
  forgotPassword: boolean;
  setForgotPassword: React.Dispatch<SetStateAction<boolean>>;
}

export const ForgotPassword = ({
  forgotPassword,
  setForgotPassword,
}: IState) => {
  return (
    <div className="fogot_password--container">
      <span
        className="close"
        onClick={() => setForgotPassword(!forgotPassword)}
      >
        X
      </span>
      <p>
        <span>Email:</span> &quot;email@teste.com&quot;
      </p>
      <p>
        <span>Password:</span> &quot;123456&quot;
      </p>
    </div>
  );
};
