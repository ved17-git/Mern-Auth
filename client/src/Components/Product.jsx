import React from "react";
import productImg from '../assets/ProductImage.svg'

function Product() {
  return (
    <>


      <div className="w-full flex pb-10 px-[16vh] py-[8vh]">

        <div className="w-[50%]  flex justify-center items-center">
            <img src={productImg} alt="" className="py-10"/>
        </div>

        <div className="w-[50%] border-2 px-[10vh] rounded-lg">

          <div className="w-full space-y-5 pt-10">
          <h1 className="text-5xl font-semibold">Iphone 14 Pro Max</h1>
          <h1 className="text-3xl font-semibold">1099$</h1>
          <p className="text-wrap text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem numquam. Omnis, minima ad fugit cumque molestias quo expedita vero.</p>
          <div className="flex items-center gap-6">
          <button className="border-zinc-950 border-[2px] rounded-lg w-full py-3">Add to Wishlist</button>
          <button className="bg-zinc-950 text-white w-full rounded-lg py-3 ">Add to Cart</button>
          </div>
          </div>

        </div>

      </div>



    </>
  );
}

export default Product;
