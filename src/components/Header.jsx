import React from "react";

export default function Header () {
  return(
    <header className="flex w-full">
      <form action="" method="get" className="mx-8 my-6 relative w-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ACACAC" class="w-6 h-6 absolute m-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input type="search" name="s" id="" placeholder="Search artist, title, album" className="h-12 px-14 rounded-lg border-solid border-2 border-slate-300 w-full" />
        <button type="submit"></button>
      </form>
      <div>
        <button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white my-7 mx-7 px-7 py-2 rounded-3xl">Premium</button>
      </div>
        <span><p className=" my-7 mx-7 px-4 py-2 rounded-full bg-black">1</p></span>
    </header>
  );
}