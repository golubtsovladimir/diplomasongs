import React from "react";

export default function Chart () {
  return(
    <section className="pt-[24px] pb-[48px] px-[32px]">
        <div className="flex justify-between items-end mt-[20px] ">
          <h2 className="text-2xl font-semibold hover:underline cursor-pointer"><a>Top Chart This Week</a></h2>
          <a href="" className="hover:underline text-[#7C74EE] font-semibold">View All</a>
        </div>
      <div className="flex justify-between">
        <div className="flex mt-4 ">
          <img src="./images/chart.png" alt="" className="h-[240px]"/>
          <ul className="ml-[20px] px-3">
            <li className="flex group hover:bg-[#7C74EE] hover:bg-opacity-10 relative">
              <span className="text-2xl flex justify-center items-center font-semibold group-hover:hidden ">1</span>
              <button className="h-10 w-10 hidden group-hover:block z-0 absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#7C74EE" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7C74EE" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </button>
              <div className="px-8">
                <h3><a href="">Спонсор твоих проблем</a></h3>
                <span className="flex text-[#6B6B6B] text-sm"><h4><a href="">GUF, A.V.G</a></h4><span className="ml-3">3:57</span></span>
              </div>
            </li>
            <li className="flex">
              <span className="text-2xl flex justify-center items-center mr-3 font-semibold">2</span>
              <div>
                <h3><a href="">Царица</a></h3>
                <span className="flex text-[#6B6B6B]"><h4><a href="">ANNA ASTI</a></h4><span className="ml-3">3:35</span></span>
              </div>
            </li>
            <li className="flex">
              <span className="text-2xl flex justify-center items-center mr-3 font-semibold">3</span>
              <div>
                <h3><a href="">Зима в сердце</a></h3>
                <span className="flex text-[#6B6B6B]"><h4><a href="">Моя Мишель</a></h4><span className="ml-3">4:05</span></span>
              </div>
            </li>
            <li className="flex">
              <span className="text-2xl flex justify-center items-center mr-3 font-semibold">4</span>
              <div>
                <h3><a href="">Север</a></h3>
                <span className="flex text-[#6B6B6B]"><h4><a href="">Tkimali, Лолита</a></h4><span className="ml-3">1:55</span></span>
              </div>
            </li>
            <li className="flex">
              <span className="text-2xl flex justify-center items-center mr-3 font-semibold">5</span>
              <div>
                <h3><a href="">Давай сбежим (Искорки)</a></h3>
              <span className="flex text-[#6B6B6B]"><h4><a href="">5УТРА</a></h4><span className="ml-3">2:31</span></span>
              </div>
            </li>
          </ul>
        </div>
        <div>
        <div className="hidden 2lg:flex mt-4">
          <img src="./images/chart.png" alt="" className="h-[240px]"/>
          <ul className="ml-[20px] px-3">
            <li className="flex group hover:bg-[#7C74EE] hover:bg-opacity-10 relative">
              <span className="text-2xl flex justify-center items-center font-semibold group-hover:hidden ">1</span>
              <button className="h-10 w-10 hidden group-hover:block z-0 absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#7C74EE" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7C74EE" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </button>
              <div className="px-8">
                <h3><a href="">Спонсор твоих проблем</a></h3>
                <span className="flex text-[#6B6B6B] text-sm"><h4><a href="">GUF, A.V.G</a></h4><span className="ml-3">3:57</span></span>
              </div>
            </li>
            <li className="flex">
              <span className="text-2xl flex justify-center items-center mr-3 font-semibold">2</span>
              <div>
                <h3><a href="">Царица</a></h3>
                <span className="flex text-[#6B6B6B]"><h4><a href="">ANNA ASTI</a></h4><span className="ml-3">3:35</span></span>
              </div>
            </li>
            <li className="flex">
              <span className="text-2xl flex justify-center items-center mr-3 font-semibold">3</span>
              <div>
                <h3><a href="">Зима в сердце</a></h3>
                <span className="flex text-[#6B6B6B]"><h4><a href="">Моя Мишель</a></h4><span className="ml-3">4:05</span></span>
              </div>
            </li>
            <li className="flex">
              <span className="text-2xl flex justify-center items-center mr-3 font-semibold">4</span>
              <div>
                <h3><a href="">Север</a></h3>
                <span className="flex text-[#6B6B6B]"><h4><a href="">Tkimali, Лолита</a></h4><span className="ml-3">1:55</span></span>
              </div>
            </li>
            <li className="flex">
              <span className="text-2xl flex justify-center items-center mr-3 font-semibold">5</span>
              <div>
                <h3><a href="">Давай сбежим (Искорки)</a></h3>
              <span className="flex text-[#6B6B6B]"><h4><a href="">5УТРА</a></h4><span className="ml-3">2:31</span></span>
              </div>
            </li>
          </ul>
        </div>
        <div></div>
        </div>
      </div>
      
    </section>
    
  );
}