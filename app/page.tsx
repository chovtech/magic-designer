import Header from "../components/Header";
import Headline from "../components/Headline";
import WebinarSpeakerWhite from "@/components/WebinarSpeakerWhite";
// import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
// import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="bg-main">
      {/* Header Component */}
      <Header />
      <Headline />
      <WebinarSpeakerWhite />
      {/* <SocialProof />
      <CTA /> */}
      <Footer />
      
    </div>
  );
}
