import Link from "next/link";
import React from "react";
interface Props {
  url: string;
  label: string;
  isSpecial?: boolean;
}

const NavItem = ({ url, label, isSpecial }: Props) => {
  return (
    <Link
      href={url}
      className={String.raw`${
        isSpecial
          ? "border border-blue-600 hover:bg-blue-600 hover:text-white"
          : "hover:text-blue-600 hover:bg-zinc-100"
      } font-medium hover:font-bold px-4 py-2 rounded-full transition-all w-full h-full text-3xl md:text-base grid place-content-center`}
    >
      {label}
    </Link>
  );
};

export default NavItem;
