import React from "react";
import Rooms from "../components/Rooms";
import BookForm from '../components/BookForm';
import HeroSlider from "../components/HeroSlider";
import Headerhome from "../components/Headerhome";
import Footerhome from "../components/Footerhome";

const Home = () => {
  return (
    <>
    <Headerhome/>
    <HeroSlider/>
    <div className="container mx-auto relative">
      <div className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:-top-12 lg:right-0 lg:p-0 lg:z-30">
      <BookForm/>
      </div>
      </div>
      <Rooms />
      <Footerhome/>
    </>
  );
};

export default Home;
