import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>HT Social!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span> Don't you have an account?</span>
          <Link to="/login">
          <button>Login</button>

          </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
                <input type='text' placeholder='UserName'></input>
                <input type='email' placeholder='Email'></input>
                
                <input type='password' placeholder='Password'></input>
                <input type='text' placeholder='Name'></input>
                <button>Register</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
