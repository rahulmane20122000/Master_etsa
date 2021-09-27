import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import login_img from '../assets/images/login.svg';
// import Axios from 'axios';
const Login=()=>{
    const[login,setLogin]=useState({email:"",password:""});
    const history=useHistory();
    let name,value;
    const handleEvent=(e)=>{
        
        name=e.target.name;
        value=e.target.value;

        setLogin({...login,[name]:value});
    }


    const Postdata=async(e)=>{
    e.preventDefault();
    const{email}=login;
//  const res =await Axios.get("/studentLogin",{email,password});
    
    const res=await fetch("/sendmail",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            
        },
        body:JSON.stringify({
            email
           
        })
    })

    const data=await res.json();

    if(data.status===422 || !data){
        alert("Invalid credentials");
    }else{
        alert("Loggedin");
        history.push("/exploreEvents")
    }
    }
    return(
        <React.Fragment>
        <div className="login_wrapper">
        <div className="main_login">
           
           <div className="left_side_login">
           <h1><span style={{"color":"#298fe8"}}>L</span>ogin</h1>
               <label>Email</label>
               <div className="login_icon">
               <i class="fas fa-user"></i>
               <input name="email" value={login.email} type="email" placeholder="Enter Your Mail" onChange={handleEvent}/>
               </div>
               <label>Password</label>
               <div className="login_icon">
               <i class="fas fa-lock"></i>
               <input name="password" value={login.password} type="password" placeholder="Enter Password" onChange={handleEvent}/>
               </div>
               <Button onClick={Postdata} style={{"backgroundColor":"#FF7A00"}}>Login</Button>
           </div>
           <div className="right_side_img">
               <img src={login_img} alt="login_image"/>
           </div>
        </div>
        </div>
        </React.Fragment>
    );
}

export default Login;