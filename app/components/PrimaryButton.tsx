import Link from "next/link";
import React from "react";

interface Props {
  destination: string;
  children: React.ReactNode;
  className: string;
}

const PrimaryButton = ({ destination, children, className }: Props) => {
  return (
    <button>
      <Link
        href={destination}
        className={String.raw`${className} py-2.5 px-4 bg-black text-white relative inline-block before:absolute before:z-50 before:block before:-inset-2 before:bg-zinc-50 before:w-2 before:h-2 before:border before:border-zinc-950`}
      >
        {children}
      </Link>
    </button>
  );
};

export default PrimaryButton;
