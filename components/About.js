import React from "react";
import Image from "next/image";

export default function About() {
  const aboutText = `Begonnen in 2021 als zelfstandig hovenier. Van A-Z projecten tot
    een gefaseerde aanpak, vrijwel alles is mogelijk. Ik denk graag
    met u mee om binnen uw budget uw droomtuin te realiseren. Heeft u vragen of wilt u vrijblijvend advies omtrent
    de aanpak van uw tuin, `;
  const aboutSecondText = ` neem contact op via onderstaande gegevens.`;
  const clickHereText = `klikt u dan hier`;
  const aboutTitle = "Uw hovenier";
  const imgSrc = "/vince.jpeg";
  return (
    <div className="flex max-w-3xl max-h-4xl mx-8 pt-12">
      {/* 768 px and up  */}
      <div className="md:flex justify-between bg-black backdrop-blur-sm bg-opacity-50 md:p-6 p-6 rounded-2xl hidden sm:hidden">
        <div className="flex flex-col space-y-6">
          <h1 className="text-md md:text-xl text-white font-bold">
            {aboutTitle}
          </h1>
          <div>
            <Image
              src={imgSrc}
              alt="About"
              layout="responsive"
              height={782}
              width={464}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex px-4 py-12">
          <div className="max-w-sm">
            <p className="text-white sm:text-small font-thin pt-8">
              {aboutText}
              {/* <a href="#contact" className="underline font-bold">
                {clickHereText}
              </a> */}
              {aboutSecondText}
            </p>
          </div>
        </div>
      </div>
      {/* below 768 px  */}
      <div className="flex bg-black backdrop-blug-sm bg-opacity-50 p-6 rounded-2xl md:hidden justify-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl text-white font-bold pb-4">{aboutTitle}</h1>
          <div className="flex">
            <Image
              src={imgSrc}
              alt="About"
              height={307}
              width={181}
              className="rounded-xl"
            />
          </div>
          <p className="text-white text-small font-thin pt-2">
            {aboutText}{" "}
            {/* <a href="#contact" className="underline font-bold">
              {clickHereText}
            </a> */}
            {aboutSecondText}
          </p>
        </div>
      </div>
    </div>
  );
}
