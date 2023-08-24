import React from "react";
import Headerservice from "../components/Headerservice";
import Footerhome from "../components/Footerhome";

const Service = () => {
  return (
    <>
      <Headerservice />
      <div className="bg-slate-400/10 mt-20">
        <div
          className=" lg:grid lg:grid-cols-2  grid grid-cols-1  mb-16 md:mb-24 
         justify-center items-center bg-white xl:gap-12 lg:gap-8 gap-0 xl:px-[100px] lg:px-[40px] md:px-[30px] px-[20px]  py-[110px] "
        >
          <div class=" ">
            <h6 class="text-5xl font-bold font-tertiary mb-10">HOTEL ADINA</h6>
            <div class="">
              <div class="mb-8 font-tertiary text-3xl ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined...
              </div>
              <div class="mb-8 font-tertiary text-3xl ">
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which looks reasonable. The generated Lorem Ipsum is therefore
                always free from repetition..
              </div>
            </div>
          </div>
          <div class="order-1 sm:order-none lg:py-0 ml-3 transition-transform transform scale-x-105 scale-y-105 mt-10">
            <img class="w-full h-full" src="about_us.jpg" alt="section 3" />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 grid grid-cols-1  xl:gap-12  gap-0 xl:px-[100px] lg:px-[40px] md:px-[30px] px-[20px]   ">
          <div class="order-2 max-w-3xl ml-2">
            <h6 class="text-5xl font-bold py-4 font-tertiary mt-10 mb-10">
              CLEAN AND BEST PARKING
            </h6>
            <div class="">
              <div class="mb-8 font-tertiary text-3xl mr-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </div>
              <div class=" items-center mb-8 font-tertiary text-3xl mr-5">
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur voluptatem sequi nesciunt.
                </span>
              </div>
              <div class="flex gap-x-8 items-center font-tertiary text-3xl mr-5">
                <span>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia..
                </span>
              </div>
            </div>
          </div>
          <div class="order-1 sm:order-none transition-transform transform scale-x-105 scale-y-95 ml-3">
            <img class=" " src="about_2.jpg" />
          </div>
        </div>
        <div className="flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20">
          <button className="w-44 sm:w-52 h-14 sm:h-16 text-white bg-black py-2 sm:py-3 px-4 sm:px-6 font-tertiary 
          rounded-sm font-medium hover:bg-accent text-lg sm:text-2xl transition duration-300 shadow">
            Book Now
          </button>
        </div>
      </div>
      <Footerhome />
    </>
  );
};

export default Service;
