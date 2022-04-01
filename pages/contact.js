import React from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default function contact() {
  return (
    <body className="bg-[url('/bg-sm.png')] lg:bg-[url('/bg.png')] bg-cover bg-no-repeat">
      <div className="container mx-auto z-50 p-8">
        <Logo />
        <div className="flex flex-col sm:flex-row sm:space-x-16 space-y-8">
          <div className="grow bg-black backdrop-blur-sm bg-opacity-50 mt-8 px-12 pb-12 pt-8 rounded-xl max-w-lg min-w-md">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="text-white" colSpan={2}>
                    Openingstijden
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-white">Maandag</td>
                  <td className="text-white pl-2">08:30 - 18:00</td>
                </tr>
                <tr>
                  <td className="text-white">Dinsdag</td>
                  <td className="text-white pl-2">08:30 - 18:00</td>
                </tr>
                <tr>
                  <td className="text-white">Woensdag</td>
                  <td className="text-white pl-2">08:30 - 18:00</td>
                </tr>
                <tr>
                  <td className="text-white">Donderdag</td>
                  <td className="text-white pl-2">08:30 - 18:00</td>
                </tr>
                <tr>
                  <td className="text-white">Vrijdag</td>
                  <td className="text-white pl-2">08:30 - 18:00</td>
                </tr>
                <tr>
                  <td className="text-white">Zaterdag</td>
                  <td className="text-white pl-2">09:00 - 14:00</td>
                </tr>
                <tr>
                  <td className="text-white">Zondag</td>
                  <td className="text-white pl-2">Gesloten</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grow bg-black backdrop-blur-sm bg-opacity-50 mt-8 px-12 pb-12 pt-8 rounded-xl max-w-lg">
            <div>
              <p className="text-white">
                Bent u op zoek naar een hovenier voor aanleg of onderhoud van uw
                tuin, neemt u dan vooral contact op via een van de onderstaande
                mogelijkheden
              </p>
              <p className="text-white mt-8">
                telefoon: &nbsp;
                <a href="tel:+31630617293" className="text-white font-bold">
                  +31630617293
                </a>
              </p>
              <p className="text-white">
                email: &nbsp;
                <a
                  href="mailto:info@vanzutphenwerkt.nl"
                  className="text-white font-bold"
                >
                  info@vanzutphenwerkt.nl
                </a>
              </p>
              <p className="text-white mt-4">KvK nr: 8316 9709</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
