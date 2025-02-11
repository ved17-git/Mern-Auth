import img from '../assets/Iphone 14 pro 1.svg'

function Card() {
  return (
    <>

    
    <div className="bg-[#EDEDED] grid place-items-center gap-3 py-[4vh] rounded-xl sm:mt-0">
      <img src={img} alt="" />
      <p className="sm:px-10 text-center">Apple Iphont 14 PRO Deep Purple </p>
      <h1 className="text-3xl">900$</h1>
      <button className="bg-zinc-950 text-white px-4 py-3 rounded-lg">Buy Now</button>
    </div>



    </>
  );
}

export default Card;
