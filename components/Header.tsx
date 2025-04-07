"use client"; 

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import { Menu, X, ArrowRight } from "lucide-react"; // Import icons

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="flex justify-between items-center px-8 py-4">
        {/* Left: Logo */}
        <Image src="/chike_logo_black.png" alt="Chike" width={150} height={50} priority />

        {/* Right: Desktop Button (Triggers Modal) */}
        <button 
          className="hidden md:flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-amber-700"
          onClick={() => setIsOpen(true)} // ✅ Opens the modal
        >
          Access FREE Training
          <ArrowRight size={20} />
        </button>

        {/* Mobile Menu Button (Only toggles menu) */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}  >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu (Only visible when open) */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white">
          {/* Mobile Access Free Training Button (Triggers Modal) */}
          <button 
            className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-amber-700"
            onClick={() => setIsOpen(true)} // ✅ Opens the modal
          >
            Access FREE Training
            <ArrowRight size={20} />
          </button>
        </div>
      )}

      {/* Modal Component */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
