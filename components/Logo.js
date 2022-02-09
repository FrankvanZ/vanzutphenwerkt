import React from "react";
import SvgWhite from "./svgwhite";

export default function Logo() {
  return (
    <div className="flex mx-8 justify-center sm:justify-start pt-8">
      <SvgWhite />
      <span className="flex items-center text-white text-2xl sm:text-4xl font-bold pb-2 pl-4">
        vanzutphenwerkt
      </span>
    </div>
  );
}
