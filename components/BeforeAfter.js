import React from "react";
import before1 from "../public/projects/1/before.jpg";
import after1 from "../public/projects/1/after.jpg";
import before2 from "../public/projects/2/before.jpeg";
import after2 from "../public/projects/2/after.jpg";
import before3 from "../public/projects/3/before.jpeg";
import after3 from "../public/projects/3/after.jpg";
import before4 from "../public/projects/4/before.jpeg";
import after4 from "../public/projects/4/after.jpg";
import before5 from "../public/projects/5/before.jpg";

import Image from "next/image";

export default function BeforeAfter() {
  //   const images = importAll(
  //     require.context("../public/projects/1", false, /\.(png|jpe?g|svg)$/)
  //   );

  //   console.log(images, images["after.jpg"].default.src);

  const project1text =
    "Voor een klant in eindhoven werd gevraagd de voortuin onderhanden te nemen, waaronder de wens voor een bewatering systeem";
  const project2text = "";
  const project3text = "";
  const project4text = "";
  return (
    <>
      <BeforeAfterSingle before={before1} after={after1} />
      <BeforeAfterSingle before={before2} after={after2} />
      <BeforeAfterSingle before={before3} after={after3} />
      <BeforeAfterSingle before={before4} after={after4} />
    </>
  );
}

function BeforeAfterSingle(props) {
  const { before, after, introtext } = props;
  return (
    <>
      <div className="w-full text-white pl-8">
        {introtext && <p className="text-white pb-4">{introtext}</p>}
      </div>
      <div className="p-8 w-full md:w-1/2 aspect-w-1 aspect-h-1">
        <p className="text-white pl-8">Vooraf</p>
        <Image alt="" src={before}></Image>
      </div>
      <div className="p-8 w-full md:w-1/2 aspect-w-1 aspect-h-1">
        <p className="text-white pl-8">Nadien</p>
        <Image alt="" src={after}></Image>
      </div>
    </>
  );
}

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }
