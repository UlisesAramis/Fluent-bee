import Image from "next/image";
import Bee from "@/assets/BeePlanes.webp";
import CellBee from "@/assets/CELULAR.webp";
import { MdModeComment } from "react-icons/md";
import AdvantagesList from "@/components/Home/Content/AdvantagesList";

const advantagesData = [
  "Only the user’s speaking time is counted, allowing maximum interaction value in each session. So, a conversation where you speak for two minutes could actually span several minutes of interaction.",
  "Users can engage in real-time interactive conversations with the AI tutor, practicing and improving their English conversational skills.",
  "The AI tutor adapts to users' schedules, providing flexible and interactive English lessons, enabling users to focus on areas that need improvement and learn efficiently.",
];

const Advantages = () => {
  return (
    <section className="w-full bg-solar-neon py-16 text-black">
      <div className="w-5/6 mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start gap-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center lg:text-left">
              Our Plans
            </h2>

            <Image src={Bee} alt="Bee illustration" className="w-12 h-12" />
          </div>

          <Image
            src={CellBee}
            alt="Cell Bee illustration"
            className="w-72 h-auto"
            priority
          />
        </div>

        <AdvantagesList items={advantagesData} />
      </div>
    </section>
  );
};

export default Advantages;
