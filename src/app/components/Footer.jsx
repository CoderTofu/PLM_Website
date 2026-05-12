export default function Footer() {
  return (
    <footer className="bg-[#062A55] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          <div>
            <h2 className="text-md font-semibold text-[#F0C86A]">PLM</h2>
            <p className="mt-5 md:max-w-[250px] text-sm text-[#AFC1DA]">
              Empowering the Citizens of Manila through world-class academic
              training and civic engagement.
            </p>
          </div>

          <div>
            <h2 className="text-md font-semibold uppercase text-[#F0C86A]">
              Contact Us
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-[#AFC1DA]">
              <li>University Registry</li>
              <li>Admissions Office</li>
              <li>Public Affairs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-md font-semibold uppercase text-[#F0C86A]">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-[#AFC1DA]">
              <li>Campus Map</li>
              <li>Academic Calendar</li>
              <li>PLM Portal</li>
            </ul>
          </div>

          <div>
            <h2 className="text-md font-semibold uppercase text-[#F0C86A]">
              Admissions
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-[#AFC1DA]">
              <li>Undergraduate</li>
              <li>Graduate Programs</li>
              <li>Scholarship Guidelines</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-4 text-xs text-[#AFC1DA] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Pamantasan ng Lungsod ng Maynila. All Rights Reserved.</p>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Legal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
