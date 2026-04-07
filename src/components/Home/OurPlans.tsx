import Image from "next/image";
import PriceGlob from "@/images/globo.webp";
import { FaCircleExclamation } from "react-icons/fa6";
import PricingPlans from "./Content/PricingPlans";
import Bee from "@/images/BeePlanes.webp";
import ButtonBee from "../ui/ButtonBee";

const OurPlans = () => {
  return (
    <section className="w-full bg-white text-black py-16">
      <div className="w-5/6 mx-auto flex flex-col items-center gap-12 lg:flex-row-reverse lg:items-start lg:justify-between">
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="flex justify-center items-center gap-x-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center lg:text-left">
              Our Plans
            </h2>

            <Image
              src={Bee}
              alt="Bee illustration"
              className="w-16 h-16 mt-4"
            />
          </div>

          <div className="bg-gray-100 border border-black rounded-lg p-6 flex flex-col items-center text-center gap-4">
            <FaCircleExclamation className="w-8 h-8 text-black" />

            <p className="text-sm md:text-base leading-relaxed">
              Only the time you spend speaking is deducted from your available
              minutes; the AI tutor’s responses do not impact your time balance.
              A conversation where you speak for two minutes could span twelve
              minutes of interaction, maximizing the value you receive from each
              session.
            </p>
          </div>

          <div className="hidden lg:flex flex-col justify-center items-center">
            <PricingPlans />
            <ButtonBee className="mt-4 w-52">SEE MORE!</ButtonBee>
          </div>
        </div>

        <div className="flex flex-col items-center lg:pt-40 gap-6">
          <div className="text-center">
            <p className="text-neon-sky font-bold text-lg">
              Keep learning and get your first 15 minutes
            </p>
            <p className="font-bold text-lg">for just $1 USD</p>
          </div>

          <Image
            src={PriceGlob}
            alt="Pricing illustration"
            className="w-64 h-auto"
            priority
          />

          <PricingPlans className="lg:hidden" />
        </div>
      </div>
    </section>
  );
};

export default OurPlans;
