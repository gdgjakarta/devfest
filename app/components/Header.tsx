"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import PrimaryButton from "./PrimaryButton";
import { Hamburger } from "lucide-react";

const Header = () => {
  const [isVisible, setisVisible] = useState(true);
  const [isNavOpened, setIsNavOpened] = useState(false);

  const navigationMenu = [
    { title: "Home", url: "/" },
    { title: "Details", url: "#about" },
    { title: "Speaker", url: "#speakers" },
    { title: "Schedule", url: "#schedule" },
    { title: "Venue", url: "#venue" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setisVisible(false);
      } else {
        setisVisible(true);
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, [isVisible]);

  return (
    <div
      className={String.raw`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-white z-50 border-b border-b-zinc-200 backdrop:blur-md px-8 sm:px-20 sticky top-0 transition-all`}
    >
      <div className="bg-linear-to-r from-zinc-100/0 via-pink-100 to-zinc-100/0 w-full px-8 py-4 grid place-content-center">
        <p className="text-xs text-center">
          Can't join this year?
          <span className="text-rose-600 mx-2">
            <Link href="https://www.youtube.com/@GDGJakarta" target="_blank">
              Watch LIVE
            </Link>
          </span>{" "}
          on YouTube to see the talks & Keynote →
        </p>
      </div>
      <header className="flex justify-between items-center gap-10 pt-8 pb-4">
        <div className="items-center gap-10 flex">
          <Logo />
          <nav>
            <ul
              id="desktop_navigation"
              className="hidden md:flex flex-row justify-between gap-10 items-center"
            >
              {navigationMenu.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.url} className="  hover:text-red-600">
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className={String.raw`${
                isNavOpened ? "translate-x-0" : "translate-x-full"
              } md:hidden flex flex-col z-50 items-center fixed w-screen h-screen left-0 right-0 top-0 bottom-0 bg-white pb-10 px-4 transition-all duration-500`}
            >
              <div className="bg-linear-to-r from-zinc-100/0 via-pink-100 to-zinc-100/0 w-full px-8 py-4 grid place-content-center">
                <p className="text-xs text-center">
                  Can't join this year?
                  <span className="text-rose-600 mx-2">
                    <Link
                      href="https://www.youtube.com/@GDGJakarta"
                      target="_blank"
                    >
                      Watch LIVE
                    </Link>
                  </span>{" "}
                  on YouTube to see the talks & Keynote →
                </p>
              </div>
              <div className="flex w-full justify-between items-center pt-8 pb-4 border-b border-b-zinc-200">
                <Logo />
                <button onClick={() => setIsNavOpened(false)}>Close</button>
              </div>
              <ul id="mobile_navigation" className="grid w-full h-full py-8">
                {navigationMenu.map((menu, index) => (
                  <li
                    key={index}
                    className="w-full grid place-content-center py-2 px-4"
                  >
                    <Link href={menu.url} className="  hover:text-red-600">
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <PrimaryButton destination="#">Secure your seat</PrimaryButton>
            </div>
          </nav>
        </div>
        <PrimaryButton destination="#" className="hidden md:block">
          Secure your seat
        </PrimaryButton>
        <button
          className="block md:hidden"
          onClick={() => setIsNavOpened(true)}
        >
          <Hamburger />
        </button>
      </header>
    </div>
  );
};

export default Header;
