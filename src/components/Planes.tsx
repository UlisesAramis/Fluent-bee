"use client";

import { useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import ButtonBee from "./ui/ButtonBee";

const plans = [
  { minutes: 15, price: 9.99 },
  { minutes: 30, price: 14.99 },
  { minutes: 60, price: 24.99 },
];

const Planes = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="bg-solar-neon py-16">
      <div className="w-5/6 max-w-6xl mx-auto flex flex-col gap-12">
        <p className="text-black text-center max-w-2xl mx-auto text-lg">
          Purchase 15-minute blocks to have{" "}
          <span className="text-neon-sky font-semibold">
            one-on-one conversations
          </span>
          .
        </p>

        <div className="bg-gray-100 border border-black rounded-lg p-6 flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <FaCircleExclamation className="w-8 h-8 text-black" />
          <p className="text-sm md:text-base text-black">
            Only the time you spend speaking is deducted from your available
            minutes. The AI tutor’s responses do not affect your balance,
            allowing longer interactions and better practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(({ minutes, price }) => {
            const active = selected === minutes;

            return (
              <div
                key={minutes}
                onClick={() => setSelected(active ? null : minutes)}
                className={`group border-2 border-black rounded-xl p-6 cursor-pointer transition-all duration-300 flex justify-between md:flex-col md:items-center gap-4
                ${
                  active
                    ? "bg-black scale-105"
                    : "hover:bg-black hover:scale-105"
                }`}
              >
                <div className="text-center">
                  <p className="text-neon-sky text-xl md:text-4xl font-bold">
                    {minutes} minutes
                  </p>

                  <p
                    className={`text-2xl md:text-5xl font-bold transition-colors
                    ${
                      active
                        ? "text-white"
                        : "text-black group-hover:text-white"
                    }`}
                  >
                    ${price}
                  </p>

                  <p
                    className={`text-sm md:text-xl tracking-widest font-bold
                    ${
                      active
                        ? "text-gray-200"
                        : "text-black group-hover:text-gray-200"
                    }`}
                  >
                    USD
                  </p>
                </div>

                <ButtonBee
                  className={`md:w-48 transition-all duration-300
                  ${
                    active
                      ? `
                        bg-neon-sky text-black font-bold
                        shadow-[0_0_20px_#38bdf8]
                        animate-pulse
                      `
                      : "bg-black text-white group-hover:bg-white group-hover:text-black"
                  }`}
                >
                  BUY NOW
                </ButtonBee>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Planes;
