import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="mt-8 sm:hidden">
        <div className="bg-black backdrop-blur-sm bg-opacity-50 p-8 text-white flex justify-center sticky top-[100vh]">
          <a href="mailto:info@vanzutphenwerkt.nl" className="font-bold">
            info@vanzutphenwerkt.nl
          </a>
          <a href="tel:+31630617293" className="font-bold ml-8">
            Neem contact op per telefoon
          </a>
        </div>
      </div>

      <div className="mt-32 hidden sm:block -z-10">
        <div className="bg-black backdrop-blur-sm bg-opacity-50 p-8 text-white flex justify-center sm:fixed sm:bottom-0 w-screen">
          <a href="mailto:info@vanzutphenwerkt.nl" className="font-bold">
            info@vanzutphenwerkt.nl
          </a>
          <a href="tel:+31630617293" className="font-bold ml-8">
            Neem contact op per telefoon
          </a>
        </div>
      </div>
    </div>
  );
}
