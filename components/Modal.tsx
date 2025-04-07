"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter for redirection
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter(); // ✅ Initialize Next.js router

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setMessage("Success! Redirecting...");
      setTimeout(() => {
        router.push("/thank-you"); // ✅ Redirect to thank-you page
      }, 1500); // Small delay for better UX
    } else {
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
          <X size={24} />
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-bold mb-4 text-center">Get Instant Access</h2>
        <p className="text-gray-600 mb-4 text-center">Enter your details below to join the free masterclass.</p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Join Free Masterclass Training Now"}
          </button>
        </form>
        {message && <p className="text-center text-sm text-green-600 mt-2">{message}</p>}
      </div>
    </div>
  );
}
