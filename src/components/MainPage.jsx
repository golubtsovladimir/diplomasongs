import React from "react";
/*bg-opacity-50*/
export default function MainPage () {
  return(
    <main>
      <div className=" bg-white pt-[24px] pb-[48px] px-[32px]">
        <div className="flex justify-between items-end mt-[20px] ">
          <h2 className="text-2xl font-semibold hover:underline cursor-pointer"><a>Recommended</a></h2>
          <a href="" className="hover:underline text-[#7C74EE] font-semibold">View All</a>
        </div>
        <div className="grid grid-cols-5 gap-8 mt-3">
          <a href="" className=" rounded-lg p-5 group hover:bg-[#eeeded] hover:bg-opacity-50">
            <div className="relative">
              <img src="./images/max_korzh_mp2.jpeg" alt="" className="rounded-3xl" />
              <button className="h-10 w-10 bg-[#494949] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 bg-opacity-50 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </button>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold line-clamp-1">Малый повзрослел.Часть 2</h3>
              <p className="text-sm  mt-1 text-[#6B6B6B]">Макс Корж</p>
            </div>
          </a>
          <a href="" className=" rounded-lg p-5 group hover:bg-[#eeeded] hover:bg-opacity-50">
            <div className="relative">
              <img src="./images/Kanye_West_Ye.jpg" alt="" className="rounded-3xl" />
              <button className="h-10 w-10 bg-[#494949] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 bg-opacity-50 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </button>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold">Ye</h3>
              <p className="text-sm  mt-1 text-[#6B6B6B]">Kanye West</p>
            </div>
          </a>
          <a href="" className="rounded-lg p-5 group hover:bg-[#eeeded] hover:bg-opacity-50">
            <div className="relative">
              <img src="./images/kendrik_lamar_new_album.jpg" alt="" className="rounded-3xl" />
              <button className="h-10 w-10 bg-[#494949] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 bg-opacity-50 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </button>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold">Mr. Morale & The Big Steppers</h3>
              <p className="text-sm  mt-1 text-[#6B6B6B]">Kendrik Lamar</p>
            </div>
          </a>
          <a href="" className="rounded-lg p-5 group hover:bg-[#eeeded] hover:bg-opacity-50">
            <div className="relative">
              <img src="./images/pharaoh_philarmonia.png" alt="" className="rounded-3xl" />
              <button className="h-10 w-10 bg-[#494949] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 bg-opacity-50 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </button>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold">Philarmonia</h3>
              <p className="text-sm mt-1 text-[#6B6B6B]">Pharaoh</p>
            </div>
          </a>
          <a href="" className="rounded-lg p-5 group hover:bg-[#eeeded] hover:bg-opacity-50">
            <div className="relative">
              <img src="./images/Skrip36.jpg" alt="" className="rounded-3xl" />
              <button className="h-10 w-10 bg-[#494949] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 bg-opacity-50 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </button>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold">Улица 36</h3>
              <p className="text-sm  mt-1 text-[#6B6B6B]">Скриптонит</p>
            </div>
          </a>
        </div>
      </div>

    </main>
  );
}