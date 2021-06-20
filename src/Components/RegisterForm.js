import { Link } from "react-router-dom"
import "./Authentication.css"

export default function RegisterForm() {
    return (
        <div className="auth_box_container">
      <div>
          <div className="sendo_bl">
              <img  alt="23" src="\sendo-bl.png"></img>
          </div>
      </div>
        <div className="auth_box">
            <form className="auth_form">
                <p className="auth_header">Register</p>
                <label>
                    <span>Enter your email</span>
                    <input type="text" placeholder="your email"></input>
                </label>
                <label>
                    <span> Enter your password</span>
                    <input type="text" placeholder="your password"></input>
                </label>
                <label>
                    <span>    Re-enter your password</span>
                    <input type="text" placeholder="Re-enter your password"></input>
                </label>
                <div className="auth_misc">
                    <Link to="/index">Already a user?</Link>
                    <Link to="/index">Forgot your password?</Link>
                </div>
                <div className="auth_execute">
                    <button>Register</button>
                    <button className="facebook">Register with Facebook  </button>
                    <button className="Google">Register with Google </button>
                </div>
            </form>
        </div>
        </div>
    )
}