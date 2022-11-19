import React, { SetStateAction } from "react";

import "./assets/css/ForgotPassword.css";

import { emailPassword } from "./loginEmailPassword";

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

      {emailPassword.map((value, index) => {
        return (
          <div className="content_email_pasword" key={index}>
            <p>
              <span>Email:</span> &quot;{value.email}&quot;
            </p>
            <p>
              <span>Password:</span> &quot;{value.password}&quot;
            </p>
          </div>
        );
      })}
    </div>
  );
};
