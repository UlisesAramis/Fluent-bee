import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";

const links = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookies Policy" },
];

const Footer = () => {
  return (
    <footer className="h-40 bg-solar-neon flex flex-col justify-center items-center gap-y-5">
      <FaSquareXTwitter className="text-black w-10 h-10" />

      <div className="text-black w-5/6 flex flex-col md:flex-row justify-evenly items-center pb-20">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="text-2xl">
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
