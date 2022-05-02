import React from "react";
import SvgWhite from "./svgwhite";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex mx-8 justify-between sm:justify-between pt-8 space-between">
      <div className="flex">
        <SvgWhite />
        <Link href="/">
          <a className="flex items-center text-white text-2xl sm:text-4xl font-bold pb-2 pl-4">
            vanzutphenwerkt
          </a>
        </Link>
        {/* <span className="flex items-center text-white text-2xl sm:text-4xl font-bold pb-2 pl-4">
          vanzutphenwerkt
        </span> */}
      </div>
      <div className="flex">
        {/* <Link href="/projecten">
          <a className="flex items-center text-white text-xl sm:text-2xl font-bold pb-2 pl-4 pt-2 xl:drop-shadow-[0_10px_8px_rgba(0,0,0,0.75)]">
            Mijn projecten
          </a>
        </Link> */}
        <Link href="/contact">
          <a className="flex items-center text-white text-xl sm:text-2xl font-bold pb-2 pl-4 pt-2 xl:drop-shadow-[0_10px_8px_rgba(0,0,0,0.75)]">
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
}
