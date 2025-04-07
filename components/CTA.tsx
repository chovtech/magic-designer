"use client";
import { useState } from "react";
import { ArrowDown, Gift } from "lucide-react"; // Import icons
import Modal from "./Modal";

export default function CTA() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-center py-10">
      {/* Animated Arrow */}
      <div className="animate-bounce mb-4">
        <ArrowDown className="text-3xl text-red-500 mx-auto" />
      </div>
      
      {/* CTA Box */}
      <div className="bg-black rounded-2xl p-6 inline-block shadow-lg">
        <button
        onClick={() => setIsOpen(true)} 
        className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-lg shadow-md hover:bg-red-600 transition">
          <span>Yes! Grant Me Access Right Now</span>
          <Gift className="text-xl" />
        </button>
        {/* Use the Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <p className="text-sm text-white mt-2 font-bold">Bonuses + Free Access to 9 persons</p>
      </div>
      
      {/* Free Masterclass Notice */}
      <p className="text-gray-700 text-sm font-semibold mt-4">100% FREE - Masterclass training</p>
    </div>
  );
}
