import { Hanken_Grotesk } from "next/font/google";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "PLM Website",
  description:
    'Pamantasan ng Lungsod ng Maynila (PLM) is the first and only chartered and autonomous university funded by a city government. It was created by the Congress of the Philippines by virtue of Republic Act No. 4196 or "An Act Authorizing the City of Manila to Establish and Operate the University of City of Manila" on June 19, 1965.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hanken.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <HeroSection></HeroSection>
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
