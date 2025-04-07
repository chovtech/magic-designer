"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { Play, Share2, Mail } from "lucide-react";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("https://chikeokoli.com/webinar");
    }, 2000);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center text-center p-6">
      <Head>
        <title>Thank You for Registering - $7K A Week AI Masterclass for non-designers</title>
        <meta name="description" content="You have successfully registered for  $7K A Week AI Masterclass for non-designers. Follow the steps to access your bonuses and webinar link." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Thank You for Registering -  $7K A Week AI Masterclass for non-designers" />
        <meta property="og:description" content="Join us for the exclusive  $7K A Week AI Masterclass for non-designers." />
        <meta property="og:type" content="website1" />
      </Head>

      <img src="../chike_logo_black.png" alt="Logo" className="w-32" />

      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 break-words">CONGRATULATIONS!</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-700">
          You Are Now Officially Registered To Join Us For The <br />
          <u> $7k A Week AI Design Masterclass for No-Designers, FREE</u>
        </h2>

        <div className="bg-yellow-100 p-4 rounded-md shadow-sm mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-yellow-700 flex items-center justify-center">
            <Mail className="w-6 h-6 mr-2" /> STEP 1: VERY IMPORTANT
          </h3>
          <p className="text-gray-700 mt-2">
            CHECK YOUR EMAIL FOR THE FREE DOWNLOAD LINK TO THE <strong>$7k A Week AI Design CHEAT SHEET for No-Designers</strong>...
          </p>
        </div>

        <div className="bg-blue-100 p-4 rounded-md shadow-sm mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-blue-700 flex items-center justify-center">
            <Play className="w-6 h-6 mr-2" /> STEP 2: ACCESS THE MASTERCLASS ROOM
          </h3>
          <p className="text-gray-700 mt-2">
            Use the link below to access the webinar room if you are not automatically redirected:
          </p>
          <a
            href="https://webinarkit.com/webinar/thankyou/64e25ad49d76b92bb4edea62/?t=16928220"
            className="inline-block mt-3 px-6 md:px-10 py-3 md:py-4 bg-blue-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access Webinar Room
          </a>
        </div>

        <div className="bg-green-100 p-4 rounded-md shadow-sm mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-green-700 flex items-center justify-center">
            <Share2 className="w-6 h-6 mr-2" /> STEP 3: SHARE TO WIN A FREE COPY OF MagicDesigner
          </h3>
          <p className="text-gray-700 mt-2">
            Share this webinar with your friends for a chance to win a free copy of <strong>MagicDesigner</strong>! Spread the word and increase your chances of winning.
          </p>
          <button className="mt-3 px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            Share Now
          </button>
        </div>
      </div>
    </div>
  );
}
