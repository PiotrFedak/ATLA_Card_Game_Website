import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className='flex items-center h-screen overflow-hidden bg-white dark:bg-custom-black'>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
