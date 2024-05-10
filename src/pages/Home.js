import React from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Hero from "../components/Hero";
import Img from "../components/Img";
import About from "../components/About";
import PlayNow from "../components/PlayNow";
import Email from "../components/Email";
import Carousel from "../components/Carousel";
import Block from "../layouts/Block";
import Screens from "../components/Screens";

const Home = () => {
  return (
    <div className='bg-white dark:bg-custom-black'>
      <Header />
      <Hero />
      <Block />
      <Img />
      <PlayNow />
      <About />
      <Carousel />
      <Screens />
      <Email />
      <Footer />
    </div>
  );
};

export default Home;
