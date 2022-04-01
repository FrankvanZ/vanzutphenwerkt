import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  name: string;
  email: string;
  telephone: string;
  question: string;
  token: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [submitting, setSubmitting] = useState<boolean>(false);

  const problemsWithContactForm = () => {
    return (
      <div className="flex justify-center max-w-8xl bg-black backdrop-blur-sm bg-opacity-50 mt-8 rounded-2xl">
        <div className="flex flex-col px-8 py-12">
          <p className="text-white">
            Op dit moment ervaren wij problemen met het contactformulier en
            willen we u vragen een kijkje te nemen op de&nbsp;
            <a href="/contact" className="text-white font-bold">
              contactpagina
            </a>
            &nbsp;om te zien hoe u contact op kunt nemen.
          </p>
          {/* <p className="text-white mt-1">
            of op{" "}
            <a href="/projecten" className="text-white font-bold">
              mijn projecten pagina
            </a>{" "}
            om alvast een indruk te krijgen van wat er mogelijk is met uw tuin
          </p> */}
        </div>
      </div>
    );
  };

  return problemsWithContactForm();
  // <div id="contact" className="flex max-w-8xl max-h-4xl mx-8 pt-16 mb-12">
  //   <div className="flex flex-col grow sm:flex-row sm:justify-between bg-black backdrop-blur-sm bg-opacity-50 p-6 rounded-2xl space-y-4">
  //     <div className="sm:w-1/2 py-8">
  //       <h1 className="text-2xl text-white text-bold">Neem contact op</h1>
  //       <p className="text-white font-thin text-small pt-4 pr-8">
  //         Stel hier uw vraag. Gegarandeerd antwoord binnen 3 werkdagen.
  //       </p>
  //     </div>
  //     <div className="text-white flex flex-col font-thin sm:w-1/2">
  //       <form
  //         className="flex flex-col"
  //         onSubmit={handleSubmit((formData) => {
  //           setSubmitting(true);
  //           console.log(formData, "formData");
  //         })}
  //       >
  //         <label htmlFor="name" className="font-normal pb-1 py-4">
  //           Naam<span className="text-red-500">*</span>
  //         </label>
  //         <input
  //           type="text"
  //           name="name"
  //           id="name"
  //           {...register("name", {
  //             required: "Vult u alstublieft uw naam in.",
  //           })}
  //           className="bg-black backdrop-blur-sm bg-opacity-20 min-w-full p-1.5 font-thin text-sm"
  //         />
  //         {errors.name ? <div>{errors.name.message}</div> : null}

  //         <label htmlFor="email" className="font-normal pb-1 py-4">
  //           E-mail<span className="text-red-500">*</span>
  //         </label>
  //         <input
  //           type="email"
  //           name="email"
  //           id="email"
  //           {...register("email")}
  //           className="bg-black backdrop-blur-sm bg-opacity-20 min-w-full p-1.5 font-thin text-sm"
  //         />

  //         <label htmlFor="telephone" className="font-normal pb-1 py-4">
  //           Telefoon
  //         </label>
  //         <input
  //           type="tel"
  //           name="telephone"
  //           id="telephone"
  //           {...register("telephone")}
  //           className="bg-black backdrop-blur-sm bg-opacity-20 min-w-full p-1.5 font-thin text-sm"
  //         />

  //         <label htmlFor="question" className="font-normal pb-1 py-4">
  //           Uw vraag<span className="text-red-500">*</span>
  //         </label>
  //         <textarea
  //           rows="5"
  //           type="text"
  //           name="question"
  //           id="question"
  //           {...register("question", { required: "Stel hier uw hulpvraag." })}
  //           className="bg-black backdrop-blur-sm bg-opacity-20 min-w-full p-1.5 font-thin text-sm"
  //         />
  //         <div>
  //           <button type="submit" className="mt-8">
  //             Verstuur
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // </div>
}
