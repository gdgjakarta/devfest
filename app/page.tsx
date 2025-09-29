import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import Logo from "./components/Logo";
import {
  Calendar,
  Globe,
  Instagram,
  Pin,
  Twitter,
  X,
  Youtube,
} from "lucide-react";

export default function Home() {
  const navigationMenu = [
    { title: "About", url: "#about" },
    { title: "Speaker", url: "#speaker" },
    { title: "Schedule", url: "#schedule" },
    { title: "Location", url: "#location" },
  ];

  const speakers = [
    {
      image:
        "https://res.cloudinary.com/dn8xv9tll/image/upload/v1755500642/Danjuf_tdlrte.png",
      name: "Danang Juffry",
      role: "Community Manager Google Indonesia & Brunei",
    },
    {
      image:
        "https://res.cloudinary.com/dn8xv9tll/image/upload/v1755500642/Shandika_kuswe4.png",
      name: "Sandhika Galih",
      role: "Founder WPU | Web GDE",
    },
    {
      image:
        "https://res.cloudinary.com/dn8xv9tll/image/upload/v1755500642/Fini_mbwpqs.png",
      name: "Fini Charisa",
      role: "UI/UX Designer, Content Creator",
    },
    {
      image:
        "https://res.cloudinary.com/dn8xv9tll/image/upload/v1755500642/Joan_Santoso_jfodfp.png",
      name: "Joan Santoso",
      role: "GDE ML/AI",
    },
    {
      image:
        "https://res.cloudinary.com/dn8xv9tll/image/upload/v1755500642/Chendika_nrsgdh.png",
      name: "Chendika",
      role: "Content Creator, Women Techmaker",
    },
    {
      image:
        "https://res.cloudinary.com/dn8xv9tll/image/upload/v1755500642/Rizki_Mardita_jifc4p.png",
      name: "Rizki Mardita",
      role: "Content Creator, UI/UX Designer",
    },
  ];

  const topics = [
    "Machine Learning",
    "Cloud",
    "Artifical Intelligence",
    "Web",
    "Chrome",
    "Product Design",
    "Android",
    "Kotlin Multiplatform",
    "Flutter",
    "Firebase",
    "Data Analyst",
    "Self-Development",
  ];

  return (
    <div className="min-h-screen">
      <div className="z-50 bg-black border-b border-b-black backdrop:blur-md px-8 sm:px-20 sticky top-0">
        <div>
          <div className="px-8 py-2.5 grid place-content-center">
            <p className="text-xs text-white">
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
          <div className="w-full h-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
        </div>
        <header className="flex justify-between items-center gap-10 pt-8 pb-4">
          <div className="items-center gap-10 flex">
            <Logo className="invert" />
            <nav>
              <ul className="flex justify-between gap-10 items-center">
                {navigationMenu.map((menu, index) => (
                  <li key={index}>
                    <Link
                      href={menu.url}
                      className="text-white hover:text-red-600"
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <PrimaryButton destination="#" className="invert">
            Secure your seat
          </PrimaryButton>
        </header>
      </div>
      <main>
        <section
          id="hero"
          className="w-full min-h-[90vh] flex flex-col justify-center gap-28 bg-[url(/hero.png)] bg-cover bg-bottom"
        >
          <div className="grid gap-6">
            <h1 className="text-2xl md:text-6xl xl:text-8xl font-light text-white">
              Learn, Connect, and Grow.
            </h1>
            <div className="flex items-center gap-8">
              <p className="text-white">Saturday, November 30th 2025</p>
              <div className="h-[1px] w-52 bg-zinc-400 dark:bg-zinc-800"></div>
              <p className="text-white">
                Sasono Utomo & Sasono Langen Budoyo
                <br />
                Taman Mini Indonesia Indah
              </p>
            </div>
          </div>

          <div className="grid gap-8">
            <p className="text-white">
              An extraordinary event where enthusiasts and experts meet to
              <br /> share their passion for development across the board.
            </p>
            <div className="flex items-center gap-4">
              <SecondaryButton destination="#schedule" className="invert">
                explore the talks
              </SecondaryButton>
              <PrimaryButton destination="#" className="invert">
                secure your seat
              </PrimaryButton>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full min-h-[80vh] flex flex-col justify-center gap-28 bg-white py-16"
        >
          <div className="grid gap-6">
            <h1 className="text-2xl md:text-6xl xl:text-8xl font-light">
              About <br /> DevFest25 Jakarta
            </h1>
            <div className="py-8">
              <p className="max-w-1/2 text-justify">
                Explore over 1,000 chapters across 140 countries and meet
                like-minded developers from all levels and backgrounds.
              </p>
              <p className="max-w-1/2 text-justify">
                GDG Jakarta helps developers to learn, connect, create,
                innovate, build and grow together. The program aspires to be the
                most helpful resource for local developers to learn how to build
                on all Google platforms.
              </p>
              <p className="max-w-1/2 text-justify">
                DevFest Jakarta is part of a series of technology events
                organized by Google Developer Groups (GDG) Jakarta.
              </p>
              <p className="max-w-1/2 text-justify">
                DevFest is the largest and most inclusive community-led
                technology conference in the world! DevFest is proud to embrace
                developers from all corners of the globe and with diverse
                backgrounds. Every year, Google Developer Groups host DevFests,
                where attendees explore developer tools, learn from Google
                Developer Experts, and connect with other developers from their
                local community.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white dark:bg-white border-t border-b">
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center ">Newsletter</p>
              <p className="font-bold text-center">8.361 Subscribers</p>
            </div>
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center">Instagram</p>
              <p className="font-bold text-center">11.1K Followers</p>
            </div>
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center">Youtube</p>
              <p className="font-bold text-center">6.62K Subscribers</p>
            </div>
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center">Facebook</p>
              <p className="font-bold text-center">1.3K Followers</p>
            </div>
          </div>
        </section>
        <section
          id="recap"
          className="w-full min-h-screen flex flex-col justify-center gap-28 py-32 md:py-64 "
        >
          <div className="grid gap-6">
            <h1 className="text-2xl md:text-6xl xl:text-8xl font-light">
              Take a Look <br />
              at Last Year’s Edition
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] place-content-center   border-b">
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center text-6xl">2264</p>
              <p className="font-bold text-center">Offline RSVP</p>
            </div>
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center text-6xl">945</p>
              <p className="font-bold text-center">Offline attending</p>
            </div>
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center text-6xl">3.3K</p>
              <p className="font-bold text-center">Online attending</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] place-content-center   border-b">
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center text-6xl">20</p>
              <p className="font-bold text-center">Total speakers</p>
            </div>
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center text-6xl">6</p>
              <p className="font-bold text-center">GDE speakers</p>
            </div>
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center text-6xl">3</p>
              <p className="font-bold text-center">Women speakers</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] place-content-center   border-b">
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center text-6xl">6</p>
              <p className="font-bold text-center">Various topics</p>
            </div>
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center text-6xl">2024</p>
              <p className="font-bold text-center">01 December</p>
            </div>
            <div className="flex flex-col items-center py-8 px-10">
              <p className="text-center text-6xl">BRIN</p>
              <p className="font-bold text-center">
                (Badan Riset dan Inovasi Nasional)
              </p>
            </div>
          </div>
          <div className="min-h-screen flex-col">
            <div className="grid grid-cols-6 place-content-center">
              <div className="col-span-2 overflow-clip bg-[url(https://res.cloudinary.com/dn8xv9tll/image/upload/v1747357614/bwai-25_ejxdkp.jpg)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300"></div>
              <div className="relative flex flex-col items-end justify-end py-8 px-10 bg-orange-400">
                <p className="text-white">
                  Watch DevFest Jakarta 2024 Video Summary
                </p>
              </div>
              <div className="col-span-2 bg-[url(https://res.cloudinary.com/dn8xv9tll/image/upload/v1747357614/bwai-25_ejxdkp.jpg)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300"></div>
              <div className="grid place-content-center p-8">
                <Image
                  src="/arrow_up.svg"
                  alt="arrow up"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="grid grid-cols-6 place-content-center h-full bg-amber-300">
              <div className="grid place-content-center p-8">
                <Image
                  src="/arrow_up.svg"
                  alt="arrow up"
                  width={200}
                  height={200}
                />
              </div>
              <iframe
                src="https://www.youtube.com/embed/wN3T5NCTSAY?si=_EaweSUhIVHbjFXC"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full col-span-2 overflow-clip grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
              <div className="relative flex flex-col items-end justify-end py-8 px-10 bg-rose-600">
                <p className="text-white">
                  Watch DevFest Jakarta 2024 Video Summary
                </p>
              </div>
              <div className="col-span-2 bg-[url(https://res.cloudinary.com/dn8xv9tll/image/upload/v1747357614/bwai-25_ejxdkp.jpg)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300"></div>
            </div>
            <div className="grid grid-cols-6 place-content-center">
              <div className="col-span-2 overflow-clip bg-[url(https://res.cloudinary.com/dn8xv9tll/image/upload/v1747357614/bwai-25_ejxdkp.jpg)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300"></div>
              <div className="relative flex flex-col items-end justify-end py-8 px-10 bg-orange-400">
                <p className="text-white">
                  Watch DevFest Jakarta 2024 Video Summary
                </p>
              </div>
              <div className="col-span-2 bg-[url(https://res.cloudinary.com/dn8xv9tll/image/upload/v1747357614/bwai-25_ejxdkp.jpg)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300"></div>
              <div className="grid place-content-center p-8">
                <Image
                  src="/arrow_up.svg"
                  alt="arrow up"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="grid grid-cols-6 place-content-center h-full bg-amber-300">
              <div className="grid place-content-center p-8">
                <Image
                  src="/arrow_up.svg"
                  alt="arrow up"
                  width={200}
                  height={200}
                />
              </div>
              <iframe
                src="https://www.youtube.com/embed/wN3T5NCTSAY?si=_EaweSUhIVHbjFXC"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full col-span-2 overflow-clip grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
              <div className="relative flex flex-col items-end justify-end py-8 px-10 bg-rose-600">
                <p className="text-white">
                  Watch DevFest Jakarta 2024 Video Summary
                </p>
              </div>
              <div className="col-span-2 bg-[url(https://res.cloudinary.com/dn8xv9tll/image/upload/v1747357614/bwai-25_ejxdkp.jpg)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300"></div>
            </div>
            <div className="grid grid-cols-6 place-content-center h-full bg-amber-400">
              <div className="col-span-2 bg-[url(https://res.cloudinary.com/dn8xv9tll/image/upload/v1747357614/bwai-25_ejxdkp.jpg)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300"></div>
              <div className="grid place-content-center p-8">
                <Image
                  src="/arrow_up.svg"
                  alt="arrow up"
                  width={200}
                  height={200}
                />
              </div>
              <div className="col-span-2 bg-[url(https://res.cloudinary.com/dn8xv9tll/image/upload/v1747357614/bwai-25_ejxdkp.jpg)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300"></div>
              <div className="relative flex flex-col items-end justify-end py-8 px-10 bg-blue-600">
                <p className="text-white">
                  Watch DevFest Jakarta 2024 Video Summary
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="speaker"
          className="w-full min-h-screen flex flex-col justify-center gap-28 py-32 md:py-64 "
        >
          <div className="grid gap-6">
            <h1 className="text-2xl md:text-6xl xl:text-8xl font-light">
              Get inspired by people who build and ship products
            </h1>
            <div className="flex items-center">
              <p className="uppercase my-8 w-fit">The speakers</p>
              <div className="w-full h-[1px] bg-black"></div>
            </div>
            <div>
              <ul className="grid grid-cols-1 md:grid-cols-4 gap-y-16">
                {speakers.map((speaker, index) => (
                  <li key={index}>
                    <div>
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={280}
                        height={320}
                        className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="py-4 pr-3 flex flex-col gap-2">
                        <h4>{speaker.name}</h4>
                        <p className="text-sm tracking-normal">
                          {speaker.role}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section
          id="speaker"
          className="w-full min-h-screen flex flex-col justify-center gap-28 py-32 md:py-64 "
        >
          <div className="grid gap-6">
            <h1 className="text-2xl md:text-6xl xl:text-8xl font-light">
              Things we will cover at DevFest Jakarta 2025
            </h1>
            <div className="flex items-center">
              <p className="uppercase my-8 w-fit">Topic Coverage</p>
              <div className="w-full h-[1px] bg-black"></div>
            </div>
            <div>
              <ul className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {topics.map((topic, index) => (
                  <li key={index}>
                    <p className="py-4 px-8 rounded-full bg-white border">
                      {topic}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section
          id="speaker"
          className="w-full min-h-screen flex flex-col justify-center gap-28 py-32 md:py-64 "
        >
          <div className="grid gap-6">
            <h1 className="text-2xl md:text-6xl xl:text-8xl font-light">
              Meet them IRL at DevFest Jakarta 2025
            </h1>
            <div className="flex items-center">
              <p className="uppercase my-8 w-fit">The Venue</p>
              <div className="w-full h-[1px] bg-black"></div>
            </div>
            <div className="relative">
              <p className="absolute z-30 right-4 bottom-4 max-w-1/3 text-justify py-8 px-4 rounded-xl border bg-white dark:bg-white text-sm">
                Sasono Utomo & Sasono Langen Budoyo, or the Golden Snail
                Theater, is one of the most iconic landmarks inside Taman Mini
                Indonesia Indah (TMII), Jakarta. The building is uniquely shaped
                like a giant golden snail, symbolizing a mythical golden snail
                from Indonesian folklore.
              </p>
              <Image
                src={
                  "https://res.cloudinary.com/dn8xv9tll/image/upload/v1758879251/Tugu-Api-Pancasila-20x30-1-scaled_jrl3ih.jpg"
                }
                alt={"Tugu-Api-Pancasila TMII"}
                width={1920}
                height={1080}
                className="w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </section>
        <section className="py-8 h-screen bg-black flex flex-col justify-center items-start text-white">
          <h1 className="mb-8 md:mb-16 text-white">
            Interested to collaborate and gather community? We're opened for
            Sponsorship
          </h1>
          <PrimaryButton destination="#" className="invert">
            Apply for Sponsorship
          </PrimaryButton>
        </section>
        <section className="py-8 h-screen bg-black flex flex-col justify-center items-start">
          <h1 className="mb-8 md:mb-16 text-white">
            Invest in yourself by attending DevFest 25 Jakarta and go home with
            new knowledge & opportunity!
          </h1>
          <PrimaryButton destination="#" className="invert">
            Secure your Seat
          </PrimaryButton>
        </section>
      </main>
      <footer className="bg-black text-white">
        <section>
          <Image
            src={"/devfest.svg"}
            alt="devfest"
            width={120}
            height={120}
            className="w-full h-auto invert"
          />
        </section>
        <section className="flex justify-center md:justify-between py-16">
          <div className="flex flex-col gap-4 text-white">
            <div className="flex gap-2 text-white">
              <Calendar />
              <p>Dec 04 - 05, 2025</p>
            </div>
            <div className="flex gap-2 text-white">
              <Pin />
              <p>
                Ritz-Carlton Hotel,
                <br />
                South Jakarta
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <ul>
              <li className="mb-4">
                <p className="font-bold tracking-normal">Menu</p>
              </li>
              {navigationMenu.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.url}>{menu.title}</Link>
                </li>
              ))}
            </ul>
            <ul>
              <li className="mb-4">
                <p className="font-bold tracking-normal">Quick Links</p>
              </li>
              <li>
                <Link href="">Apply for Sponsorship</Link>
              </li>
              <li>
                <Link href="">Get to Venue</Link>
              </li>
              <li>
                <Link href="">Code of Conduct</Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex justify-between items-center gap-4 py-8">
          <p>Made with 💖 and good playlist 🎵 by GDG Jakarta</p>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href={
                  "https://www.instagram.com/gdgjakarta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
              >
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href={"https://www.youtube.com/@GDGJakarta"}>
                <Youtube />
              </Link>
            </li>
            <li>
              <Link href={"https://x.com/gdgjkt"}>
                <Twitter />
              </Link>
            </li>
            <li>
              <Link href={"https://gdg.community.dev/gdg-jakarta/"}>
                <Globe />
              </Link>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}
