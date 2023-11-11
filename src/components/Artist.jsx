import React from "react";

export default function Artist () {
  return(
    <section className="pt-[24px] pb-[48px] px-[32px]">
      <div className="flex justify-between items-end mt-[20px] ">
          <h2 className="text-2xl font-semibold hover:underline cursor-pointer"><a>Top Artist</a></h2>
          <a href="" className="hover:underline text-[#7C74EE] font-semibold">View All</a>
        </div>
      <div className="flex">
        <span>
          <p className=" my-3 mx-7 px-[80px] py-[70px] rounded-full bg-black">1</p>
          <h2 className="text-center">Макс Корж</h2>
        </span>
        <span>
          <p className=" my-3 mx-7 px-[80px] py-[70px] rounded-full bg-black">1</p>
          <h2 className="text-center">Макс Корж</h2>
        </span>
        <span>
          <p className=" my-3 mx-7 px-[80px] py-[70px] rounded-full bg-black">1</p>
          <h2 className="text-center">Макс Корж</h2>
        </span>
        <span>
          <p className=" my-3 mx-7 px-[80px] py-[70px] rounded-full bg-black">1</p>
          <h2 className="text-center">Макс Корж</h2>
        </span>
        <span>
          <p className=" my-3 mx-7 px-[80px] py-[70px] rounded-full bg-black">1</p>
          <h2 className="text-center">Макс Корж</h2>
        </span>
        <span>
          <p className=" my-3 mx-7 px-[80px] py-[70px] rounded-full bg-black">1</p>
          <h2 className="text-center">Макс Корж</h2>
        </span>
      </div>
      
      
    </section>
  );
}