import BottomBee from "@/assets/BottomBee.webp";
import ButtonBee from "@/components/ui/ButtonBee";
import BeeLogo from "@/images/BeeLogo.webp";
import TopBee from "@/assets/TopBee.webp";
import Image from "next/image";

const SpeakEnglish = () => {
  return (
    <section className="w-full h-screen bg-solar-neon bg-(image:--image-hero-responsive)  bg-cover bg-center lg:bg-(image:--image-hero) flex justify-center items-center">
      <Image
        src={BottomBee}
        alt="Bee flying below"
        className="hidden md:block"
      />
      <div className="w-5/6 flex flex-col items-center gap-y-10 text-center text-black">
        <Image src={BeeLogo} alt="fluentbee logo" />

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
      <Image src={TopBee} alt="Bee flying above" className="hidden md:block" />
    </section>
  );
};

export default SpeakEnglish;
