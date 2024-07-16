import React from 'react'
import ht from "../../public/ht.avif";
import cl from "../../public/cl.avif";
import ck from "../../public/ck.avif";

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


            


            </div>
            </div>

          </div>

    </>
  )
}

export default PortFolio
























// import React from "react";
// import ht from "../../public/ht.avif";
// import cl from "../../public/cl.avif";
// import ck from "../../public/ck.avif";

// function PortFolio() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: ht,
//       name: "Institute Website",
//       add: "This is a Frontend base a Single page website.",
//       btn_1:"Demo",
//       btn_11:"Source Code",
//     },
//     {
//       id: 2,
//       logo: cl,
//       name: "Calculator",
//       add: "This is a calculator witch makes using JavaScript.",
//       btn2:"Demo",
//       btn22:"Source code",
//     },
//     {
//       id: 3,
//       logo: ck,
//       name: "Digital Clock",
//       add: "This is a digital clock makes in JavaScript",
      
//     },
//     // {
//     //   id: 4,
//     //   logo: nodejs,
//     //   name: "NodeJS",
//     // },
//     // {
//     //   id: 5,
//     //   logo: python,
//     //   name: "Python",
//     // },

//   ];
//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
//         <span className=" underline font-semibold">Featured Projects</span>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-20 my-5">
//           {cardItem.map(({ id, logo, name, add, btn_1, btn_11, btn2, btn22 }) => (
//             <div
//               className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
//               key={id}
//             >
//               <img
//                 src={logo}
//                 className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
//                 alt=""
//               />




//               <div>
//                 <div className="px-2 font-bold text-xl mb-2">{name}</div>
//                 <p className="px-2 text-gray-700">{add}</p>
//               </div>
              
//               <div className=" px-6 py-4 space-x-3 justify-around">

//                 <a href="https://santosh-yadav8005.github.io/UNIVERSITY-FRONT-END-WEBSITE/" target="_blank">
//                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">{btn_1}
//                   </button>
//                 </a>

//                 <a href="https://github.com/Santosh-yadav8005/UNIVERSITY-FRONT-END-WEBSITE" target="_blank">
//                   <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
//                   {btn_11}
//                   </button></a>


                 

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// export default PortFolio;


