import React,{ useEffect } from "react";
import Headerservice from "./Headerservice";
import Footerhome from "./Footerhome";
import { motion } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";
import { staggerContainer, fadeIn } from "../variants";

const Service = () => {
  useEffect(() => {
    const starLabels = document.querySelectorAll(".starrating label");
    starLabels.forEach((label, index) => {
      label.addEventListener("click", () => {
        for (let i = 0; i <= index; i++) {
          starLabels[i].classList.add("text-yellow-500");
        }
        for (let i = index + 1; i < starLabels.length; i++) {
          starLabels[i].classList.remove("text-yellow-500");
        }
      });
    });
  }, []);
  return (
    <div className="bg-slate-200/10">
      <Headerservice />
      <div className="bg-slate-400/10 w-full h-full">
        <div className="mt-40 flex flex-col items-center justify-between  bg-accent/100 ">
          <div className="mt-16 mb-16">
            <h6 className="font-tertiary text-7xl font-bold text-white">
              SERVICES
            </h6>
            <div className="text-center font-light text-xl flex items-center ml-8 mt-3">
              <span className="font-secondary mr-2 text-extralight">HOME</span>
              <FaAngleDoubleRight className="text-white mx-1" />
              <span className="font-secondary ml-2 text-white">SERVICE</span>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="mt-20 flex flex-col items-center justify-between">
            <h3 className="font-tertiary text-5xl font-bold mb-10">
              HOTEL ROOMS
            </h3>
            <div className="flex flex-col items-center justify-center ml-10">
              <img
                className="w-[1500px] mb-20 h-auto mr-10"
                src="service_img.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3">
          <div className="flex flex-col justify-center  items-center md:ml-40">
            <svg
              className="w-20"
              fill="#854d0e"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 150 150"
              style={{ enableBackground: "new 0 0 150 150" }}
            >
              <g>
                <path
                  d="M135.6,144.9c0,2.3-1.8,4.1-4.1,4.1H18.2c-2.3,0-4.1-1.8-4.1-4.1v-7.6c0-2.3,1.8-4.1,4.1-4.1h113.4c2.3,0,4.1,1.8,4.1,4.1
                              V144.9z"
                ></path>
              </g>
              <g>
                <g>
                  <path
                    d="M84.9,56.7c0,0.5-0.4,0.9-0.9,0.9H66c-0.5,0-0.9-0.4-0.9-0.9V44.3c0-0.5,0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9V56.7z
                                 "
                  ></path>
                </g>
                <g>
                  <path
                    d="M84.9,75.9c0,0.5-0.4,0.9-0.9,0.9H66c-0.5,0-0.9-0.4-0.9-0.9V63.5c0-0.5,0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9V75.9z
                                 "
                  ></path>
                </g>
                <g>
                  <path
                    d="M84.9,95.2c0,0.5-0.4,0.9-0.9,0.9H66c-0.5,0-0.9-0.4-0.9-0.9V82.8c0-0.5,0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9V95.2z
                                 "
                  ></path>
                </g>
                <g>
                  <path
                    d="M115.7,56.7c0,0.5-0.4,0.9-0.9,0.9h-18c-0.5,0-0.9-0.4-0.9-0.9V44.3c0-0.5,0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9
                                 V56.7z"
                  ></path>
                </g>
                <g>
                  <path
                    d="M115.7,75.9c0,0.5-0.4,0.9-0.9,0.9h-18c-0.5,0-0.9-0.4-0.9-0.9V63.5c0-0.5,0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9
                                 V75.9z"
                  ></path>
                </g>
                <g>
                  <path
                    d="M115.7,95.2c0,0.5-0.4,0.9-0.9,0.9h-18c-0.5,0-0.9-0.4-0.9-0.9V82.8c0-0.5,0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9
                                 V95.2z"
                  ></path>
                </g>
                <g>
                  <path
                    d="M54.1,56.7c0,0.5-0.4,0.9-0.9,0.9h-18c-0.5,0-0.9-0.4-0.9-0.9V44.3c0-0.5,0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9V56.7
                                 z"
                  ></path>
                </g>
                <g>
                  <path
                    d="M54.1,75.9c0,0.5-0.4,0.9-0.9,0.9h-18c-0.5,0-0.9-0.4-0.9-0.9V63.5c0-0.5,0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9V75.9
                                 z"
                  ></path>
                </g>
                <g>
                  <path
                    d="M54.1,95.2c0,0.5-0.4,0.9-0.9,0.9h-18c-0.5,0-0.9-0.4-0.9-0.9V82.8c0-0.5,0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9V95.2
                                 z"
                  ></path>
                </g>
              </g>
              <g>
                <path
                  d="M74.6,1c0.2-0.3,0.4-0.3,0.6,0c0.9,1.6,1.7,3.2,2.6,4.9c0.1,0.3,0.5,0.6,0.9,0.6c1.9,0.3,3.9,0.6,5.8,0.9
                              c0.3,0.1,0.4,0.3,0.2,0.5c-1.4,1.2-2.8,2.4-4.2,3.7c-0.2,0.2-0.4,0.6-0.4,1c0.3,1.8,0.6,3.6,0.9,5.3c0,0.3-0.1,0.4-0.4,0.3
                              c-1.6-0.9-3.3-1.7-5-2.6c-0.3-0.1-0.8-0.1-1.1,0c-1.7,0.8-3.3,1.7-5,2.6c-0.3,0.2-0.5,0-0.4-0.3c0.3-1.8,0.6-3.6,0.9-5.3
                              c0.1-0.3-0.1-0.7-0.4-1c-1.4-1.2-2.8-2.4-4.2-3.7c-0.3-0.2-0.2-0.4,0.2-0.5c1.9-0.3,3.8-0.6,5.8-0.9c0.3-0.1,0.7-0.3,0.9-0.6
                              C72.8,4.3,73.7,2.7,74.6,1"
                ></path>
              </g>
              <g>
                <path
                  d="M94.4,6.8c0.1-0.2,0.3-0.2,0.5,0c0.6,1.4,1.3,2.8,1.9,4.2c0.1,0.2,0.4,0.5,0.7,0.6c1.6,0.3,3.1,0.7,4.7,1
                              c0.3,0.1,0.3,0.2,0.1,0.4c-1.2,1-2.5,1.9-3.7,2.9c-0.2,0.2-0.4,0.5-0.3,0.8c0.2,1.5,0.3,3,0.5,4.5c0,0.3-0.1,0.4-0.4,0.2
                              c-1.3-0.8-2.6-1.6-4-2.4c-0.2-0.1-0.6-0.2-0.9-0.1c-1.4,0.6-2.8,1.3-4.2,1.9c-0.2,0.1-0.4,0-0.3-0.3c0.3-1.5,0.6-3,1-4.4
                              c0.1-0.3,0-0.6-0.2-0.8c-1.1-1.1-2.2-2.2-3.3-3.3c-0.2-0.2-0.1-0.4,0.2-0.4c1.6-0.2,3.2-0.3,4.8-0.5c0.3,0,0.6-0.2,0.8-0.5
                              C92.8,9.4,93.6,8.1,94.4,6.8"
                ></path>
              </g>
              <g>
                <path
                  d="M53.8,6.8c0.1-0.2,0.3-0.3,0.5,0c0.8,1.3,1.6,2.6,2.4,4c0.1,0.2,0.5,0.4,0.8,0.5c1.6,0.1,3.2,0.3,4.8,0.5
                              c0.3,0,0.3,0.2,0.2,0.4c-1.1,1.1-2.2,2.2-3.3,3.3c-0.2,0.2-0.3,0.6-0.2,0.8c0.3,1.5,0.7,3,1,4.4c0.1,0.3-0.1,0.4-0.3,0.3
                              c-1.4-0.6-2.8-1.3-4.2-1.9c-0.2-0.1-0.6-0.1-0.9,0c-1.3,0.8-2.7,1.6-4,2.4c-0.2,0.1-0.4,0-0.4-0.2c0.1-1.5,0.3-3,0.5-4.5
                              c0-0.3-0.1-0.6-0.3-0.8c-1.2-1-2.4-1.9-3.7-2.9c-0.2-0.2-0.2-0.4,0.1-0.4c1.6-0.4,3.1-0.7,4.7-1c0.3-0.1,0.6-0.3,0.7-0.5
                              C52.5,9.6,53.2,8.2,53.8,6.8"
                ></path>
              </g>
              <g>
                <path
                  d="M110.7,19c0.1-0.2,0.2-0.1,0.3,0c0.4,1,0.8,2,1.1,3c0.1,0.2,0.3,0.4,0.5,0.4c1.1,0.3,2.1,0.6,3.2,0.9
                              c0.2,0.1,0.2,0.2,0.1,0.3c-0.9,0.6-1.7,1.3-2.6,1.9c-0.2,0.1-0.3,0.4-0.3,0.5c0,1.1,0.1,2.1,0.1,3.2c0,0.2-0.1,0.3-0.3,0.1
                              c-0.9-0.6-1.8-1.2-2.6-1.8c-0.2-0.1-0.4-0.1-0.6-0.1c-1,0.4-2,0.8-3,1.2c-0.2,0.1-0.3,0-0.2-0.2c0.3-1,0.6-2,0.9-3.1
                              c0-0.2,0-0.4-0.1-0.6c-0.7-0.8-1.4-1.6-2.1-2.4c-0.1-0.1-0.1-0.3,0.1-0.3c1.1,0,2.2-0.1,3.3-0.1c0.2,0,0.4-0.1,0.5-0.3
                              C109.5,20.8,110.1,19.9,110.7,19"
                ></path>
              </g>
              <g>
                <path
                  d="M38.8,19.2c0.1-0.2,0.2-0.2,0.3,0c0.6,0.9,1.2,1.8,1.8,2.7c0.1,0.2,0.3,0.3,0.5,0.3c1.1,0,2.2,0.1,3.3,0.1
                              c0.2,0,0.2,0.1,0.1,0.3c-0.7,0.8-1.4,1.6-2.1,2.4c-0.1,0.1-0.2,0.4-0.1,0.6c0.3,1,0.6,2,0.9,3.1c0.1,0.2-0.1,0.3-0.2,0.2
                              c-1-0.4-2-0.8-3-1.2c-0.2-0.1-0.4,0-0.6,0.1c-0.9,0.6-1.8,1.2-2.6,1.8c-0.2,0.1-0.3,0-0.3-0.1c0-1.1,0.1-2.1,0.1-3.2
                              c0-0.2-0.1-0.4-0.3-0.5c-0.9-0.6-1.7-1.3-2.6-1.9c-0.2-0.1-0.1-0.2,0.1-0.3c1.1-0.3,2.1-0.6,3.2-0.9c0.2-0.1,0.4-0.2,0.5-0.4
                              C38.1,21.2,38.4,20.2,38.8,19.2"
                ></path>
              </g>
              <g>
                <g>
                  <path
                    d="M47.5,25.3c-0.2,0.2-0.2,0.5-0.2,0.8c0.2,0.8,0.5,1.7,0.7,2.5h53.5c0.3-0.9,0.5-1.8,0.8-2.7c0.1-0.2,0-0.6-0.2-0.8
                                 c-0.1-0.2-0.3-0.3-0.4-0.5H48.1C47.9,24.8,47.7,25,47.5,25.3z"
                  ></path>
                </g>
                <g>
                  <g>
                    <path
                      d="M29.7,142.1H120c4.1,0,7.5-3.3,7.5-7.4h-4c-0.1,1.9-1.6,3.4-3.5,3.4H29.7c-1.9,0-3.5-1.5-3.5-3.4h-4
                                    C22.2,138.8,25.6,142.1,29.7,142.1z"
                    ></path>
                  </g>
                  <g>
                    <path
                      d="M26.2,128.4V32.1c0-2,1.6-3.5,3.5-3.5h2.1c0-0.6,0-1.1,0.1-1.7c0-0.2-0.1-0.6-0.3-0.7c-0.7-0.5-1.5-1.1-2.2-1.6l0,0
                                    c-4.1,0-7.1,3.4-7.1,7.5v96.3H26.2z"
                    ></path>
                  </g>
                  <g>
                    <path
                      d="M120,28.6c2,0,3.5,1.6,3.5,3.5v96.3h4V32.1c0-4.1-3.2-7.5-7.4-7.5l0,0c-0.7,0.5-1.3,0.9-2,1.4c-0.2,0.1-0.3,0.5-0.3,0.7
                                    c0,0.6,0.1,1.2,0.1,1.9H120z"
                    ></path>
                  </g>
                </g>
              </g>
              <g>
                <path d="M94.6,129.7V104c0-1-0.8-1.8-1.8-1.8H57c-1,0-1.8,0.8-1.8,1.8v25.7H94.6z"></path>
              </g>
            </svg>
            <h3 class="text-center font-tertiary mb-20 text-3xl text-accent mt-3">
              80$ / PER NIGHT
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <svg
              className="w-20"
              fill="#854d0e"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 150 150"
              style={{ enableBackground: "new 0 0 150 150" }}
            >
              <g>
                <g>
                  <path
                    d="M20.5,115.2l2.8-2.8C13.8,101.3,8.1,86.9,8.1,71.2c0-35.1,28.5-63.6,63.6-63.6c15.2,0,29.2,5.4,40.1,14.3l1.7-1.7
                                 c0.4-0.4,0.8-0.8,1.3-1.1C103.1,9.3,88.1,3.5,71.7,3.5C34.4,3.5,4,33.8,4,71.2c0,16.9,6.2,32.3,16.4,44.1
                                 C20.5,115.3,20.5,115.2,20.5,115.2z"
                  ></path>
                </g>
                <g>
                  <path d="M134,84c-5.1,24.7-24.5,44.1-49.1,49.3c-2.4,2-4.5,3.7-6.3,5.1c32-3.2,57.5-28.8,60.5-60.8C137.7,79.4,136,81.6,134,84z"></path>
                </g>
              </g>
              <g>
                <path
                  d="M139.2,30.6C139.2,30.6,139.2,30.6,139.2,30.6c-0.3-0.3-0.7-0.7-1-1c-7.7-7.7-17.4-10.7-21.5-6.5L98.5,41.3
                              c-4.1,4.1-1.2,13.8,6.5,21.5c1.8,1.8,3.6,3.3,5.5,4.5c-7.1,8.7-14.2,17-19.6,22.3c-6.1,6.1-14.9,13.7-24,21.1
                              c-1.1-1.5-2.3-2.9-3.6-4.3c-7.7-7.7-17.4-10.7-21.5-6.5l-18.2,18.2c-4.1,4.1-1.2,13.8,6.5,21.5c6,6,13.1,9.1,17.9,8.3
                              c8.1,0.7,16.4-2.1,22.6-8.3c0,0,21.6-16.5,37.6-32.5c14.4-14.4,30.9-36,30.9-36C150.4,59.9,150.4,41.8,139.2,30.6"
                ></path>
              </g>
              <g>
                <path
                  d="M36.9,93.2l-7.7,7.7l-1.5-1.5l-0.5-7.6c-0.1-1.2-0.2-2.1-0.5-2.7c-0.2-0.7-0.5-1.2-0.9-1.5c-0.5-0.5-1-0.7-1.5-0.8
                              c-0.5,0-1,0.2-1.5,0.6c-0.5,0.5-0.7,1.1-0.6,1.7c0.1,0.6,0.4,1.2,1,1.8l-2.2,2.2l-0.1,0c-1-1-1.6-2.2-1.6-3.6
                              c0-1.4,0.6-2.7,1.8-3.9c1.2-1.2,2.4-1.8,3.6-1.8c1.3,0,2.4,0.4,3.4,1.4c0.7,0.7,1.1,1.5,1.3,2.4c0.2,0.9,0.4,2.3,0.5,4.2l0.4,4.2
                              l0.1,0l4.7-4.7L36.9,93.2z"
                ></path>
                <path
                  d="M40.8,80.8l1.3-1.3l1.8,1.8l-1.3,1.3l2.5,2.5l-2.3,2.3l-2.5-2.5l-4.7,4.7l-1.5-1.3l-2.8-12.4l2.3-2.3L40.8,80.8z
                              M35.8,85.8l2.7-2.7l-4.2-4.2l-0.1,0l0.3,0.7L35.8,85.8z"
                ></path>
                <path d="M61.2,69l-2.3,2.3l-4.8-4.8l-4.7,4.7l4.8,4.8l-2.3,2.3L40.4,66.8l2.3-2.3l4.9,4.9l4.7-4.7l-4.9-4.9l2.3-2.3L61.2,69z"></path>
                <path
                  d="M67.9,52.9c1.4,1.4,2.1,3,2.2,4.8c0,1.8-0.7,3.4-2.1,4.8c-1.4,1.4-3,2.1-4.8,2.1c-1.8,0-3.4-0.8-4.8-2.2l-2.1-2.1
                              c-1.4-1.4-2.1-3-2.2-4.8c0-1.8,0.6-3.4,2.1-4.8c1.4-1.4,3-2.1,4.9-2.1c1.8,0,3.4,0.7,4.8,2.1L67.9,52.9z M63.5,53.1
                              c-0.9-0.9-1.8-1.4-2.9-1.5c-1-0.1-1.9,0.2-2.7,1c-0.8,0.8-1.1,1.7-1,2.7c0.1,1,0.7,2,1.5,2.8l2.1,2.1c0.9,0.9,1.9,1.4,2.9,1.6
                              c1,0.1,1.9-0.2,2.7-1c0.8-0.8,1.1-1.7,1-2.7c-0.1-1-0.7-2-1.6-2.9L63.5,53.1z"
                ></path>
                <path
                  d="M72,35.2l7.5,7.5c1.3,1.3,1.9,2.7,1.7,4.3c-0.1,1.6-0.9,3.1-2.2,4.4c-1.4,1.4-2.8,2.1-4.4,2.2c-1.6,0.1-3-0.5-4.3-1.8
                              l-7.5-7.5l2.3-2.3l7.5,7.5c0.8,0.8,1.6,1.1,2.4,1.1c0.8,0,1.6-0.4,2.3-1.1c0.7-0.7,1.1-1.5,1.1-2.3c0-0.8-0.4-1.6-1.1-2.4
                              l-7.5-7.5L72,35.2z"
                ></path>
                <path
                  d="M83.2,37.8l4.6,4.6l-2.3,2.3L74,33.2l4-4c1.3-1.3,2.6-2,4-2.2c1.3-0.1,2.5,0.3,3.6,1.4c0.6,0.6,0.9,1.3,1.1,2
                              c0.1,0.7,0,1.5-0.3,2.4c0.9-0.5,1.7-0.6,2.5-0.5c0.8,0.2,1.5,0.6,2.2,1.3l0.8,0.8c0.3,0.3,0.7,0.6,1.1,0.9
                              c0.4,0.3,0.8,0.4,1.2,0.3l0.2,0.2l-2.4,2.4c-0.4,0-0.8-0.1-1.2-0.4c-0.4-0.3-0.9-0.7-1.2-1L88.6,36c-0.6-0.6-1.2-0.9-1.8-0.9
                              c-0.6,0-1.2,0.3-1.8,0.9L83.2,37.8z M81.4,36l1.6-1.6c0.6-0.6,1-1.3,1-1.9c0-0.6-0.2-1.2-0.7-1.7c-0.5-0.5-1.1-0.8-1.7-0.8
                              c-0.6,0-1.2,0.3-1.9,0.9l-1.7,1.7L81.4,36z"
                ></path>
                <path
                  d="M98.7,25.4c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.4,0.3-2.4,0.9c-1.7,0.9-3.2,1.5-4.4,1.6c-1.2,0.1-2.3-0.3-3.2-1.2
                              c-0.9-0.9-1.3-2.1-1.1-3.5c0.2-1.4,0.9-2.7,2.1-3.8c1.3-1.3,2.6-2,4-2.1c1.4-0.1,2.6,0.3,3.6,1.4l0,0.1l-2.2,2.2
                              c-0.6-0.6-1.2-0.8-1.8-0.8c-0.7,0-1.3,0.4-1.9,1c-0.6,0.6-0.9,1.1-0.9,1.7c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.5,1.5,0.5
                              c0.6-0.1,1.4-0.4,2.5-0.9c1.6-0.9,3-1.4,4.3-1.5c1.2-0.1,2.3,0.3,3.3,1.3c1,1,1.4,2.1,1.2,3.5c-0.2,1.3-0.9,2.6-2.2,3.9
                              c-1.2,1.2-2.6,2-4.1,2.3c-1.5,0.3-2.8-0.2-4-1.5l0-0.1l2.2-2.2c0.7,0.7,1.4,1,2.1,0.9c0.7-0.1,1.4-0.5,2.1-1.1
                              c0.6-0.6,1-1.2,1-1.8C99.4,26.4,99.2,25.9,98.7,25.4z"
                ></path>
              </g>
            </svg>
            <h3 class="text-center font-tertiary mb-20 text-3xl text-accent mt-3">
              24/7 STAFF SUPPORT
            </h3>
          </div>
          <div className="flex flex-col justify-center  items-center md:mr-36">
            <svg
              className="w-20"
              fill="#854d0e"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 150 150"
              style={{ enableBackground: "new 0 0 150 150" }}
            >
              <g>
                <g>
                  <path
                    d="M138.3,131.4H13.1c-4.8,0-8.7-3.9-8.7-8.7V36.8c0-4.8,3.9-8.7,8.7-8.7h125.2c4.8,0,8.7,3.9,8.7,8.7v85.9
                                 C147,127.5,143.1,131.4,138.3,131.4z M13.1,32.1c-2.6,0-4.7,2.1-4.7,4.7v85.9c0,2.6,2.1,4.7,4.7,4.7h125.2c2.6,0,4.7-2.1,4.7-4.7
                                 V36.8c0-2.6-2.1-4.7-4.7-4.7H13.1z"
                  ></path>
                </g>
                <g>
                  <rect x="6.3" y="50.9" width="138.6" height="16.7"></rect>
                </g>
                <g>
                  <path d="M133.7,115.6H48.2v-17h85.5V115.6z M51,112.6h79.9v-11H51V112.6z"></path>
                </g>
                <g>
                  <g>
                    <rect x="48.2" y="77.9" width="7.4" height="9.7"></rect>
                  </g>
                  <g>
                    <rect x="58.9" y="77.9" width="7.4" height="9.7"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="77.2" y="77.9" width="7.4" height="9.7"></rect>
                  </g>
                  <g>
                    <rect x="87.9" y="77.9" width="7.4" height="9.7"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="105.6" y="77.9" width="7.4" height="9.7"></rect>
                  </g>
                  <g>
                    <rect x="116.3" y="77.9" width="7.4" height="9.7"></rect>
                  </g>
                  <g>
                    <rect x="126.3" y="77.9" width="7.4" height="9.7"></rect>
                  </g>
                </g>
              </g>
            </svg>
            <h3 class="text-center font-tertiary mb-20 text-3xl text-accent mt-3">
              LOW PRICES
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ml-5 ">
          <p className="font-tertiary text-3xl text-center mr-5 font-light mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, <br /> eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo rem aperiam <br /> enim ipsam voluptatem
            quia voluptas sit aspernatur aut odit aut fugit .
          </p>
        </div>
        <div class="starrating risingstar flex justify-center flex-row-reverse text-slate-500/40">
          <div className="mb-5">
          <input
            type="radio"
            id="star1"
            name="rating"
            value="5"
            class="hidden"
          />
          <label
            for="star1"
            title="1star"
            class="cursor-pointer hover:text-yellow-500 text-5xl"
          >
            ★
          </label>
          <input
            type="radio"
            id="star2"
            name="rating"
            value="2"
            class="hidden"
          />
          <label
            for="star2"
            title="2star"
            class="cursor-pointer hover:text-yellow-500 text-5xl"
          >
            ★
          </label>
          <input
            type="radio"
            id="star3"
            name="rating"
            value="3"
            class="hidden"
          />
          <label
            for="star3"
            title="3 star"
            class="cursor-pointer hover:text-yellow-500 text-5xl"
          >
            ★
          </label>
          <input
            type="radio"
            id="star4"
            name="rating"
            value="4"
            class="hidden"
          />
          <label
            for="star4"
            title="4 star"
            class="cursor-pointer hover:text-yellow-500 text-5xl"
          >
            ★
          </label>
          <input
            type="radio"
            id="star5"
            name="rating"
            value="5"
            class="hidden"
          />
          <label
            for="star5"
            title="5star"
            class="cursor-pointer hover:text-yellow-500 text-5xl"
          >
            ★
          </label>
          </div>
        </div>
        <div className="flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-10">
            <button
              className=" sm:w-52 sm:h-16 text-white bg-black py-4 sm:py-3 px-14 sm:px-6 font-tertiary 
          rounded-sm font-medium hover:bg-accent text-2xl sm:text-2xl transition duration-300 shadow hover:drop-shadow-md hov"
            >
              Book Now
            </button>
          </div>
        
        
      </div>
      <Footerhome />
    </div>
    
  );
};

export default Service;
