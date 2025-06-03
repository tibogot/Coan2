import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "withArrow";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "px-6 py-2 cursor-pointer text-base  rounded-sm transition-all duration-300 inline-flex items-center justify-center gap-2 group";

  const variants = {
    primary: "bg-orange-400 text-white hover:bg-gray-800 w-fit",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    outline:
      "border border-white text-white hover:bg-orange-400 hover:text-white hover:border-orange-500",
    withArrow: "bg-orange-400 text-white hover:bg-gray-800 w-fit",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {variant === "withArrow" && (
        <ArrowRight
          size={20}
          weight="regular"
          className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
};

export default Button;
