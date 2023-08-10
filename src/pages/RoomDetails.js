import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import { RoomContext } from "../context/RoomContext";
import { Facheck } from "react-icons/fa";
import ScrollToTop from "../components/ScrollToTop";
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
          <div className="w-full h-full lg:w-[40%] bg-blue-300">
            <div>
              <h3>Your Reservation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
