import BottomBee from "@/assets/BottomBee.webp";
import BeeLogo from "@/images/BeeLogo.webp";
import Image from "next/image";
import TopBee from "@/assets/TopBee.webp";
import ButtonBee from "../ui/ButtonBee";

const SpeakEnglish = () => {
  return (
    <section className="w-full h-screen bg-solar-neon bg-(image:--image-hero-responsive)  bg-cover bg-center lg:bg-(image:--image-hero) flex justify-center items-center">
      <Image src={BottomBee} alt="BottomBee" className="hidden md:block" />
      <div className="w-5/6 flex flex-col items-center gap-y-10 text-center text-black">
        <Image src={BeeLogo} alt="BeeLogo" />

        <h1 className="text-3xl font-bold">
          Speak English, Seize Opportunities!
        </h1>

        <p className="text-2xl">
          Gear up for travels, job interviews, land dream jobs, and ace speaking
          tests with personalized, flexible, AI-driven English lessons tailored
          just for you!
        </p>

        <ButtonBee className="text-lg px-6 py-3">
          Start Your Free Trial
        </ButtonBee>
      </div>
      <Image src={TopBee} alt="TopBee" className="hidden md:block" />
    </section>
  );
};

export default SpeakEnglish;
