import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link href="/">
      <Image
        src="/devfest/logo_devfest.svg"
        alt="DevFest25 Jakarta Logo"
        width={200}
        height={64}
        className={String.raw`${className}`}
        priority
      />
    </Link>
  );
};

export default Logo;
