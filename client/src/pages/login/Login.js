import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

function Login() {
  const {login}=useContext(AuthContext)

  const handleLogin=()=>{
    login();
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello Word!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span> Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>

          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="UserName"></input>
            <input type="password" placeholder="Password"></input>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
