import React from "react";
import Headerservice from "./Headerservice";
import Footerhome from "./Footerhome";
import { motion } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";
import { staggerContainer, fadeIn } from "../variants";

const Aboutus = () => {
  return (
    <>
      <Headerservice />
      <div className="bg-slate-400/10 w-full h-full">
        <div className="mt-40 flex flex-col items-center justify-between  bg-accent/100 ">
          <div className="mt-16 mb-16">
            <h6 className="font-tertiary text-7xl font-bold text-white">
              ABOUT US
            </h6>
            <div className="text-center font-light text-xl flex items-center ml-8 mt-3">
              <span className="font-secondary mr-2 text-extralight">HOME</span>
              <FaAngleDoubleRight className="text-white mx-1" />
              <span className="font-secondary ml-2 text-white">ABOUT US</span>
            </div>
          </div>
        </div>
          <div
            className=" lg:grid lg:grid-cols-2  grid grid-cols-1  mb-16 md:mb-24 
         justify-center items-center bg-white mt-20 mr-3  xl:gap-12 lg:gap-8 gap-0 xl:px-[100px] lg:px-[40px] md:px-[30px] px-[20px]  py-[70px] "
          >
            <motion.div>
              <h6 class="text-5xl font-bold font-tertiary mb-10">
                HOTEL ADINA
              </h6>
              <div class="">
                <div class="mb-8 font-tertiary text-3xl ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </div>
                <div class="mb-8 font-tertiary text-3xl ">
                  If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined...
                </div>
                <div class="mb-8 font-tertiary text-3xl ">
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures, to generate Lorem Ipsum
                  which looks reasonable. The generated Lorem Ipsum is therefore
                  always free from repetition..
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              class="order-1 sm:order-none lg:py-0 ml-3 transition-transform transform scale-x-105 scale-y-125 mt-10"
            >
              <motion.img
                variants={fadeIn("left", "tween", 0.2, 1.8)}
                class="w-full h-full"
                src="about_us.jpg"
                alt="section 3"
              />
            </motion.div>
          </div>
          <div className="lg:grid lg:grid-cols-2 grid grid-cols-1  xl:gap-12  gap-0 xl:px-[100px] lg:px-[40px] md:px-[30px]">
            <div class="order-2 max-w-3xl ml-2">
              <h6 class="text-5xl font-bold py-4 font-tertiary mt-24 mb-10">
                CLEAN AND BEST PARKING
              </h6>
              <div class="">
                <div class="mb-8 font-tertiary text-3xl mr-5">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </div>
                <div class="mb-8 font-tertiary text-3xl mr-5">
                  It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </div>
                <div class="mb-8 font-tertiary text-3xl mr-5">
                 If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. 
                </div>
                <div class=" items-center font-tertiary text-3xl mr-5">
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
                <div class=" items-center mt-8 font-tertiary text-3xl mr-5">
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              class="order-1 sm:order-none transition-transform transform scale-x-105 scale-y-95 ml-3 mt-20"
            >
              <motion.img
                variants={fadeIn("right", "tween", 0.2, 1.2)}
                class=" "
                src="about_2.jpg"
              />
            </motion.div>
          </div>
          <div className="flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20">
            <button
              className=" sm:w-52 sm:h-16 text-white bg-black py-6 sm:py-3 px-16 sm:px-6 font-tertiary 
          rounded-sm font-medium hover:bg-accent text-2xl sm:text-2xl transition duration-300 shadow hover:drop-shadow-md hov"
            >
              Book Now
            </button>
          </div>
      </div>
      <Footerhome />
    </>
  );
};

export default Aboutus;
