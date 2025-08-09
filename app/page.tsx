import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:px-20">
      <header className="flex justify-between items-center gap-10">
        <div className="items-center gap-10 flex">
          <h3>
            <Image
              src="/logo.svg"
              alt="DevFest25 Jakarta Logo"
              width={200}
              height={40}
              className="dark:invert"
              priority
            />
          </h3>
          <nav>
            <ul className="flex justify-between gap-10 items-center">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#speaker">Speaker</Link>
              </li>
              <li>
                <Link href="#schedule">Schedule</Link>
              </li>
              <li>
                <Link href="#location">Location</Link>
              </li>
            </ul>
          </nav>
        </div>
        <PrimaryButton destination="#">Secure your seat</PrimaryButton>
      </header>
      <main>
        <section
          id="hero"
          className="w-full min-h-[80vh] flex flex-col justify-center gap-28"
        >
          <div className="grid gap-6">
            <h1 className="text-2xl md:text-6xl xl:text-8xl font-light text-zinc-950 dark:text-zinc-50">
              Compelling event to <br /> empower, not overwhelm.
            </h1>
            <div className="flex items-center gap-8">
              <p>December 04 - 05, 2025</p>
              <div className="h-[1px] w-52 bg-zinc-400 dark:bg-zinc-800"></div>
              <p>
                The Amazing Venue,
                <br />
                Ritz-Carlton, South Jakarta
              </p>
            </div>
          </div>

          <div className="grid gap-8">
            <p>
              An extraordinary event where enthusiasts and experts meet to
              <br /> share their passion for development across the board.
            </p>
            <div className="flex items-center gap-4">
              <SecondaryButton destination="#schedule">
                explore the talks
              </SecondaryButton>
              <PrimaryButton destination="#">secure your seat</PrimaryButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
