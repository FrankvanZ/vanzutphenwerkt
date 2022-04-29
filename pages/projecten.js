import React from "react";
import Logo from "../components/Logo";
import BeforeAfter from "../components/BeforeAfter";

export default function projecten() {
  return (
    <body className="bg-[url('/bg-sm.png')] lg:bg-[url('/bg.png')] bg-cover bg-no-repeat">
      <div className="container mx-auto z-50 p-8">
        <Logo />
        <div className="flex justify-center bg-black backdrop-blur-sm bg-opacity-50 rounded-xl text-white mt-16 max-w-2xl p-6">
          <p>
            Hieronder kunt u een indruk krijgen van enkele tuinen (projecten)
            die ik heb mogen realiseren voor mijn klanten.
          </p>
        </div>
        <div className="flex flex-wrap flex-col sm:flex-row justify-between bg-black backdrop-blur-sm bg-opacity-50 mt-8 px-12 pb-12 pt-8 rounded-xl">
          <BeforeAfter />
        </div>
      </div>
    </body>
  );
}
