import React, { useState,useEffect } from "react";
import sideImg from '../assets/Side Image.svg'
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setCredentials } from "../Slice/userSlice";
import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUp() {
  
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [error,setError]=useState(false)

  const [input,setInput]=useState({
    name:"",
    email:"",
    password:""
  })
  
  function handleInput(e){
     setInput({...input,[e.target.name]:e.target.value})
  }

   async function handleSubmit(){
    try {
      const res=await axios.post('http://localhost:3000/signUp',input)
      const data=res.data
      dispatch(setCredentials(data))
      if(data){
        navigate('/')
        toast.success('Account Created!');
      }else{
        toast.success('signup failed. Please check your credentials.');
      }

    } catch (error) {
      toast.error('Invalid Details Or Account Exists'); 
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
                <h1 className="text-4xl font-bold text-left">Create Your Account</h1>
                 
                <div> 
                <label htmlFor="name" className="text-lg font-medium">Name</label> <br />
                <input type="text" id="name" placeholder="Name" name="name" value={input.name} onChange={handleInput} className="bg-[#EDEDED] w-full pl-3 py-3 rounded-lg"/>
                </div>

                <div> 
                <label htmlFor="email" className="text-lg font-medium">Email</label> <br />
                <input type="email" id="email" placeholder="Email" name="email" value={input.email} onChange={handleInput}  className="bg-[#EDEDED] w-full pl-3 py-3 rounded-lg"/>
                </div>

                <div> 
                <label htmlFor="password" className="text-lg font-medium">Password</label> <br />
                <input type="password" id="password" placeholder="Password" name="password" value={input.password} onChange={handleInput}  className="bg-[#EDEDED] w-full pl-3 py-3 rounded-lg"/>
                </div>
                 
                <button className="bg-zinc-950 text-white py-3 px-6 rounded-md w-full hover:bg-gray-900" onClick={handleSubmit}>Create Account</button>
                <div className="flex justify-between">
                <p>Already have and account?</p>
                <button className="font-medium underline" onClick={()=>{navigate('/login')}}>Login</button>
                </div>

                </div>

            </div>
            
        </div>


    </>
  );
}

export default SignUp;
