import Image from "next/image";
import React from "react";

interface Props {
  className: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Image
      src="/logo.svg"
      alt="DevFest25 Jakarta Logo"
      width={200}
      height={40}
      className={String.raw`${className}`}
      priority
    />
  );
};

export default Logo;
