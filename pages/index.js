import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Logo from "../components/Logo";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>vanzutphenwerkt</title>
        <meta name="description" content="hovenier Oss tuinman Oss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-[url('/bg-sm.png')] md:bg-[url('/bg.png')] bg-cover bg-no-repeat">
        <div className="container mx-auto z-50">
          <Logo />
          <div className="flex flex-col sm:flex-row justify-between">
            <Hero />
            <About />
          </div>
          {/* <Contact /> */}
        </div>
        <Footer />
      </body>
    </>
  );
}
