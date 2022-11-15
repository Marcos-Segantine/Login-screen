import { useState } from "react";

import "./assets/main.css";
import safetyImg from './assets/safety-img.png'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="container__content">
        <div className="container__content__login">
          <h1>Bem vindo!</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="*" /> 
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remenber</label>
             <a href="">Forgot password?</a>
            </div>
            <input type="submit" />
          </form>
        </div>

        <div className="container__content__login_img">
            <h2>navegue com segurança..</h2>
            <img src={safetyImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
