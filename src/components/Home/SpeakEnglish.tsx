import Image from "next/image";
import BeeLogo from "@/images/BeeLogo.webp";

const SpeakEnglish = () => {
  return (
    <section className="w-full h-screen bg-solar-neon bg-(image:--image-hero-responsive)  bg-cover bg-center lg:bg-(image:--image-hero) flex justify-center items-center">
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

        <button className="bg-black text-white px-4 py-2 rounded mt-4">
          Get Started for Free
        </button>
      </div>
    </section>
  );
};

export default SpeakEnglish;
