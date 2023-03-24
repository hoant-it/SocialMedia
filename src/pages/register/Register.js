import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios"

function Register() {

  const[inputs,setInputs]=useState({
    username:"",
    email:"",
    password:"",
    name:""
  })

  const[status,setStatus]=useState(null)

  const handleChange=(e)=>{
setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleClick=async (e) =>{
    e.preventDefault()

    try {
      await axios.post("http://localhost:8800/api/auth/register",inputs)
      setStatus("created user is success!")
    } catch (error) {
      setStatus(error.response.data)
    }

  }
  // console.log(err)

  // console.log(inputs)

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
                <input type='text' placeholder='UserName' name="username" onChange={handleChange}></input>
                <input type='email' placeholder='Email' name="email" onChange={handleChange}></input>
                
                <input type='password' placeholder='Password' name="password" onChange={handleChange}></input>
                <input type='text' placeholder='Name' name="name" onChange={handleChange}></input>
                
                {status && <label style={{color:"red"}}>{status}</label>  }
                <button onClick={handleClick}>Register</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
