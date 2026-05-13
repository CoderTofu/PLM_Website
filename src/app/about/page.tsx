import Image from "next/image";

const leaders = [
  {
    name: "Atty. Domingo Y. Reyes, Jr.",
    role: "University President",
    image: "/about/president.png",
  },
  {
    name: "Enrico Aurelio L. Torres",
    role: "VP for Finance",
    image: "/about/finance.png",
  },
  {
    name: "Ronald P. Romero",
    role: "VP for Academic Affairs",
    image: "/about/romero.png",
  },
  {
    name: "Relson P. Moral",
    role: "Chief Executive Staff",
    image: "/about/ces.png",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Legacy highlight section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
              Our Legacy
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900">
              A Beacon of Excellence in Intramuros
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              PLM takes pride in being one of the country&apos;s leading
              institutions for higher education, consistently achieving high
              passing rates in board examinations and producing competent
              professionals across various fields. The university offers a
              comprehensive range of undergraduate and graduate programs.
            </p>

            <div className="border-l-2 border-amber-700 pl-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-md bg-slate-100 px-6 py-4 text-center">
                  <p className="text-3xl font-semibold text-slate-800">50+</p>
                  <p className="text-xs text-slate-500">Years of Excellence</p>
                </div>
                <div className="rounded-md bg-slate-100 px-6 py-4 text-center">
                  <p className="text-3xl font-semibold text-slate-800">
                    10,000+
                  </p>
                  <p className="text-xs text-slate-500">Total Students</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-72 overflow-hidden rounded-md bg-slate-200 md:h-80 lg:h-full lg:min-h-80">
            <Image
              src="/about/diploma-cert.png"
              alt="Certificate and books highlighting academic achievement"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Vision and mission cards */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-20">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-md bg-[#062b57] px-6 py-7 text-white shadow-sm">
            <div className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400">
              <Image
                src="/about/eye.png"
                alt="Vision icon"
                width={18}
                height={18}
              />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">Vision</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">
              The Pamantasan ng Lungsod ng Maynila shall be a premier university
              that provides globally competitive and socially responsible
              graduates, generating knowledge and innovative technology for the
              development of the city of Manila and the country.
            </p>
          </article>

          <article className="rounded-md border border-slate-200 bg-white px-6 py-7 shadow-sm">
            <div className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0a3a71]">
              <Image
                src="/about/flag.png"
                alt="Mission icon"
                width={18}
                height={18}
              />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Mission
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              To provide a culture of excellence in education, research, and
              public service that produces globally-competitive graduates and
              community-oriented citizens. We strive to maintain academic
              standards that reflect our institutional values of Karunungan,
              Kaunlaran, at Kadakilaan.
            </p>
          </article>
        </div>
      </section>

      {/* Leadership section */}
      <section className="bg-slate-100 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
              University Leadership
            </h2>
            <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-amber-700" />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="rounded-md border border-slate-200 bg-white px-4 py-5 text-center shadow-sm"
              >
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-md bg-slate-200">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">
                  {leader.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{leader.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
