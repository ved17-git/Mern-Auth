import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../Slice/userSlice";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function Profile() {
    const {userInfo}=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    const navigate=useNavigate()
   console.log(userInfo);
    
    
   function handleLogout(){
    dispatch(logout())
    navigate('/')
    toast('Logout Successfully')
   }

  return (
    <> 
    <div className="flex flex-col p-10 border-2 rounded-lg gap-10 mx-[10vh] mb-10">
    <p>{userInfo && userInfo.name} </p>
    <p>{userInfo && userInfo.email}</p>  
    <button className="bg-red-500 text-white p-2 rounded-lg" onClick={handleLogout}>Logout</button>
    </div>
    </>
  );
}

export default Profile;
