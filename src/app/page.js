import Image from "next/image";
import Link from "next/link";

const announcements = [
  {
    title: "PLMSFI now accepting scholarship applications for AY 2026-2027",
    date: "May 8, 2026",
    image: "/home/paper.png",
    tag: "Scholarships",
  },
  {
    title: "ICTSI Foundation opens 20 scholarship slots for PLM Students",
    date: "May 8, 2026",
    image: "/home/people.png",
    tag: "Partnerships",
  },
  {
    title: "Access Physiotherapy User Training for Students",
    date: "May 8, 2026",
    image: "/home/science.png",
    tag: "Training",
  },
];

const highlights = [
  "Chartered & Autonomous Status",
  "World-Class Faculty Research",
  "Community-Oriented Curriculum",
];

const campusNotes = [
  {
    icon: "/home/pin.png",
    text: "General Luna, corner Muralla St., Intramuros, Manila, 1002 Metro Manila",
  },
  {
    icon: "/home/phone.png",
    text: "(+63 2) 8643 2500",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.9fr)] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
                <span className="h-px w-8 bg-amber-700" />
                Established 1965
              </div>
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Academic Excellence &amp; Social Responsibility
              </h1>
              <div className="grid gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
                <div className="relative h-72 overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                  <Image
                    src="/home/diploma.png"
                    alt="Graduate holding a diploma in front of the university"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div className="space-y-4 pt-1 text-sm leading-6 text-slate-600">
                  <p>
                    PLM takes pride in being one of the country&apos;s leading
                    institutions for higher education, consistently achieving
                    high passing rates in board examinations and producing
                    competent professionals.
                  </p>
                  <ul className="space-y-3">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-semibold text-slate-800"
                      >
                        <Image
                          src="/home/check.png"
                          alt=""
                          width={18}
                          height={18}
                          className="shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-6 shadow-sm">
              <p className="max-w-4xl italic leading-7 text-slate-600">
                &ldquo;The university offers a comprehensive range of
                undergraduate and graduate programs in medicine, nursing,
                engineering, business, and humanities, all designed to foster
                social equity.&rdquo;
              </p>
            </div>
          </div>

          <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="border-b border-slate-200 px-1 pb-4">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                President&apos;s Corner
              </h2>
            </div>
            <div className="space-y-4 px-1 pt-4">
              <div className="flex items-center gap-3 rounded-2xl bg-amber-50 px-3 py-2">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-amber-200 text-amber-900">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-none stroke-current stroke-[1.8]"
                  >
                    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                    <path d="M4 20a8 8 0 0 1 16 0" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Domingo Y. Reyes, Jr.
                  </p>
                  <p className="text-xs text-slate-500">University President</p>
                </div>
              </div>

              <div className="relative h-40 overflow-hidden rounded-md bg-slate-200">
                <Image
                  src="/home/flower.png"
                  alt="Purple flower representing the president's corner feature image"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  Hope, Faith, and Gratitude
                </h3>
                <p className="text-xs text-slate-500">May 11, 2026</p>
                <p className="text-sm leading-6 text-slate-600">
                  A message of resilience and growth as we welcome another
                  academic year of excellence and community service.
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 transition hover:text-amber-900"
              >
                Read Message
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-100 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Latest Announcements
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Stay updated with university news and opportunities
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex h-10 items-center rounded-md bg-amber-700 px-5 text-sm font-semibold text-white transition hover:bg-amber-800"
            >
              View All
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {announcements.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-52 bg-slate-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    {item.tag}
                  </span>
                </div>
                <div className="space-y-3 px-5 py-4">
                  <p className="text-xs text-slate-500">{item.date}</p>
                  <h3 className="min-h-14 text-sm font-medium leading-6 text-slate-800">
                    {item.title}
                  </h3>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 transition hover:text-amber-900"
                  >
                    Read More
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_-36px_rgba(15,23,42,0.45)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between bg-[#082547] px-8 py-10 text-white">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">
                  Visit Our Campus
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
                  Located at the heart of the historic Walled City of
                  Intramuros, our campus is easily accessible and rich in
                  heritage.
                </p>
              </div>

              <div className="space-y-4 pt-10 text-sm text-slate-200">
                {campusNotes.map((note) => (
                  <div key={note.text} className="flex items-start gap-3">
                    <Image
                      src={note.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="mt-0.5 shrink-0"
                    />
                    <p className="max-w-xs leading-6">{note.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-90 bg-slate-100">
              <iframe
                title="PLM campus map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=120.9721%2C14.5863%2C120.9860%2C14.5955&layer=mapnik&marker=14.5909%2C120.9790"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
              <a
                href="https://www.openstreetmap.org/?mlat=14.5909&mlon=120.9790#map=17/14.5909/120.9790"
                target="_blank"
                rel="noreferrer"
                className="absolute left-4 top-4 rounded bg-white px-3 py-1.5 text-xs font-medium text-sky-600 shadow"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
