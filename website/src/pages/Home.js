import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import Hero from "../components/Hero";
import Img from "../components/img";

const Home = () => {
  return (
    <div className='flex items-center h-screen overflow-hidden bg-white dark:bg-custom-black'>
      <Header />
      <Hero />
      <Img />
      <Footer />
    </div>
  );
};

export default Home;
