import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const links = {
    Home: "/",
    About: "/about",
    Academics: "/academics",
    Student: "/student",
  };

  return (
    <nav className="flex justify-between border py-2 px-20">
      <Link href="/" className="flex items-center gap-4 cursor-pointer">
        <div className="relative h-16 w-16">
          <Image src={"/plm-icon.png"} fill={true} alt="PLM Icon" />
        </div>
        <h1 className="font-bold text-lg">Pamantasan ng Lungsod ng Maynila</h1>
      </Link>
      <div className="flex gap-v items-center">
        {Object.entries(links).map(([keyName, value]) => {
          return (
            <Link href={value} key={keyName} className="link">
              {keyName}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center ">
        <Link
          href="https://plm.pinnacle.edu.ph/aims/index.php"
          target="_blank"
          className="bg-[#001E40] px-3 py-1 rounded-md text-white"
        >
          AIMS Portal
        </Link>
      </div>
    </nav>
  );
}
