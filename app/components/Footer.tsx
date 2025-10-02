import React from "react";
import PrimaryButton from "./PrimaryButton";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-8">
        <div>
          <h2 className="mb-4">Learn, Connect, and Grow.</h2>
          <PrimaryButton destination="#" className="w-fit">
            Secure your seat
          </PrimaryButton>
        </div>
        <div className="grid gap-4">
          <Logo />
          <p className="text-sm">
            An extraordinary event where enthusiasts and experts meet to share
            their passion for development across the board.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center py-4 border-t border-zinc-200">
        <p>Copyright © DevFest Jakarta 2025</p>
        <p>Made with love by GDG Jakarta</p>
      </div>
    </footer>
  );
};

export default Footer;
