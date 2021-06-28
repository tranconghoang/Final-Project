import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Authentication.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    //send email, pw to backend
    setTimeout(() => {
      const token =
        "skdalsdkaskdlask4lsakdlmasldlKLKLKlskdlaksmglaskfsldkaslkdlsakdlaskdlask3lsklsaklvkadlkglaskdlasglkqwjepoiqudzxmcnvsdmbgweps";
      // var localStorage: Storage, localstorage;
      localStorage.setItem("token", token);
    }, 100);
  };

  return (
    <div className="testcontainer">
      <div className="auth_box_container">
        <div>
          <div className="sendo_bl">
            <img alt="23" src="\sendo-bl.png"></img>
          </div>
        </div>
        <div className="auth_box">
          <form className="auth_form">
            <p className="auth_header">login</p>
            <label>
              <span>Enter your email</span>
              <input
                onChange={handleChangeEmail}
                type="email"
                placeholder="your email"
              ></input>
            </label>
            <label>
              <span>Enter your password</span>
              <input
                onChange={handleChangePassword}
                type="password"
                placeholder="your password"
              ></input>
            </label>
            <div className="auth_misc">
              <Link to="/index">New to the platform?</Link>
              <Link to="/index">Forgot your password?</Link>
            </div>
            <div className="auth_execute">
              <Button onClick={handleSubmit}>Login</Button>
              <Button type="reset">Reset</Button>
              <Button className="facebook"> Facebook </Button>
              <Button className="google"> Google</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
