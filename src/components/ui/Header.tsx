"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Bee from "@/images/Fluentbee_logo.svg";
import MobileNav from "@/components/ui/MobileNav";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <header className="bg-white  w-full">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src={Bee}
              alt="FluentBee logo with a bee flying"
              width={0}
              height={0}
              sizes="100vw"
              className="w-36 h-auto"
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-8 text-sm font-medium text-black">
              <li>
                <Link
                  href="/our-planes"
                  className="transition-all duration-150
                  hover:text-neon-sky
                  active:scale-90 active:translate-y-0.5"
                >
                  Our planes
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-up"
                  className="hover:text-polar-glow hover:bg-black  bg-mist-gray text-white px-4 py-2 rounded mt-4 transition-all duration-150
          
                  shadow-md
                  hover:brightness-110 hover:shadow-lg
                  
                  active:scale-95 active:translate-y-0.75 active:shadow-none"
                >
                  Sign up
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-black hover:bg-neon-sky  bg-black text-white px-4 py-2 rounded mt-4 transition-all duration-150
          
                  shadow-md
                  hover:brightness-110 hover:shadow-lg
                  
                  active:scale-95 active:translate-y-0.75 active:shadow-none"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            type="button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Header;
