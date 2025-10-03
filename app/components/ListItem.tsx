import React from "react";

interface Props {
  children: React.ReactNode;
  colorScheme?: string;
}

const ListItem = ({ children, colorScheme }: Props) => {
  return (
    <li className="flex items-center">
      <div
        className={String.raw`${
          colorScheme ? `bg-${colorScheme}-400` : "bg-pink-400"
        } w-10 h-10 aspect-square block rounded-full border border-zinc-800`}
      ></div>
      <div
        className={String.raw`${
          colorScheme ? `bg-${colorScheme}-200` : "bg-pink-200"
        } -translate-x-2 border border-zinc-800 w-full h-full rounded-2xl py-2 px-4`}
      >
        <p>{children}</p>
      </div>
    </li>
  );
};

export default ListItem;
