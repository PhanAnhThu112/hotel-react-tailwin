import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import { RoomContext } from "../context/RoomContext";
import { FaCheck } from "react-icons/fa";
import ScrollToTop from "../components/ScrollToTop";
import Headerhome from "../components/Headerhome";
import Footerhome from "../components/Footerhome";
const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  console.log(id);
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  const { name, description, facilities, imageLg, price } = room;
  return (
    
    <section className="bg-white">
      <Headerhome/>
      <div className="bg-room bg-cover bg-center h-[660px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary text-center ">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row h-full py-24  ">
          <div className="w-full h-full lg:w-[60%] px-8 bg-white-300">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} alt="" />
            <div className="mt-12">
              <h3 className="h3 mb-3">Room facilities</h3>
              <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis 
              temporibus quos consequuntur nam voluptatum ea ccusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.
              </p>
              <div className="grid grid-cols-3 gap-x-8 mb-12 gap-y-3 mt-6">
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div className="flex items-center gap-3" key={index}>
                      <div className="text-4xl text-accent">{icon}</div>
                      <div>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:w-[40%] bg-white">
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                 <h3>Your Reservation</h3>
                 <div className="h-[60px]">
                  <CheckIn/>
                 </div>
                 <div className="h-[60px]">
                  <CheckOut/>
                 </div>
                 <div className="h-[60px]">
                  <AdultsDropdown/>
                 </div>
                 <div className="h-[60px]">
                  <KidsDropdown/>
                 </div>
              </div>
              <button className="btn btn-lg btn-primary w-full">
                book now for ${price}
              </button>
            </div>
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed 
              voluptas unde veniam eligendi a. Quaerat molestiae hic omnis 
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck/>
                  Check-in:3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck/>
                  Check-out: 10:10 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck/>
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck/>
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footerhome/>
    </section>
  );
};

export default RoomDetails;
