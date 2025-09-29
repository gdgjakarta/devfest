import Link from "next/link";
import React from "react";

interface Props {
  destination: string;
  children: React.ReactNode;
  className?: string;
}

const SecondaryButton = ({ destination, children, className }: Props) => {
  return (
    <button>
      <Link
        href={destination}
        className={String.raw`${className} bg-white block rounded-xl py-2.5 px-4 border border-zinc-950 text-zinc-950 relative after:absolute after:z-50 after:block after:right-0 after:bottom-0 after:bg-pink-500`}
      >
        {children}
      </Link>
    </button>
  );
};

export default SecondaryButton;
