import clsx from "clsx";
// import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { Marker } from "./Marker";

interface CustomButtonProps {
    icon: string;
    iconWidth?: number;
    iconHeight?: number;
    children: React.ReactNode;
    href?: string;
    containerClassName?: string; 
    onClick?: MouseEventHandler<HTMLButtonElement>;
    markerFill?: string; 
    // linkProps?: LinkProps;
}

const CustomButton = ({ icon, children, href, containerClassName, onClick, markerFill, iconWidth = 24, iconHeight = 24,}: CustomButtonProps) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>

        {icon && (
          <Image
            src={icon}
            width={iconWidth}
            height={iconHeight} 
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}

        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after" />
    </>
  );
  return href ? (
    <Link
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      href={href}
    >
      <Inner />
    </Link>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};
export default CustomButton;