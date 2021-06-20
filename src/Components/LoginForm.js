import { Link } from "react-router-dom";
import "./Authentication.css";

export default function LoginForm() {
  return (
    <div className="auth_box_container">
      <div>
          <div className="sendo_bl">
              <img  alt="23" src="\sendo-bl.png"></img>
          </div>
      </div>
      <div className="auth_box">
        <form className="auth_form">
          <p className="auth_header">login</p>
          <label>
            <span>Enter your email</span>
            <input type="text" placeholder="your email"></input>
          </label>
          <label>
            <span>Enter your password</span>
            <input type="text" placeholder="your password"></input>
          </label>
          <div className="auth_misc">
            <Link to="/index">New to the platform?</Link>
            <Link to="/index">Forgot your password?</Link>
          </div>
          <div className="auth_execute">
            <button>Login</button>
            <button className="facebook">Login with Facebook</button>
            <button className="google">Login with Google</button>
          </div>
        </form>
      </div>
    </div>
  );
}
