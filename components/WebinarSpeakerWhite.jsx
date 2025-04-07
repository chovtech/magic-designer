"use client";
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

export default function WebinarSpeakerWhite() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-3/5 mx-auto flex flex-col md:flex-row items-center justify-center py-10 gap-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/chike_studio_1.jpg"
          alt="Chike Okoli"
          width={500} // Reduced width
          height={750} // Adjusted proportionally
          className="w-full h-auto md:h-[350px] object-cover rounded-lg" // Adjusted height
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-4/5 flex flex-col justify-center bg-white text-black p-6 md:h-[400px] rounded-lg shadow-lg"> {/* Adjusted height */}
        <h2 className="text-xl md:text-[18px] font-bold">
        FREE TRAINING<span className="text-blue-500"></span> WITH 
          <span className="text-blue-500"> CHIKE OKOLI</span>
        </h2>

        <ul className="mt-4 space-y-3 text-sm">
          <li>✅ <b>The Money-Printing Secret Framework</b> – A proven system you can <a href="#" className="text-blue-600 underline">implement immediately.</a></li>
          <li>✅ <b>Plug-and-Play System</b> – Watch it in action and start using it right away—<a href="#" className="text-blue-600 underline">no guesswork required!</a></li>
          <li>✅ <b>3 FREE Copies of This AI Tool</b> – This powerful tool creates stunning graphics like magic.</li>
        </ul>

        <button 
        onClick={() => setIsOpen(true)} 
        className="mt-6 bg-red-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded text-lg w-full">
          UNLOCK INSTANT ACCESS NOW!
        </button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />

        <p className="mt-4 text-gray-600 text-sm text-center">
          100% <b>FREE</b> - Masterclass Training
        </p>
      </div>
    </div>
  );
}
