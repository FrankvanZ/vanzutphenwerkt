import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="flex max-w-8xl max-h-4xl mx-8 pt-16">
      <div className="flex flex-col grow sm:flex-row sm:justify-between bg-black backdrop-blur-sm bg-opacity-50 p-6 rounded-2xl space-y-4">
        <div className="sm:w-1/2 py-8">
          <h1 className="text-2xl text-white text-bold">Neem contact op</h1>
          <p className="text-white font-thin text-small pt-4 pr-8">
            Stel hier uw vraag. Gegarandeerd antwoord binnen 3 werkdagen.
          </p>
        </div>
        <div className="text-white flex flex-col font-thin sm:w-1/2">
          <form className="flex flex-col">
            <label for="name" className="font-normal pb-1 py-4">
              Naam<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="bg-black backdrop-blur-sm bg-opacity-20 min-w-full p-1.5 font-thin text-sm"
            />

            <label for="email" className="font-normal pb-1 py-4">
              E-mail<span class="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="bg-black backdrop-blur-sm bg-opacity-20 min-w-full p-1.5 font-thin text-sm"
            />

            <label for="telephone" className="font-normal pb-1 py-4">
              Telefoon
            </label>
            <input
              type="tel"
              name="telephone"
              className="bg-black backdrop-blur-sm bg-opacity-20 min-w-full p-1.5 font-thin text-sm"
            />

            <label for="question" className="font-normal pb-1 py-4">
              Uw vraag<span class="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              type="text"
              name="question"
              className="bg-black backdrop-blur-sm bg-opacity-20 min-w-full p-1.5 font-thin text-sm"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
