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
              alt="Fluentbee logo"
              width={140}
              height={50}
              priority
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-8 text-sm font-medium text-black">
              <li>
                <Link
                  href="/our-planes"
                  className="hover:text-polar-glow hover:bold transition"
                >
                  Our planes
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-up"
                  className="hover:text-polar-glow hover:bold transition bg-mist-gray text-white px-4 py-2 rounded mt-4"
                >
                  Sign up
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-polar-glow hover:bold transition bg-black text-white px-4 py-2 rounded mt-4"
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
