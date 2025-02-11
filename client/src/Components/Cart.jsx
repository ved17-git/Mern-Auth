import React, { useState } from "react";
import product from '../assets/Iphone 14 pro 1.svg'
import { FaPlus,FaMinus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



function Cart() {
   
    const[quantity,setQuantity]=useState(1)

    function removeQuantity(){
        if(quantity>0){
            setQuantity(quantity-1)
        }
    }
    function addQuantity(){
        setQuantity(quantity+1)
    }


  return (
    <>


    <div className="w-full flex py-10 pb-20 px-[20vh] sm:flex-col sm:px-[1vh] sm:gap-10">


        <h1 className="text-4xl font-bold absolute sm:px-[1vh]">Shopping Cart</h1>

        <div className="w-[50%] flex px-[1vh] gap-7 items-center sm:relative sm:mt-20 sm:w-full sm:px-[1vh] sm:gap-6">

            <img src={product} alt="" className="sm:w-[40%]" />

            <div className="flex gap-7 sm:flex-col w-full">

            <div>
            <p className="text-wrap font-normal">Iphone 14 pro max 128gb deep Purple</p>
            </div>

            <div className="flex items-center gap-7 sm:gap-6 w-full">

            <div className="flex gap-3 items-center sm:gap-1">
            <button onClick={removeQuantity}><FaMinus /></button>
            <p className="border px-3 sm:px-1">{quantity}</p>
            <button onClick={addQuantity}><FaPlus /></button>
            </div>
            <h1 className="font-medium">1099$</h1>
            <button><RxCross2 /></button>

            </div>

            </div>

        </div>

        


        

    



        <div className="w-[50%] rounded-lg py-16 shadow-lg flex justify-center items-center flex-col sm:w-full">

           
           <div className="w-full space-y-4 px-[12vh] sm:px-[2vh] ">
            
            <h1 className="text-4xl font-bold mb-10">Order Summary</h1>
            
            <div className="w-full">
            <label htmlFor="promocode" className="font-medium"> Promocode</label> <br />
            <input type="text" placeholder="Code" id="promocode" className="w-full bg-[#EDEDED] pl-3 py-3 rounded-lg"/>
            </div>


            <div className="w-full flex justify-between">
              <h1>Subtotal</h1>
              <p>$2317</p>
            </div>

            
            <div className="w-full flex justify-between">
              <h1>Tax</h1>
              <p>$23</p>
            </div>

            
            <div className="w-full flex justify-between">
              <h1>Shipping</h1>
              <p>$7</p>
            </div>

            <div className="w-full flex justify-between">
              <h1>Total</h1>
              <p>$7</p>
            </div>

            <button className="w-full bg-zinc-950 text-white py-3 rounded-lg">Checkout</button>

        </div>

        </div>

    </div>




    </>
  );
}

export default Cart;
