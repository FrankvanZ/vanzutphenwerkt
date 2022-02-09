import Link from "next/link";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import Svgwhite from "./svgwhite";

export default function Header() {
  const [hamburgerExpanded, setHamburgerExpanded] = useState(false);
  return (
    <nav className="bg-zinc-900 h-20 top-0 inset-x-0 fixed z-20">
      <div className="mx-auto px-4">
        {/* Desktop */}
        <div className="flex justify-between py-4 md:px-12 px-4">
          <a href="/" className="flex">
            <div className="flex space-x-2 items-center">
              <Svgwhite />
              <span className="font-bold text-2xl text-slate-200">
                vanzutphenwerkt
              </span>
            </div>
          </a>
          <div className="flex justify-between">
            <div className="hidden md:flex items-center space-x-8 px-2">
              <Link href="/over-mij">
                <span className="text-slate-100">Over mij</span>
              </Link>
              <Link href="/mijn-werk">
                <span className="text-slate-100">Mijn werk</span>
              </Link>
            </div>
            {/* Mobile button */}
            <div className="py-2.5">
              <HamburgerButton
                cssClasses={`md:hidden`}
                isDarkMode={true}
                expanded={hamburgerExpanded}
                setHamburgerExpanded={setHamburgerExpanded}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile  */}
      <div
        className={`md:hidden flex flex-col z-10 space-y-8 items-stretch px-6 py-8 min-h-screen bg-zinc-900 top-20 absolute inset-x-0 transform transition duration-300 ease-in-out ${
          hamburgerExpanded ? "translate-x-56" : "translate-x-full"
        }`}
      >
        <Link href="/over-mij">
          <span className="text-slate-100 hover:bg-zinc-800">Over mij</span>
        </Link>
        <Link href="/mijn-werk">
          <span className="text-slate-100">Mijn werk</span>
        </Link>
      </div>
    </nav>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/pages");
}
