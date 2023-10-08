import Header from "../Common/Header";
import './Login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    let navigate = useNavigate();
    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");

    let user = {
        name:"User Singh",
        email:"user@gmail.com",
        contact:890909989,
        city:"Lucknow",
        password:"user"
    }
    function getData(){
        if(username===user.email && password===user.password){
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/userhome');
        }else{
            alert("Enter Valid Email and Password");
        }
    }
    return(
        <div>
            <Header />
            <div className="login-base">
                <div className="login-main">
                    <div className="login-heading">Login</div>
                    <input type="text" placeholder="username"
                    onChange={(e)=>setUsername(e.target.value)} value={ username } />

                    <input type="password" placeholder="password"
                    onChange={(e)=>setPassword(e.target.value)} value={ password } />
                    
                    <button onClick={ getData }>Login</button>
                </div>

            </div>
        </div>
    );
}

export default Login;