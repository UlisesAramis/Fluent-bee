import React, { ButtonHTMLAttributes } from "react";

type ButtonBeeProps = {
  children: React.ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonBee = ({ children, className = "", ...props }: ButtonBeeProps) => {
  return (
    <button
      className={`
      group
      bg-black hover:bg-neon-sky text-white hover:text-black px-4 py-2 rounded mt-4 
      flex items-center justify-center gap-2
      transition-all duration-150
      active:scale-95 active:translate-y-0.5
      shadow-md active:shadow-sm
      ${className}
    `}
      {...props}
    >
      <span>{children}</span>
      <span className="text-[#F3E600] group-hover:text-black text-lg">
        {">"}
      </span>
    </button>
  );
};

export default ButtonBee;
