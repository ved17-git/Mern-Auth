import { useState,useEffect } from "react";
import logo from '../assets/Logo.svg'
import { CiSearch,CiShoppingCart,  } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { NavLink,  } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../Slice/userSlice";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";



function Navbar() {

  const[showNav,setShowNav]=useState(false)
  
  function handleShowNav(){
    setShowNav(true)
  }
  function handelCloseNav(){
    setShowNav(false)
  }

  useEffect(() => {
    if (showNav) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}, [showNav]);

const {userInfo}=useSelector((state)=>state.user)
const dispatch=useDispatch()
console.log(userInfo);


 async function handleLogout(){
 await axios.post('http://localhost:3000/logout',{})
dispatch(logout())
toast('Logout Successfully')
}





  return (
    <>
  
  <div className={`flex items-center justify-between px-[18vh] py-[6vh] w-full sm:px-[3vh] sm:py-[4vh] `}>
  
  <NavLink to='/'  className="sm:w-[20%] cursor-pointer">  <img src={logo} alt="" />  </NavLink>
  
  <div className="flex w-[50%] ">
    <input type="text"  placeholder="Search"  className="w-full pl-3 rounded-s-sm py-3 bg-[#F5F5F5] sm:py-2"/> 
    <button className="bg-zinc-950 rounded-e-sm px-2">    <CiSearch size={30} color="white" />     </button>
  </div>

  <ul className="flex gap-8 sm:hidden ">
    <NavLink to='/' className={({isActive})=>`${isActive? `text-zinc-950`: `text-zinc-500`}`} > Home </NavLink>
    <NavLink to='/about' className={({isActive})=>`${isActive? `text-zinc-950`: `text-zinc-500`}`} > About </NavLink>
    <NavLink to='/contact' className={({isActive})=>`${isActive? `text-zinc-950`: `text-zinc-500`}`} > Contact </NavLink>
    <NavLink to='/blog' className={({isActive})=>`${isActive? `text-zinc-950`: `text-zinc-500`}`} > Blog </NavLink>
  </ul>






  <div className="flex items-center gap-6 sm:hidden ">
  <NavLink to='/cart' className={({isActive})=>`${isActive? `text-zinc-950`: `text-zinc-500` }`}> <CiShoppingCart size={30}/>  </NavLink>
 
  {
    userInfo ? (  <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">{userInfo.name}</div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow gap-3">
    <NavLink to='/profile' className='hover:bg-gray-200 rounded-box z-[1] p-2'>Profile</NavLink> 
    <NavLink to='/' onClick={handleLogout} className='hover:bg-gray-200 rounded-box z-[1] p-2'>Logout</NavLink>
      </ul>
    </div>):(  <NavLink to='/signUp' className={({isActive})=>`${isActive? `text-zinc-950`: `text-zinc-500` }`}> <VscAccount size={27}/> </NavLink>
)
  }
   </div>




  <div className="hidden sm:block">
  <FaBars size={30} onClick={handleShowNav}/>
  </div>

 
 
<div className={`hidden sm:block sm:fixed sm:top-0 z-50 sm:left-0 sm:bg-white sm:w-full sm:h-screen sm:transform sm:transition-transform sm:duration-300 ${
            showNav ? "sm:translate-y-0" : "sm:-translate-y-full"
          }`}>
   
  <div className="flex mt-8 px-5 justify-between">
  <h1><img src={logo} alt="" className="" /></h1>
  <h1> <RxCross2 size={30} onClick={handelCloseNav}/>  </h1>
  </div>

  <ul className="mt-6 flex flex-col gap-6 pl-5 py-3">
    <NavLink to='/'  onClick={handelCloseNav} className={({isActive})=>`${isActive? `text-zinc-950 `: `text-zinc-500`}`} > Home </NavLink>
    <NavLink to='/about' onClick={handelCloseNav}  className={({isActive})=>`${isActive? `text-zinc-950 `: `text-zinc-500`}`} > About </NavLink>
    <NavLink to='/contact' onClick={handelCloseNav}  className={({isActive})=>`${isActive? `text-zinc-950`: `text-zinc-500`}`} > Contact </NavLink>
    <NavLink to='/blog' onClick={handelCloseNav}  className={({isActive})=>`${isActive? `text-zinc-950`: `text-zinc-500`}`} > Blog </NavLink>
    <NavLink to='/cart'  onClick={handelCloseNav} className={({isActive})=>` flex gap-3  ${isActive? `text-zinc-950`: `text-zinc-500` }`}> <CiShoppingCart size={30}/> <button>Cart</button> </NavLink>
    <NavLink to={userInfo? '/profile' : '/signup'} onClick={handelCloseNav}  className={({isActive})=>`flex gap-3 ${isActive? `text-zinc-950`: `text-zinc-500` }`}> <VscAccount size={27}/> <button> {userInfo? userInfo.name : 'Profile'}</button> </NavLink>
  </ul>

</div>

  </div>

    

    


    </>
  );
}

export default Navbar;
