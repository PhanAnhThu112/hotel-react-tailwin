import React, { useEffect } from "react";
import Footerhome from "./Footerhome";
import Headerservice from "./Headerservice";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 16.0471, lng: 108.2062 }, // Vị trí Đà Nẵng, Việt Nam
      zoom: 12,
    });
  }, []);

  return (
    <div className="h-[500px] mb-60">
      <Headerservice />
      <div className="mt-36 w-full h-96">
        <div id="map" className="w-full h-full"></div>
        <div className="flex flex-col justify-center items-center mt-16">
          <h3 className="text-5xl font-tertiary font-bold">CONTACT US</h3>
        </div>
        <div className="md:grid grid-cols-3 mb-20">
          <div className="flex flex-col justify-center items-center mt-10 md:ml-60 ">
            <div className="text-center  bg-white  shadow-md p-8 ">
              <svg
                className="w-16 h-16 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 150 150"
              >
                <path
                  className="fill-current"
                  d="M130.4,91.7c-4.9-0.6-9.8-1.6-14.5-3c-5.9-1.8-12.3-0.2-16.6,4.1l-9,9C73,92.4,58.6,78,49.2,60.7l9-9
             c4.3-4.3,5.9-10.7,4.1-16.6c-1.4-4.7-2.5-9.6-3-14.5C58.4,12.3,51.3,6,42.8,6H20.6C16,6,11.5,8,8.4,11.4c-2.8,3.1-4.3,7.1-4.3,11.2
              c0,0.5,0,1,0.1,1.5c1.5,15.9,5.7,31.3,12.6,45.8c6.7,14,15.7,26.7,26.7,37.7c11,11,23.7,20,37.7,26.7c14.4,6.9,29.8,11.1,45.8,12.6
             c4.6,0.4,9.3-1.1,12.7-4.3c3.4-3.1,5.4-7.6,5.4-12.2v-22.2C145,99.7,138.7,92.6,130.4,91.7z"
                />
              </svg>
            </div>
            <div className="full">
              <h6 className="font-semibold text-center mt-3  mb-3 font-tertiary text-3xl">
                Phone
              </h6>
            </div>
            <div className="full text-center mt-1 font-tertiary text-xl">
              <p>+91 9876 543 210</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="text-center bg-brown-300 shadow-md p-8">
              <svg
                className="w-16 h-16 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 150 150"
              >
                <polygon
                  className="fill-current"
                  points="149,125 149,35.8 98.9,79.5"
                ></polygon>
                <path
                  className="fill-current"
                  d="M2.1,34c0,0.1,0,0.1,0,0.1v90.2l50.1-45.4L2.1,34z"
                ></path>
                <path
                  className="fill-current"
                  d="M84.7,81.2l59.7-52c-0.1,0-0.2-0.1-0.4-0.1H8.7l57.9,51.9C71.7,85.7,79.5,85.7,84.7,81.2z"
                ></path>
                <path
                  className="fill-current"
                  d="M90,87.3c-4.1,3.6-9.2,5.3-14.3,5.3c-5.2,0-10.4-1.9-14.5-5.6l-3-2.7L6.5,131.2c0.2,0,0.3,0.1,0.5,0.1h136.8
                  L92.8,84.9L90,87.3z"
                ></path>
              </svg>
            </div>
            <div className="full">
              <h6 className="font-semibold text-center mt-3  mb-3 font-tertiary text-3xl">
                Email
              </h6>
            </div>
            <div className="full text-center mt-1 text-xl">
              <p>HotelAdina@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-10 md:mr-40">
            <div className="text-center bg-white shadow-md p-8 ">
              <svg
                className="w-16 h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 150 150"
              >
                <path
                  class="fill-current text-accent"
                  d="M76,6.5c-30.3,0-54.9,24.6-54.9,54.9c0,21.6,9.1,43.5,26.2,63.3c12.8,14.8,25.5,23.1,26,23.5
                              c0.8,0.5,1.8,0.8,2.7,0.8c0.9,0,1.9-0.3,2.7-0.8c0.5-0.3,13.2-8.7,26-23.5c17.1-19.8,26.2-41.6,26.2-63.3
                              C130.9,31.2,106.3,6.5,76,6.5z M76,81.8c-11.6,0-21.1-9.4-21.1-21.1S64.4,39.6,76,39.6s21.1,9.4,21.1,21.1S87.7,81.8,76,81.8z"
                ></path>
              </svg>
            </div>
            <div className="full">
              <h6 className="font-semibold text-center font-tertiary mt-3 mb-4 text-3xl">
                Address
              </h6>
            </div>
            <div className="full text-center mt-1 font-tertiary text-xl">
              <p>
                427 Schoen Circles Suite 124 <br />
                Melbourne Australia
              </p>
            </div>
          </div>
        </div>
        <div className="row">
  <form action="/home" className="mt-7 md:ml-80 ">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:mr-72 ">
      <div className="col-span-2 ml-4 mr-4">
        <textarea
          type="text"
          name="name"
          placeholder="Name"
          required=""
          className="w-full h-20 px-4 py-2  border text-xl font-semibold  font-tertiary  bg-slate-500/20  focus:outline-none "
        />
      </div>
      <div className="col-span-2 md:col-span-1 ml-4 mr-4">
        <textarea
          type="email"
          name="email"
          placeholder="Email"
          required=""
          className="w-full h-20 px-4 py-2 border text-xl font-semibold font-tertiary   bg-slate-500/20 focus:outline-none "
        />
      </div>
      <div className="col-span-2  md:col-span-1 mr-4 ml-4">
        <textarea
          type="text"
          name="phone_no"
          placeholder="Phone"
          required=""
          className="w-full h-20 px-6 py-2 border text-xl font-semibold font-tertiary   bg-slate-500/20 focus:outline-none "
        />
      </div>
      <div className="col-span-2 ml-4 mr-4">
        <textarea
          placeholder="Message"
          required=""
          className="w-full h-40 px-4 py-2 border text-xl font-semibold   font-tertiary bg-slate-500/20 focus:outline-none "
        ></textarea>
      </div>
      <div className="col-span-2 mt-5 mb-10">
        <div className="full flex justify-center">
          <button
            className="sm:w-52 sm:h-16 text-white bg-black py-4 sm:py-3 px-10 sm:px-6 font-tertiary 
            rounded-sm font-medium hover:bg-accent text-2xl sm:text-2xl transition duration-300 shadow hover:drop-shadow-md hov"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  </form>
</div>


        <Footerhome />
      </div>
    </div>
  );
};

export default Contact;
