"use client";

import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import ButtonBee from "./ui/ButtonBee";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-solar-neon min-h-screen flex items-center justify-center px-6 text-black">
      <div className="w-full max-w-xl flex flex-col items-center gap-10">
        <h1 className="text-2xl md:text-4xl text-center font-medium leading-relaxed m-0">
          An ai tutor that takes you on a path to enhance your English
          conversational skills
        </h1>

        <form className="w-full flex flex-col">
          <div className="flex flex-col">
            <label className="text-neon-sky font-medium">First name</label>

            <input
              type="text"
              className="w-full border-2 border-neon-sky rounded-md px-4 py-3 bg-transparent outline-none focus:ring-2 focus:ring-neon-sky"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-neon-sky font-medium">Email</label>

            <input
              type="email"
              className="w-full border-2 border-neon-sky rounded-md px-4 py-3 bg-transparent outline-none focus:ring-2 focus:ring-neon-sky"
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="text-neon-sky font-medium">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              className="w-full border-2 border-neon-sky rounded-md px-4 py-3 pr-12 bg-transparent outline-none focus:ring-2 focus:ring-neon-sky"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 bottom-3 text-black/60 hover:text-black"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" className="mt-1 w-4 h-4 accent-neon-sky" />
            <span>I agree with Fluentbee's Privacy Policy and T of S.</span>
          </label>

          <p className="text-center font-semibold">Have an account?</p>
          <div className="flex justify-center">
            <ButtonBee className="px-12 py-3 text-lg shadow-xl">
              CHANGE YOUR LIFE
            </ButtonBee>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
