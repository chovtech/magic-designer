import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-10"
      style={{ backgroundImage: "url('/footerbg.webp')" }}
    >
      <div className="container mx-auto text-center px-4">
        {/* Logo */}
        <div className="mb-6">
          <Image src="/chike_logo_white.png" alt="Logo" width={150} height={50} className="mx-auto" />
        </div>
        
        {/* Disclaimer */}
        <p className="text-sm max-w-2xl mx-auto mb-4">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. This site is also not affiliated with Google or any of its subsidiaries.
        </p>

        {/* Legal Section */}
        <p className="text-xs max-w-2xl mx-auto opacity-75">
          © {new Date().getFullYear()} Chike Okoli. All Rights Reserved. The information provided on this website is for educational and informational purposes only and should not be construed as professional advice.
        </p>
      </div>
    </footer>
  );
}
