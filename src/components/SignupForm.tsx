"use client";

import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import ButtonBee from "./ui/ButtonBee";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-solar-neon min-h-screen flex items-center justify-center px-6 text-black">
      <div className="w-full max-w-xl flex flex-col items-center gap-8">
        <h1 className="text-3xl md:text-4xl text-center font-medium leading-relaxed">
          An ai tutor that takes you on a path to enhance your English
          conversational skills
        </h1>

        <form className="w-full flex flex-col gap-6">
          <input
            type="text"
            placeholder="First name"
            className="w-full border border-black/30 rounded-md px-5 py-3 bg-transparent outline-none focus:border-black transition"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-black/30 rounded-md px-5 py-3 bg-transparent outline-none focus:border-black transition"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-black/30 rounded-md px-5 py-3 pr-12 bg-transparent outline-none focus:border-black transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-black/60 hover:text-black"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" className="mt-1 w-4 h-4" />

            <span>I agree with Fluentbee's Privacy Policy and T of S.</span>
          </label>

          <p className="text-center font-semibold">Have an account ?</p>

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
