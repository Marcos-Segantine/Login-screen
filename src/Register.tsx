import "./assets/css/register.css";

export const Register = ({loginScreen, setLoginScreen}: any) => {
  return (
    <div className="container__content__register">
      <h1>Register</h1>
      <form action="">
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Username" />
        <label>Password</label>
        <input type="password" placeholder="*" />
        <label>Comfirm password</label>
        <input type="password" placeholder="*" />
        <input className="inputSubmit" type="submit" />
      </form>
      <span className="login_screen" onClick={() => setLoginScreen(!loginScreen)}>Login</span>
    </div>
  );
};
