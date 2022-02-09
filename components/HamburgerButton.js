import { useState } from "react";

export default function HamburgerButton(props) {
  const hamburgerLineBg = props.isDarkMode ? "bg-white" : "bg-black";
  const hamburgerMenuBorder = props.isDarkMode
    ? "border-white"
    : "border-black";

  const extraCssClasses = props.cssClasses;
  const isOpen = props.expanded;
  const setIsOpen = props.setHamburgerExpanded;
  const genericHamburgerLine = `h-0.5 w-5 my-0.5 rounded-full transition ease transform duration-300 ${hamburgerLineBg} `;
  return (
    <button
      className={`${extraCssClasses} flex flex-col h-8 w-8 border-2 ${hamburgerMenuBorder} rounded justify-center items-center group`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-1.5 opacity-50 group-hover: opacity-100"
            : "opacity-100"
        }`}
      ></div>
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover: opacity-100"
        }`}
      ></div>
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover: opacity-100"
            : "opacity-100"
        }`}
      ></div>
    </button>
  );
}
