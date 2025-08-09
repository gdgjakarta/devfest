import Link from "next/link";
import React from "react";

interface Props {
  destination: string;
  children: React.ReactNode;
}

const PrimaryButton = ({ destination, children }: Props) => {
  return (
    <button>
      <Link
        href={destination}
        className="py-2.5 px-4 bg-zinc-950 text-zinc-50 relative inline-block before:absolute before:z-50 before:block before:-inset-2 before:bg-zinc-50 before:w-2 before:h-2 before:border before:border-zinc-950 dark:before:border-zinc-50 dark:before:bg-zinc-950 dark:bg-zinc-50 dark:text-zinc-950"
      >
        {children}
      </Link>
    </button>
  );
};

export default PrimaryButton;
