"use client"; 

import { useState } from "react";
import Modal from "./Modal"; // Ensure this is the correct path

export default function Headline() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="flex flex-col items-center justify-center text-center w-full px-4 gap-4">
        {/* Tagline */}
        <div className="bg-yellow-200 text-black px-6 py-2 w-[90%] md:w-[40%] lg:w-[30%] sm:w-[90%] rounded-[30px] shadow-lg font-bold">
        No Prior Skills or Experience Needed.
        </div>

        {/* Headline */}
        <h1 className="text-[36px] md:text-4xl lg:text-4xl font-extrabold leading-[110%] max-w-[90%] md:max-w-[80%]">
          <span className="bg-gradient-to-r from-blue-700 via-pink-700 via-red-700 to-orange-700 bg-clip-text text-transparent">
            From $0 to $7K in 7 Days:{" "}
          </span> 
          How a <span className="underline">Non-Designer</span> Cashed In 
          <span className="text-[25px] md:text-4xl lg:text-3xl inline-block bg-yellow-300 text-[#03031c] rounded-md px-3 py-1 leading-[75%]">
            Creating 147 Premium Graphics {" "}
          </span> 
          with this Next-Gen AI Tool (Works for Anyone!)
        </h1>

        {/* Subtitle */}
        <span className="text-[18px] md:text-4xl lg:text-3xl font-extrabold text-[#03031c] inline-block mt-[30px] underline leading-[110%]">
        Get Paid Selling AI-Graphics From Home, Tonight!
        </span>

        {/* ✅ Mobile-Only Button Below "No Prior Skills" */}
        <div className="md:hidden flex justify-center w-[80%]">
          <button 
            onClick={() => setIsOpen(true)} 
            className="mt-4 bg-red-600 hover:bg-red-600 text-white font-bold py-3 px-6 rounded text-lg w-full">
            GET INSTANT ACCESS NOW!
          </button>
        </div>

        {/* Modal Component */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <span className="text-red-500">100% FREE</span>
      </div>
    );
}
