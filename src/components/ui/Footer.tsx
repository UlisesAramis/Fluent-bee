import { FaSquareXTwitter } from "react-icons/fa6";

const links = [
  { label: "Privacy Policy" },
  { label: "Terms of Service" },
  { label: "Cookies Policy" },
];

const Footer = () => {
  return (
    <footer className="bg-solar-neon flex flex-col justify-center items-center gap-6 py-10">
      <FaSquareXTwitter className="text-black w-10 h-10 transition-transform duration-200 hover:scale-110 active:scale-95" />

      <div className="text-black w-5/6 flex flex-col md:flex-row justify-evenly items-center gap-4">
        {links.map(({ label }) => (
          <button
            key={label}
            className="
            cursor-pointer
            text-2xl
            "
          >
            {label}
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
