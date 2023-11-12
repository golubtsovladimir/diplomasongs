import React from "react";

export default function Artist () {
  return(
    <section className="pt-[24px] pb-[48px] px-[32px]">
      <div className="flex justify-between items-end mt-[20px] ">
          <h2 className="text-2xl font-semibold hover:underline cursor-pointer"><a>Top Artist</a></h2>
          <a href="" className="hover:underline text-[#7C74EE] font-semibold">View All</a>
        </div>
      <div className="grid sm:grid-cols-playlist-mobile md:grid-cols-playlist-tablet lg:grid-cols-playlist-laptop xl:grid-cols-playlist-desktop gap-10 mt-[30px]">
        <span>
          <img src="./images/190x190cc.webp" alt="" className="rounded-full m-auto"/>
          <h2 className="text-center">Макс Корж</h2>
        </span>
        <span className="hidden sm:block">
          <img src="./images/190x190cc.webp" alt="" className="rounded-full m-auto"/>
          <h2 className="text-center">Макс Корж</h2>
        </span>
        <span className="hidden lg:block">
          <img src="./images/190x190cc.webp" alt="" className="rounded-full m-auto"/>
          <h2 className="text-center">Макс Корж</h2>
        </span>
        <span className="hidden xl:block">
          <img src="./images/190x190cc.webp" alt="" className="rounded-full m-auto"/>
          <h2 className="text-center">Макс Корж</h2>
        </span>
        <span className="hidden 2xl:block">
          <img src="./images/190x190cc.webp" alt="" className="rounded-full m-auto"/>
          <h2 className="text-center">Макс Корж</h2>
        </span>
        <span className="hidden 3xl:block">
          <img src="./images/190x190cc.webp" alt="" className="rounded-full m-auto"/>
          <h2 className="text-center">Макс Корж</h2>
        </span>
      </div>
      
      
    </section>
  );
}