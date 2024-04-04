import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Img from "../components/Img";
import About from "../components/About";
import PlayNow from "../components/PlayNow";
import Email from "../components/Email";
import Carousel from "../components/Carousel";
import Block from "../components/Block";

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
      <Email />
      <Footer />
    </div>
  );
};

export default Home;
