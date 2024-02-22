import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";

const Home = () => {
  return (
    <div className='flex items-center h-screen overflow-hidden bg-white dark:bg-custom-black'>
      <Header />
      <div className="text-custom-dark  dark:text-white">
        <p className="text-lg font-body">Lorem ipsum dolor sit amet, cons</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
