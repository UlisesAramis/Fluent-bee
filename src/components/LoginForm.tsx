"use client";

import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import ButtonBee from "./ui/ButtonBee";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-solar-neon min-h-screen flex items-center justify-center px-6 text-black">
      <div className="w-full max-w-xl flex flex-col items-center gap-10">
        <h1 className="text-5xl font-medium">Login</h1>

        <form className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
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

          <div className="flex justify-between font-semibold text-lg">
            <button type="button" className="hover:underline">
              Create an account
            </button>

            <button type="button" className="hover:underline">
              Forgot password?
            </button>
          </div>

          <div className="flex justify-center">
            <ButtonBee className="px-14 py-3 text-lg">LOGIN</ButtonBee>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
