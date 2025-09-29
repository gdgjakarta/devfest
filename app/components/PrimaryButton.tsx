import Link from "next/link";
import React from "react";

interface Props {
  destination: string;
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton = ({ destination, children, className }: Props) => {
  return (
    <button>
      <Link
        href={destination}
        className={String.raw`${className} block rounded-xl border border-zinc-950 py-2.5 px-4 bg-linear-to-r from-green-600 to-green-600 text-white relative  hover:shadow-[5px_5px_0_rgba(30,30,30,1)] transition-all`}
      >
        {children}
      </Link>
    </button>
  );
};

export default PrimaryButton;
