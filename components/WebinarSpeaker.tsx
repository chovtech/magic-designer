
"use client";
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

export default function WebinarSpeaker() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-center py-10 gap-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/chike_studio_1.jpg"
          alt="Chike Okoli"
          width={1080}
          height={1563}
          className="w-full h-auto md:h-[600px] object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center bg-black text-white p-6 md:h-[600px] rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold">
          EXCLUSIVE <span className="text-pink-500">FREE TRAINING</span> WITH{" "}
          <span className="text-pink-500">CHIKE OKOLI</span>
        </h2>

        <ul className="mt-4 space-y-3 text-lg">
          <li>✅ <b>The One Secret Money-Printing Framework</b> – A proven system you can <a href="#" className="text-blue-400 underline">implement immediately.</a></li>
          <li>✅ <b>Plug-and-Play System</b> – Watch it in action and start using it right away—<a href="#" className="text-blue-400 underline">no guesswork required!</a></li>
          <li>✅ <b>10 FREE Copies of MagicDesign AI</b> – This powerful tool creates stunning graphics like magic.</li>
          <li>✅ <b>10 FREE Copies of MagicDesign AI</b> – This powerful tool creates stunning graphics like magic.</li>
        </ul>

        <button 
        onClick={() => setIsOpen(true)} 
        className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded text-lg w-full">
          UNLOCK INSTANT ACCESS NOW!
        </button>
 <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <p className="mt-4 text-gray-400 text-sm text-center">
          100% <b>FREE</b> - Masterclass Training
        </p>
      </div>
    </div>
  );
}
