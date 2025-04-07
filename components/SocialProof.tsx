import Image from "next/image";

const socialProofData = [
  {
    title: "FantasyDigitals made $120K",
    description: "Selling AI-Generated Digital Art on Etsy",
    image: "/fantasydigital.webp",
    amount: "$120,000",
  },
  {
    title: "RetouchDesignsShop makes $36K",
    description: "Selling AI-Generated Pet Portraits",
    image: "/retouch-designs-shop.webp",
    amount: "$36,000",
  },
  {
    title: "Paulina made $70K",
    description: "Selling AI-Generated Clipart on Etsy",
    image: "/clipart-charm-store.webp",
    amount: "$70,000",
  },
  {
    title: "HolyWoodStudio made $18K",
    description: "Selling AI-Generated Graphics on Etsy",
    image: "/hollywood-studio.webp",
    amount: "$18,000",
  },
];

export default function SocialProof() {
  return (
    <section className="py-1 text-black flex justify-center">
      <div className="w-3/5 text-center">
        <h2 className="text-3xl font-bold mb-6">See What is Possible with these Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {socialProofData.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-gray-700 shadow-lg bg-[#1e293b] bg-opacity-90 backdrop-blur-md w-fit mx-auto"
            >
              <Image src={item.image} alt={item.title} width={300} height={200} className="rounded-lg" />
              <h3 className="text-lg font-semibold mt-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
              <span className="text-xl font-bold text-yellow-400">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
