import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import Hero from "../components/Hero";
import Img from "../components/img";
import About from "../components/About";
import PlayNow from "../components/PlayNow";

const Home = () => {
  return (
    <div className='bg-white dark:bg-custom-black'>
      <Header />
      <Hero />
      <Img />
      <PlayNow />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
