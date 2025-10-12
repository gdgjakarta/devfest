import Image from "next/image";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";

export default function Home() {
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

  const activities = [
    "Keynote",
    "Technical Talk",
    "Practical Demo",
    "Gem Assitant",
    "Light Talk",
    "WTM Sessions",
    "Networking Space",
    "Group Discussion",
    "Fireside Chat",
    "Company Sessions",
  ];

  return (
    <main className="text-zinc-600">
      <section
        id="hero"
        className="relative w-full min-h-[90vh] flex flex-col justify-center gap-20 md:gap-28 bg-cover bg-bottom"
      >
        <Image
          src="/devfest/asteriks_bold.svg"
          alt="arrow up"
          width={200}
          height={200}
          className="absolute right-0 translate-x-1/2 xl:translate-x-0 bottom-0 -z-50 "
        />
        <div className="grid gap-6">
          <Image
            src="/devfest/ellipsis_bold.png"
            alt="arrow up"
            width={200}
            height={200}
          />
          <h1 className="text-2xl md:text-6xl xl:text-8xl font-light">
            Connect, Learn,
            <br className="block md:hidden" /> and Grow.
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <p className=" ">Saturday, November 30th 2025</p>
            <div className="h-[1px] w-52 bg-zinc-400"></div>
            <p>
              Sasono Utomo & Sasono Langen Budoyo
              <br />
              Taman Mini Indonesia Indah
            </p>
          </div>
        </div>
        <div className="grid gap-8">
          <p>
            An extraordinary event where enthusiasts and experts meet to
            <br className="hidden md:block" /> share their passion for
            development across the board.
          </p>
          <div className="flex flex-row items-center gap-2">
            <SecondaryButton destination="#topics" className="w-full">
              explore the talks
            </SecondaryButton>
            <PrimaryButton destination="#" className="w-full">
              secure your seat
            </PrimaryButton>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="w-full min-h-[80vh] flex flex-col justify-center gap-20 md:gap-28 py-16"
      >
        <h1 className="text-2xl md:text-6xl xl:text-8xl font-light">
          About <br /> DevFest25 Jakarta
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:pr-16 flex flex-col gap-4">
            <p className="text-justify">
              Explore over <span className="font-semibold">1,000 chapters</span>{" "}
              across <span className="font-semibold">140 countries</span> and
              meet like-minded developers from all levels and backgrounds.
            </p>
            <p className="text-justify">
              <span className="font-semibold text-green-500">GDG Jakarta</span>{" "}
              helps developers to learn, connect, create, innovate, build and
              grow together. The program aspires to be the most helpful resource
              for local developers to learn how to build on all Google
              platforms.
            </p>
            <p className="text-justify">
              <span className="font-semibold text-blue-500">
                DevFest Jakarta
              </span>{" "}
              is part of a series of technology events organized by{" "}
              <span>Google Developer Groups (GDG) Jakarta</span>.
            </p>
            <p className="text-justify">
              <span className="italic text-pink-500 font-semibold">
                DevFest is the largest and most inclusive community-led
                technology conference in the world!
              </span>{" "}
              DevFest is proud to embrace developers from all corners of the
              globe and with diverse backgrounds. Every year, Google Developer
              Groups host DevFests, where attendees explore developer tools,
              learn from Google Developer Experts, and connect with other
              developers from their local community.
            </p>
          </div>
          <div>
            <div className="border-4 border-dashed border-blue-400 p-2 bg-white rounded-4xl overflow-clip h-fit">
              <div className="rounded-3xl overflow-clip h-fit">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Gou_5qTPzwI?si=F7Mn3UbO3O2hYBcZ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="block w-full h-auto aspect-video"
                ></iframe>
              </div>
            </div>
            <div className="flex items-center p-4 justify-center gap-5">
              <Image
                src="/devfest/plus-mini_bold.svg"
                width={200}
                height={200}
                className="h-14 w-auto"
                alt="plus mini bold element"
              />
              <Image
                src="/devfest/circles-combine_bold.svg"
                width={200}
                height={200}
                className="h-10 w-auto"
                alt="circles combine bold element"
              />
              <Image
                src="/devfest/x_bold.svg"
                width={200}
                height={200}
                className="h-14 w-auto"
                alt="x bold element"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center py-8 px-10 bg-white border border-zinc-800 hover:shadow-[5px_5px_0_rgba(66,133,244,1)] rounded-2xl transition-all">
            <p className="text-center ">Newsletter</p>
            <p className="font-bold text-center">8.361 Subscribers</p>
          </div>
          <div className="flex flex-col items-center py-8 px-10 bg-white border border-zinc-800 hover:shadow-[5px_5px_0_rgba(249,171,0,1)] rounded-2xl transition-all">
            <p className="text-center">Instagram</p>
            <p className="font-bold text-center">11.1K Followers</p>
          </div>
          <div className="flex flex-col items-center py-8 px-10 bg-white border border-zinc-800 hover:shadow-[5px_5px_0_rgba(234,67,53,1)] rounded-2xl transition-all">
            <p className="text-center">Youtube</p>
            <p className="font-bold text-center">6.62K Subscribers</p>
          </div>
          <div className="flex flex-col items-center py-8 px-10 bg-white border border-zinc-800 hover:shadow-[5px_5px_0_rgba(52,168,83,1)] rounded-2xl transition-all">
            <p className="text-center">Facebook</p>
            <p className="font-bold text-center">1.3K Followers</p>
          </div>
        </div>
      </section>
      <section className="w-full min-h-[80vh] flex flex-col justify-center gap-20 md:gap-28 py-16">
        <h1 className="text-2xl md:text-6xl xl:text-8xl font-light">
          What to expect <br /> at DevFest Jakarta
        </h1>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-4 md:gap-8">
            <li className="flex flex-col">
              <div className="h-28 py-4 flex items-center">
                <Image
                  src="/devfest/circles-combine_bold.svg"
                  width={200}
                  height={200}
                  className="h-14 w-auto"
                  alt="x bold element"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h4>Cutting-edge Content</h4>
                <p>
                  Learn how to build safe, secure, and scalable solutions with
                  the latest Google technologies. Get insights directly from
                  Googlers, Google Developer Experts (GDEs), and fellow
                  community members.
                </p>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="h-28 py-4 flex items-center">
                <Image
                  src="/devfest/angle-brackets_bold.svg"
                  width={200}
                  height={200}
                  className="h-16 w-auto"
                  alt="x bold element"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h4>Community Connections</h4>
                <p>
                  Connect with local developers in your area. Join engaging
                  panel discussions, Q&A sessions, and meetups to share ideas
                  and discover real-world projects that are shaping the future
                  of technology.
                </p>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="h-28 py-4 flex items-center">
                <Image
                  src="/devfest/plus-mini_bold.svg"
                  width={200}
                  height={200}
                  className="h-20 w-auto"
                  alt="x bold element"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h4>Hands-on Learning</h4>
                <p>
                  Get hands-on experience through full-day workshops, codelabs,
                  and debugging sessions. DevFest offers practical learning for
                  all skill levels.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section
        id="recap"
        className="relative w-full min-h-screen flex flex-col justify-center gap-28  py-20 md:py-40 "
      >
        <div className="grid gap-6">
          <h1 className="text-2xl md:text-6xl xl:text-8xl font-light">
            Take a Look <br />
            at Last Year’s Edition
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] place-content-center">
          <div className="flex flex-col items-center py-8 px-10">
            <p className="text-center text-6xl">2264</p>
            <p className="text-center">Offline RSVP</p>
          </div>
          <div className="flex flex-col items-center py-8 px-10">
            <p className="text-center text-6xl">945</p>
            <p className="text-center">Offline attending</p>
          </div>
          <div className="flex flex-col items-center py-8 px-10">
            <p className="text-center text-6xl">3.3K</p>
            <p className="text-center">Online attending</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] place-content-center">
          <div className="flex flex-col items-center py-8 px-10">
            <p className="text-center text-6xl">20</p>
            <p className="text-center">Total speakers</p>
          </div>
          <div className="flex flex-col items-center py-8 px-10">
            <p className="text-center text-6xl">6</p>
            <p className="text-center">GDE speakers</p>
          </div>
          <div className="flex flex-col items-center py-8 px-10">
            <p className="text-center text-6xl">3</p>
            <p className="text-center">Women speakers</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] place-content-center">
          <div className="flex flex-col items-center py-8 px-10">
            <p className="text-center text-6xl">6</p>
            <p className="text-center">Various topics</p>
          </div>
          <div className="flex flex-col items-center py-8 px-10">
            <p className="text-center text-6xl">2024</p>
            <p className="text-center">01 December</p>
          </div>
          <div className="flex flex-col items-center py-8 px-10">
            <p className="text-center text-6xl">BRIN</p>
            <p className="text-center">(Badan Riset dan Inovasi Nasional)</p>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-3 md:grid-cols-6 grid-rows-3">
          <div className="min-h-52 w-full col-span-2 overflow-clip bg-[url(https://assets.gdgjakarta.org/devfest/devfest-24-main.png)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300 border border-zinc-800 hover:shadow-[5px_5px_0_rgba(234,67,53,1)] rounded-2xl"></div>
          <div className="relative flex flex-col items-center justify-center py-8 px-10 rounded-2xl transition-all w-full">
            <p className="font-semibold uppercase text-2xl text-zinc-400 tracking-widest rotate-90 md:rotate-0">
              CONNECT
            </p>
          </div>
          <div className="hidden md:block min-h-52 w-full col-span-2 bg-[url(https://assets.gdgjakarta.org/devfest/devfest-24-networking.png)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300 border border-zinc-800 hover:shadow-[5px_5px_0_rgba(52,168,83,1)] rounded-2xl"></div>
          <div className="hidden md:grid place-content-center p-8">
            <Image
              src="/devfest/globe_monoline.svg"
              alt="arrow up"
              width={200}
              height={200}
              className="scale-75 opacity-50"
            />
          </div>
          <div className="hidden md:grid place-content-center p-8">
            <Image
              src="/devfest/love_monoline.svg"
              alt="arrow up"
              width={200}
              height={200}
              className="scale-75 opacity-50"
            />
          </div>
          <iframe
            src="https://www.youtube.com/embed/wN3T5NCTSAY?si=_EaweSUhIVHbjFXC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="hidden md:block w-full h-full col-span-2 overflow-clip grayscale hover:grayscale-0 transition-all duration-300 bg-white border border-zinc-800 hover:shadow-[5px_5px_0_rgba(249,171,0,1)] rounded-2xl"
          ></iframe>
          <div className="relative flex flex-col items-center justify-center py-8 px-10 transition-all">
            <p className="font-semibold uppercase text-2xl tracking-widest rotate-90 md:rotate-0 text-zinc-400">
              LEARN
            </p>
          </div>
          <div className="min-h-52 w-full col-span-2 bg-[url(https://assets.gdgjakarta.org/devfest/devfest-24-qna-attendee.png)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300 border border-zinc-800 hover:shadow-[5px_5px_0_rgba(66,133,244,1)] rounded-2xl">
            ini
          </div>
          <div className="col-span-2 overflow-clip bg-[url(https://assets.gdgjakarta.org/devfest/devfest-24-qna-speaker.png)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300 border border-zinc-800 hover:shadow-[5px_5px_0_rgba(52,168,83,1)] rounded-2xl"></div>
          <div className="relative flex flex-col items-center justify-center py-8 px-10 transition-all">
            <p className="font-semibold uppercase text-2xl tracking-widest rotate-90 md:rotate-0 text-zinc-400">
              GROW
            </p>
          </div>
          <div className="hidden md:block min-h-52 w-full col-span-2 bg-[url(https://assets.gdgjakarta.org/devfest/devfest-24-workshop.png)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300 border border-zinc-800 hover:shadow-[5px_5px_0_rgba(249,171,0,1)] rounded-2xl"></div>
          <div className="hidden md:grid place-content-center p-8">
            <Image
              src="/devfest/asterisk_monoline.svg"
              alt="arrow up"
              width={200}
              height={200}
              className="scale-75 opacity-50"
            />
          </div>
        </div>
      </section>
      <div className="w-full grid place-content-center">
        <Image
          src="/devfest/4-curly-brackets_monoline.svg"
          alt="arrow up"
          width={200}
          height={200}
          className="h-36 -z-50 xl:scale-200"
        />
      </div>
      <section
        id="topics"
        className="relative w-full min-h-screen flex flex-col justify-center gap-28 py-20 md:py-40 "
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
            <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              {topics.map((topic, index) => (
                <li key={index}>
                  <p className="py-4 px-8 rounded-full bg-white border text-center">
                    {topic}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section
        id="activities"
        className="w-full min-h-screen flex flex-col justify-center gap-28  py-20 md:py-40 "
      >
        <div className="grid gap-6">
          <h1 className="text-2xl md:text-6xl xl:text-8xl font-light">
            What you can&apos;t missed at DevFest Jakarta 2025
          </h1>
          <div className="flex items-center">
            <p className="uppercase my-8 w-fit">Activities Coverage</p>
            <div className="w-full h-[1px] bg-black"></div>
          </div>
          <div>
            <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              {activities.map((activity, index) => (
                <li key={index}>
                  <p className="py-4 px-8 rounded-full bg-white border text-center">
                    {activity}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section
        id="speakers"
        className="w-full min-h-screen flex flex-col justify-center gap-28 py-20 md:py-40 "
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
            <h2>Will be announced soon!</h2>
            {/* <ul className="grid grid-cols-1 md:grid-cols-4 gap-y-16 gap-x-4">
              {speakers.map((speaker, index) => (
                <li key={index}>
                  <div>
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={280}
                      height={320}
                      className="w-full rounded-xl border border-zinc-800 h-80 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="flex">
                      <div className="block border border-zinc-800 bg-green-400 rounded-tl-2xl rounded-b-2xl w-12 h-auto"></div>
                      <div className="flex flex-col gap-2 border border-zinc-800 bg-green-100 rounded-2xl px-4 py-2 -translate-y-1/4 -translate-x-2 w-full">
                        <h4>{speaker.name}</h4>
                        <p className="text-sm tracking-normal">
                          {speaker.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </section>
      <section
        id="venue"
        className="w-full min-h-screen flex flex-col justify-center gap-28  py-20 md:py-40 "
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.838326325396!2d106.89122264488518!3d-6.301838165622641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed5e792a011d%3A0xc2706e3045002005!2sSasono%20Langen%20Budoyo%2C%20Ceger%2C%20Cipayung%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1759667667945!5m2!1sen!2sid"
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-40 md:h-96 object-cover md:grayscale hover:grayscale-0 transition-all duration-300 rounded-xl border border-zinc-800"
            ></iframe>
            <div className="md:absolute z-30 right-4 bottom-4 md:translate-y-2/3 md:max-w-1/2 flex">
              <div className="flex flex-col items-center justify-center">
                <div className="block w-10 h-10 aspect-square bg-yellow-100 border border-zinc-800 rounded-full"></div>
                <div className="block w-10 h-10 aspect-square bg-yellow-100 border border-zinc-800 rounded-full"></div>
                <SecondaryButton
                  destination="https://maps.app.goo.gl/PgP1A9Zh7ebeaiek6"
                  className="bg-yellow-500 w-fit h-fit"
                >
                  Open in Maps
                </SecondaryButton>
              </div>
              <p className="text-justify py-8 px-4 rounded-xl border bg-white dark:bg-white text-sm h-fit">
                <span className="font-semibold">
                  Sasono Utomo & Sasono Langen Budoyo
                </span>
                , or the{" "}
                <span className="font-semibold">Golden Snail Theater</span>, is
                one of the most iconic landmarks inside Taman Mini Indonesia
                Indah (TMII), Jakarta. The building is uniquely shaped like a
                giant golden snail, symbolizing a mythical golden snail from
                Indonesian folklore.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-100 rounded-xl">
          <div className="flex flex-col items-center">
            <Image
              src="/devfest/diecut.svg"
              alt="arrow up"
              width={200}
              height={200}
            />
            <div className="p-2 bg-pink-100 rounded-2xl">
              <div className="px-4 py-8 border border-pink-500 rounded-xl w-full grid gap-4">
                <h2>Invest in yourself</h2>
                <p className="text-pink-500">
                  Attend DevFest 25 Jakarta and go home with new knowledge &
                  opportunity!
                </p>
                <PrimaryButton destination="#" className="w-fit">
                  Secure your Seat
                </PrimaryButton>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={
                "https://res.cloudinary.com/dn8xv9tll/image/upload/v1747048134/Dev_Fest_24_Cover_xm4dwy.png"
              }
              alt={"Tugu-Api-Pancasila TMII"}
              width={1080}
              height={1080}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 rounded-xl border border-zinc-800 hover:shadow-[5px_5px_0_rgba(66,133,244,1)]"
            />
          </div>
        </div>
      </section>
      <section className="pb-20 p-4">
        <div className="relative p-8 bg-purple-400 border border-zinc-800 rounded-2xl flex flex-col items-center gap-8">
          <Image
            src="/devfest/pattern.png"
            alt="arrow up"
            width={200}
            height={200}
            className="w-auto h-36 md:h-44 absolute left-0 bottom-0 opacity-30"
          />
          <Image
            src="/devfest/pattern.png"
            alt="arrow up"
            width={200}
            height={200}
            className="hidden md:block w-auto h-28 md:h-44 absolute right-0 bottom-0 -scale-x-100 opacity-30"
          />
          <h2 className="md:max-w-2/3 text-center text-white">
            Join our Discord server to stay updated!
          </h2>
          <PrimaryButton destination="" className="z-50">
            Join Now
          </PrimaryButton>
        </div>
      </section>
    </main>
  );
}
