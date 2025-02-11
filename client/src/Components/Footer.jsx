import footerLogo from '../assets//LogoFooter.svg'

function Footer() {
  return (
    <>
         
    <div className="bg-zinc-950 text-white w-full h-full flex justify-between px-[20vh] py-[10vh] sm:flex-col sm:items-center sm:justify-center sm:px-[2vh] sm:text-center sm:gap-16">

      <div >
        <img src={footerLogo} alt="" className="mx-auto" />
        <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, eaque!</p>
      </div>

      <div>
        <h1 className="text-2xl p-2">Services</h1>
        <ul>
            <li className="text-[#CFCFCF] p-2">Bonus Program</li>
            <li className="text-[#CFCFCF] p-2">Gift Cards</li>
            <li className="text-[#CFCFCF] p-2">Credit and payment</li>
            <li className="text-[#CFCFCF] p-2">Service contact</li>
            <li className="text-[#CFCFCF] p-2">Non cash Amount</li>
            <li className="text-[#CFCFCF] p-2">Payment</li>
        </ul>
      </div>

      <div>
        <h1 className="text-2xl p-2">Assistance to buyer</h1>
        <ul>
            <li className="text-[#CFCFCF] p-2">Find an Order</li>
            <li className="text-[#CFCFCF] p-2">Terms and delivery</li>
            <li className="text-[#CFCFCF] p-2">Exchange and return of goods</li>
            <li className="text-[#CFCFCF] p-2">Guarante</li>
            <li className="text-[#CFCFCF] p-2">FAQs</li>
            <li className="text-[#CFCFCF] p-2">Terms</li>
        </ul>
      </div>


      </div>



    </>
  );
}

export default Footer;
