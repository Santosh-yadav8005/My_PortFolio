import React from 'react'
import ht from "../../public/ht.avif";
import cl from "../../public/cl.avif";
import ck from "../../public/ck.avif";
import basket from "../../public/b.png"

function PortFolio() {
  return (
    <>
    <div      name="Portfolio"
   className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        
        
        <div className="mx-0 grid grid-cols-1 md:grid-cols-4 gap-10 my-5">

          
          
          <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300">
          <div className="w-[120px] h-[120px] p-1 rounded-full border-[2px]">
            <img src={ht} alt="img" />
            </div>
            <h1 className="text-green-800 text-xl m-1">Institute Website</h1>
            <p className="m-1"> This is a Institute frontend single page website</p>
            <a href="https://santosh-yadav8005.github.io/UNIVERSITY-FRONT-END-WEBSITE/" target='_blank'>
            <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold px-4 py-2 rounded m-2">Demo
              </button></a>
              <a href="https://github.com/Santosh-yadav8005/UNIVERSITY-FRONT-END-WEBSITE" target='_blank'>
              <button className="bg-green-400  hover:bg-green-600 text-white font-bold px-4  py-2 m-2 rounded"> Source Code
                 </button></a>
            </div>


            <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300">
          <div className="w-[120px] h-[120px] p-1 rounded-full border-[2px]">
            <img src={cl} alt="img" />
            </div>
            <h1 className="text-green-800 text-xl m-1">Calculator</h1>
            <p className="m-1"> This is a Calculator witch makes using JavaScript</p>
            <a href="https://santosh-yadav8005.github.io/Calculator/" target='_blank'>
            <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold px-4 py-2 rounded m-2">Demo
              </button></a>
              
            <a href="https://github.com/Santosh-yadav8005/Calculator" target="_blank">
              <button className="bg-green-400  hover:bg-green-600 text-white font-bold px-4  py-2 m-2 rounded"> Source Code
                 </button></a>
            </div>


            <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300">
          <div className="w-[120px] h-[120px] p-1 rounded-full border-[2px]">
            <img src={ck} alt="img" />
            </div>
            <h1 className="text-green-800 text-xl m-1">Digital Clock</h1>
            <p className="m-1"> This is a digital clock which makes using JavaScript</p>
            <a href="https://santosh-yadav8005.github.io/Digital-clock/" target="_blank">
            <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold px-4 py-2 rounded m-2">Demo
              </button> </a>
              <a href="https://github.com/Santosh-yadav8005/Digital-clock" target='_blank'>
              <button className="bg-green-400  hover:bg-green-600 text-white font-bold px-4  py-2 m-2 rounded"> Source Code
                 </button></a>
            </div>

          <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300">
          <div className="w-[120px] h-[120px] p-1 rounded-full border-[2px]">
            <img src={basket} alt="img" />
            </div>
            <h1 className="text-green-800 text-xl m-1"> Vegitable Website</h1>
            <p className="m-1"> This is an E-Commerce Vegitable Website</p>
            <a href="https://bejewelled-sopapillas-5aff78.netlify.app/" target="_blank">
            <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold px-4 py-2 rounded m-2">Demo
              </button> </a>
              <a href="https://github.com/Santosh-yadav8005/Frontend_E-Commerce_Vegitable_Website" target='_blank'>
              <button className="bg-green-400  hover:bg-green-600 text-white font-bold px-4  py-2 m-2 rounded"> Source Code
                 </button></a>
            </div>

            


            </div>
            </div>

          </div>

    </>
  )
}

export default PortFolio



























