"use client";

import Image from "next/image";
import Link from "next/link";
import Bee from "@/images/Fluentbee_logo.svg";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <Image
          src={Bee}
          alt="Fluentbee logo"
          width={120}
          height={40}
          priority
        />

        {/* Close button */}
        <button onClick={onClose} aria-label="Close menu" type="button">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-6 py-8">
        <ul className="flex flex-col gap-6 text-lg font-medium text-gray-800">
          <li>
            <Link href="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={onClose}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={onClose}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
