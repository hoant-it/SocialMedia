import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

function Login() {
  const {login}=useContext(AuthContext)

  const[inputs,setInputs]=useState({
    username:"",
    password:"",
  })

  const[status,setStatus]=useState(null)

  const navigate= useNavigate()

  const handleChange=(e)=>{
setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleLogin=async (e)  =>{
    e.preventDefault();
    try {
      await  login(inputs);
      navigate('/')
    } catch (error) {
      setStatus(error.response.data)
    }
   
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
            <input type="text" placeholder="UserName" name="username" onChange={handleChange}></input>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}></input>
            {status && <label>{status}</label>}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
