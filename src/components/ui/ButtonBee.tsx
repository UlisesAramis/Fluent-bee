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
      bg-black hover:bg-neon-sky text-white hover:text-black 
      px-4 py-2 rounded mt-4 
      flex items-center justify-center gap-2
      select-none
      transition-all duration-100 ease-out
      active:scale-[0.97]        /* Solo se encoge un 3% */
      active:translate-y-px   /* Baja apenas un pixel */
      shadow-md active:shadow-sm
      
      ${className}
    `}
      {...props}
    >
      <span>{children}</span>
      <span className="text-[#F3E600] group-hover:text-black text-lg transition-colors">
        {">"}
      </span>
    </button>
  );
};

export default ButtonBee;
