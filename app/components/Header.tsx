"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import PrimaryButton from "./PrimaryButton";
import { Hamburger } from "lucide-react";
import NavItem from "./NavItem";

const Header = () => {
  const [isVisible, setisVisible] = useState(true);
  const [isNavOpened, setIsNavOpened] = useState(false);

  const navigationMenu = [
    { title: "Details", url: "#about", isSpecial: false },
    { title: "Speaker", url: "#speakers", isSpecial: false },
    { title: "Schedule", url: "#schedule", isSpecial: false },
    { title: "Venue", url: "#venue" },
    { title: "Hackfest", url: "/hackfest", isSpecial: true },
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
              className="hidden md:flex flex-row justify-between gap-2 items-center"
            >
              {navigationMenu.map((menu, index) => (
                <li key={index}>
                  <NavItem
                    url={menu.url}
                    label={menu.title}
                    isSpecial={menu.isSpecial}
                  />
                </li>
              ))}
            </ul>
            <div
              id="mobile_navigation"
              className={String.raw`${
                isNavOpened ? "translate-x-0 block" : "translate-x-full hidden"
              } md:hidden flex flex-col z-50 items-center fixed w-screen h-screen left-0 right-0 top-0 bottom-0 bg-white pb-10 transition-all duration-500`}
            >
              <div className="bg-linear-to-r from-zinc-100/0 via-pink-100 to-zinc-100/0 w-full px-8 py-4 grid place-content-center">
                <p className="text-xs text-center px-8">
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
              <div className="flex w-full justify-between items-center px-8 pt-8 pb-4 border-b border-b-zinc-200">
                <Logo />
                <button onClick={() => setIsNavOpened(false)}>Close</button>
              </div>
              <ul className="grid w-[95vw] h-full m-4 overflow-clip rounded-2xl border border-zinc-800">
                {navigationMenu.map((menu, index) => (
                  <li
                    key={index}
                    onClick={() => setIsNavOpened(false)}
                    className="flex items-center justify-center p-2"
                  >
                    {!menu.isSpecial && (
                      <div
                        className={String.raw`w-11 h-10 aspect-square block rounded-full border border-zinc-800 bg-pink-400`}
                      ></div>
                    )}
                    <div
                      className={String.raw`${
                        menu.isSpecial
                          ? ""
                          : "bg-pink-200 -translate-x-2 border border-zinc-800"
                      } w-full h-full rounded-full`}
                    >
                      <NavItem
                        url={menu.url}
                        label={menu.title}
                        isSpecial={menu.isSpecial}
                      />
                    </div>
                  </li>
                ))}
                <li
                  onClick={() => setIsNavOpened(false)}
                  className="flex items-center justify-centercenter outline py-2.5 px-4 bg-linear-to-r from-blue-600 to-rose-400 text-white rounded-full m-2"
                >
                  <Link href="#" className="w-full text-center">
                    Secure your seat
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="hidden md:block">
          <PrimaryButton destination="#">Secure your seat</PrimaryButton>
        </div>
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
