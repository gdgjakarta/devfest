import React from "react";
import PrimaryButton from "./PrimaryButton";
import Logo from "./Logo";
import { url } from "inspector";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const navigationMenu = [
    { title: "Details", url: "#about", isSpecial: false },
    { title: "Speaker", url: "#speakers", isSpecial: false },
    { title: "Schedule", url: "#schedule", isSpecial: false },
    { title: "Venue", url: "#venue" },
    // { title: "Hackfest", url: "/hackfest", isSpecial: true }, hidden until we determine the date
  ];

  return (
    <footer className="py-20 px-4">
      <div className="grid place-content-center gap-8">
        <div className="grid place-content-center">
          <Logo />
        </div>
        <ul className="flex items-center gap-8 justify-center">
          {navigationMenu.map((menu, index) => (
            <li key={index}>
              <Link href={menu.url}>{menu.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-8 justify-center">
          <li>
            <Link href="https://www.instagram.com/gdgjakarta/">
              <Instagram />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/gdgjakarta/">
              <Facebook />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/gdgjakarta/">
              <Youtube />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
