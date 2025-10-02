"use client";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  destination: string;
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton = ({ destination, children, className }: Props) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <button
      className="flex items-center justify-center"
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      <div
        className={String.raw`${
          mouseHover && "translate-x-full h-8"
        } w-14 h-10 aspect-square block rounded-full border border-zinc-800 bg-blue-600 transition-all`}
      ></div>
      <Link
        href={destination}
        className={String.raw`${className} ${
          mouseHover && "-translate-x-8"
        } -translate-x-4 block rounded-full border border-zinc-800 py-2.5 px-4 bg-blue-400 hover:bg-blue-600 text-white relative  hover:shadow-[5px_5px_0_rgba(30,30,30,1)] transition-all`}
      >
        {children}
      </Link>
    </button>
  );
};

export default PrimaryButton;
