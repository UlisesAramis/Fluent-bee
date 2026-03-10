import { FaCircleExclamation } from "react-icons/fa6";
import ButtonBee from "./ui/ButtonBee";

const plans = [
  { minutes: 15, price: 9.99 },
  { minutes: 30, price: 14.99 },
  { minutes: 60, price: 24.99 },
];

const Planes = () => {
  return (
    <section className="bg-solar-neon py-16">
      <div className="w-5/6 max-w-6xl mx-auto flex flex-col gap-12">
        <p className="text-black text-center max-w-2xl mx-auto text-lg">
          Purchase 15-minute blocks to have{" "}
          <span className="text-neon-sky font-semibold">
            one-on-one conversations
          </span>
          . Choose the pack that fits your needs.
        </p>

        <div className="bg-gray-100 border border-black rounded-lg p-6 flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <FaCircleExclamation className="w-8 h-8 text-black" />

          <p className="text-sm md:text-base text-black leading-relaxed">
            Only the time you spend speaking is deducted from your available
            minutes. The AI tutor’s responses do not affect your balance,
            allowing longer interactions and better practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.minutes}
              className="
              group
              border-2 border-black
              rounded-xl
              p-6
              cursor-pointer
              transition-all
              duration-300
              hover:bg-black
              hover:scale-105
              active:scale-95
              flex
              flex-row
              md:flex-col
              md:items-center
              md:text-center
              justify-between
              gap-4
              "
            >
              <div className="flex flex-col gap-1 md:gap-2">
                <p className="text-neon-sky text-xl md:text-4xl font-bold">
                  {plan.minutes} minutes
                </p>

                <div className="flex items-center gap-3 md:flex-col md:gap-1">
                  <p className="text-black text-2xl md:text-5xl font-bold transition-colors duration-300 group-hover:text-white">
                    ${plan.price}
                  </p>

                  <p className="text-black text-sm md:text-xl tracking-widest transition-colors duration-300 group-hover:text-gray-200">
                    USD
                  </p>
                </div>
              </div>

              <ButtonBee className="md:w-48">BUY NOW</ButtonBee>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planes;
