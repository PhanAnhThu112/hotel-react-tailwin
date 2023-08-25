import React, { useContext } from "react";

import { RoomContext } from "../context/RoomContext";
import Room from "../components/Room";
import { SpinnerDotted, SpinnerDottedProps } from "spinners-react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Headerservice from "./Headerservice";
import Footerhome from "./Footerhome";

const SeeRoom = () => {
  const { rooms, loading } = useContext(RoomContext);
  return (
    <div>
      <Headerservice />
      <div className="bg-slate-400/10 w-full h-full">
        <div className="mt-40 flex flex-col items-center justify-between  bg-accent/100 ">
          <div className="mt-16 mb-16">
            <h6 className="font-tertiary text-8xl font-bold text-white">
              ROOMS
            </h6>
            <div className="text-center font-light text-xl flex items-center ml-9 mt-3">
              <span className="font-secondary mr-2 text-extralight">HOME</span>
              <FaAngleDoubleRight className="text-white mx-1" />
              <span className="font-secondary ml-2 text-white">ROOMS</span>
            </div>
          </div>
        </div>
      <section className=" py-20 bg-slate-400/10">
        {loading && (
          <div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center">
            <SpinnerDotted />
          </div>
        )}

        <div className="container mx-auto lg:px-0">
          <div
            className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] 
      lg:grid-cols-3 lg:max-w-none lg:mx-0"
          >
            {rooms.map((room) => {
              console.log(room);
              return <Room room={room} key={room.id} />;
            })}
          </div>
        </div>
      </section>
      <Footerhome />
    </div>
    </div>
  );
};

export default SeeRoom;
