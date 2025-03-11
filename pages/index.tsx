import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GUPC Official Page</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="200x200" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Hero 
        heading="Green University Photography Club" 
        message="See some of the work from GUPC" 
        useTypewriter={true} 
      />
      <Slider slides={SliderData} />
      <Instagram />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
