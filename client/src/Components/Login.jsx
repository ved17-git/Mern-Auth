import React, { useEffect, useState } from "react";
import sideImg from '../assets/Side Image.svg'
import { useDispatch,useSelector } from "react-redux";
import { setCredentials } from "../Slice/userSlice";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'ldrs/tailChase'

// Default values shown  


function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [loading,setLoading]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    try {
      const res= await axios.post('http://localhost:3000/login',{ email,password})
      const userData = res.data;
      dispatch(setCredentials(userData))
      if(userData){
        navigate('/')
        setLoading(true)
        toast.success('Login successful!');
      } else{
        toast.error('Login failed. Please check your credentials.');
      }

    } catch (error) {
      toast.error(error.message);   
     }
  }




  return (
    <>




<div className="w-full flex sm:flex-col">

<div className="w-[50%] sm:w-full sm:px-5 ">
  <img src={sideImg} alt="" className="w-full rounded-lg" />
</div>

<div className="w-[50%] grid place-items-center px-[20vh] sm:w-full sm:px-[4vh] pb-10 sm:mt-16">

    <div className="w-full mx-auto space-y-6">
    <h1 className="text-4xl font-bold text-left">Login To Existing Account</h1>

    <div> 
    <label htmlFor="email" className="text-lg font-medium">Email</label> <br />
    <input type="email"
     id="email" placeholder="Email" 
     onChange={(e)=>{setEmail(e.target.value)}}
     className="bg-[#EDEDED] w-full pl-3 py-3 rounded-lg"/>
    </div>

    <div> 
    <label htmlFor="password" className="text-lg font-medium">Password</label> <br />
    <input type="password"
     id="password" placeholder="Password"
     onChange={(e)=>{setPassword(e.target.value)}}
     className="bg-[#EDEDED] w-full pl-3 py-3 rounded-lg"/>
    </div>

    <button className="bg-zinc-950 text-white py-3 px-6 rounded-md w-full" onClick={handleLogin}>Login</button>
      
      {loading &&    <l-tail-chase size="125"speed="1.75" color="black" ></l-tail-chase> }

    <button className="relative top-[-20px] underline font-medium">Forgot Password</button>

    {/* <div className="flex justify-between">
    <p>Already have and account?</p>
    <button className="font-medium underline">Login</button>
    </div> */}

    </div>

</div>

</div>




    </>
  );
}

export default Login;
