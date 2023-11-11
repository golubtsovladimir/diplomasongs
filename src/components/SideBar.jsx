import React from "react";

export default function SideBar () {
  return(
    <aside className="bg-white w-[256px] h-screen text-[#999] hidden md:flex flex-col sticky top-0 left-0">
      <div className="flex justify-center my-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="37" viewBox="0 0 26 37" fill="none" className="mx-2">
          <path d="M12.3591 23.136V32.2251C12.3591 32.5736 12.209 32.9078 11.9417 33.154C11.6746 33.4004 11.3121 33.5388 10.9341 33.5388C10.5563 33.5388 10.1938 33.4004 9.92655 33.154C9.65927 32.9078 9.50914 32.5736 9.50914 32.2251V23.1486C9.90595 23.4157 10.3816 23.5648 10.8728 23.576C11.4081 23.5901 11.9327 23.4348 12.3591 23.136ZM24.4955 20.5086C24.1339 20.5086 23.787 20.6411 23.5313 20.8768C23.2756 21.1125 23.1319 21.4323 23.1319 21.7657V23.3497C23.1319 23.6982 23.282 24.0323 23.5493 24.2786C23.8164 24.525 24.1789 24.6634 24.5569 24.6634C24.9349 24.6634 25.2973 24.525 25.5645 24.2786C25.8317 24.0323 25.9819 23.6982 25.9819 23.3497V21.8286C25.9925 21.6483 25.9609 21.468 25.8891 21.3001C25.8174 21.1321 25.7074 20.9802 25.5662 20.855C25.4252 20.7298 25.2565 20.634 25.0719 20.5742C24.8871 20.5145 24.6905 20.4921 24.4955 20.5086ZM6.41368 26.5806C5.923 26.567 5.44799 26.4181 5.05004 26.1531V35.2674C5.05004 35.6175 5.20089 35.9533 5.46942 36.2009C5.73793 36.4484 6.10212 36.5874 6.48186 36.5874C6.86161 36.5874 7.22579 36.4484 7.49431 36.2009C7.76284 35.9533 7.91368 35.6175 7.91368 35.2674V26.216C7.46839 26.4814 6.94299 26.6091 6.41368 26.5806ZM20.05 17.7806C19.8653 17.772 19.6806 17.7983 19.5072 17.8576C19.3339 17.917 19.1754 18.0082 19.0414 18.1258C18.9075 18.2434 18.801 18.3849 18.7281 18.5416C18.6555 18.6984 18.618 18.8672 18.6182 19.0377V26.04C18.6182 26.3901 18.769 26.7259 19.0375 26.9734C19.3062 27.221 19.6703 27.36 20.05 27.36C20.4298 27.36 20.794 27.221 21.0625 26.9734C21.331 26.7259 21.4819 26.3901 21.4819 26.04V19.1257C21.4928 18.9443 21.4609 18.7629 21.3883 18.5939C21.3158 18.425 21.2045 18.2725 21.0619 18.147C20.9192 18.0216 20.7489 17.926 20.5625 17.8672C20.3761 17.8082 20.178 17.7872 19.9819 17.8057L20.05 17.7806ZM15.5228 20.4708C15.0091 20.4676 14.5092 20.3184 14.091 20.0434V29.1828C14.091 29.533 14.2418 29.8687 14.5103 30.1163C14.7789 30.3638 15.143 30.5028 15.5228 30.5028C15.9025 30.5028 16.2666 30.3638 16.5353 30.1163C16.8038 29.8687 16.9546 29.533 16.9546 29.1828V20.056C16.522 20.3531 15.9939 20.5079 15.4546 20.496L15.5228 20.4708ZM3.31823 27.4731V1.94057C3.31464 1.62934 3.178 1.332 2.938 1.11309C2.698 0.894183 2.37402 0.771411 2.03641 0.771423H1.73641C1.3988 0.771411 1.07481 0.894183 0.834813 1.11309C0.594813 1.332 0.458176 1.62934 0.45459 1.94057V27.4731C0.45459 27.7865 0.589644 28.0871 0.830026 28.3088C1.07041 28.5304 1.39645 28.6549 1.73641 28.6549H2.03641C2.37638 28.6549 2.70241 28.5304 2.94279 28.3088C3.18319 28.0871 3.31823 27.7865 3.31823 27.4731ZM6.56368 25.6126H6.26368C5.92373 25.6126 5.59768 25.4881 5.3573 25.2665C5.11692 25.0448 4.98186 24.7443 4.98186 24.4309V4.98285C4.98546 4.67163 5.12209 4.37427 5.36209 4.15538C5.60209 3.93647 5.92607 3.8137 6.26368 3.81371H6.56368C6.90129 3.8137 7.22528 3.93647 7.46528 4.15538C7.70528 4.37427 7.84191 4.67163 7.8455 4.98285V24.456C7.8455 24.7694 7.71044 25.07 7.47006 25.2916C7.22968 25.5133 6.90363 25.6377 6.56368 25.6377V25.6126ZM11.0773 22.6206H10.7637C10.4274 22.6206 10.1048 22.4974 9.86695 22.2781C9.62914 22.0589 9.4955 21.7616 9.4955 21.4514V7.99999C9.49373 7.8454 9.52523 7.69202 9.58809 7.54872C9.65095 7.40542 9.74409 7.27505 9.86204 7.16515C9.98 7.05525 10.1205 6.96801 10.2752 6.90847C10.43 6.84893 10.596 6.81827 10.7637 6.81828H11.0773C11.415 6.8216 11.7375 6.94755 11.9749 7.16881C12.2124 7.39007 12.3455 7.68875 12.3455 7.99999V21.4514C12.3455 21.7616 12.2119 22.0589 11.974 22.2781C11.7362 22.4974 11.4137 22.6206 11.0773 22.6206ZM15.591 19.5406H15.3046C14.967 19.5406 14.643 19.4179 14.403 19.1989C14.163 18.98 14.0263 18.6827 14.0228 18.3714V11.1303C14.0116 10.9689 14.0364 10.8071 14.0959 10.6548C14.1552 10.5027 14.2479 10.3633 14.368 10.2455C14.4882 10.1276 14.6333 10.0338 14.7945 9.96969C14.9555 9.9057 15.1291 9.87276 15.3046 9.87314H15.6046C15.9445 9.87314 16.2706 9.99759 16.511 10.2192C16.7514 10.4409 16.8864 10.7414 16.8864 11.0549V18.3463C16.8882 18.5025 16.8564 18.6575 16.7927 18.8024C16.7292 18.9472 16.6351 19.0789 16.5158 19.1901C16.3966 19.3011 16.2548 19.3892 16.0982 19.4494C15.9418 19.5096 15.7741 19.5406 15.6046 19.5406H15.591ZM20.1182 16.8377H19.8182C19.4783 16.8377 19.1522 16.7133 18.9118 16.4916C18.6714 16.27 18.5364 15.9694 18.5364 15.656V13.7829C18.54 13.4716 18.6766 13.1743 18.9166 12.9554C19.1566 12.7364 19.4806 12.6137 19.8182 12.6137H20.1182C20.4559 12.6137 20.7799 12.7364 21.0199 12.9554C21.2599 13.1743 21.3965 13.4716 21.4 13.7829V15.656C21.4 15.9673 21.267 16.266 21.0294 16.4872C20.792 16.7085 20.4695 16.8344 20.1319 16.8377H20.1182Z" fill="url(#paint0_linear_302_3342)"/>
          <defs>
          <linearGradient id="paint0_linear_302_3342" x1="0.454589" y1="22.1429" x2="17.5" y2="22.1429" gradientUnits="userSpaceOnUse">
          <stop stop-color="#39CABD"/>
          <stop offset="1" stop-color="#4AB5CA"/>
          </linearGradient>
          </defs>
        </svg>
        <h1 className='text-2xl text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 from-3.26% via-sky-500 via-56.45%  to-emerald-500 to-97.83% font-black'>
          <a href="#" className="inline-block">Diploma Songs</a>
        </h1>
        </div>
        <nav className="mx-4">
          <h2 className="text-black font-semibold my-2 mx-3">Discover</h2>

          <a href="" className="flex items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... mx-2 px-4 py-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className="ml-4 text-sm font-semibold text-white">Home</span>
          </a>

          <a href="" className="flex items-center  mx-2 px-4 py-2 rounded hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
          </svg>
            <span className="ml-4 text-sm font-semibold">Artist</span>
          </a>

          <a href="" className="flex items-center  mx-2 px-4 py-2 rounded hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
          </svg>

            <span className="ml-4 text-sm font-semibold">Album</span>
          </a>

          <a href="" className="flex items-center  mx-2 px-4 py-2 rounded hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
          </svg>
            <span className="ml-4 text-sm font-semibold">Podcast</span>
          </a>
          
          <a href="" className="flex items-center  mx-2 px-4 py-2 rounded hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
            <span className="ml-4 text-sm font-semibold">Audio Book</span>
          </a>

          <h2 className="text-black font-semibold my-2 mx-3">Library</h2>

          <a href="" className="flex items-center  mx-2 px-4 py-2 rounded hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
            <span className="ml-4 text-sm font-semibold">Recent</span>
          </a>

          <a href="" className="flex items-center  mx-2 px-4 py-2 rounded hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>

            <span className="ml-4 text-sm font-semibold">Favourit</span>
          </a>

          <a href="" className="flex items-center  mx-2 px-4 py-2 rounded hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
          </svg>
            <span className="ml-4 text-sm font-semibold">Playlist</span>
          </a>

          <h2 className="text-black font-semibold my-2 mx-3">More</h2>

          <a href="" className="flex items-center  mx-2 px-4 py-2 rounded hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>

            <span className="ml-4 text-sm font-semibold">Seting</span>
          </a>

          <a href="" className="flex items-center  mx-2 px-4 py-2 rounded hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>

            <span className="ml-4 text-sm font-semibold">Account</span>
          </a>

          <a href="" className="flex items-center  mx-2 px-4 py-2 rounded hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>

            <span className="ml-4 text-sm font-semibold">Logout</span>
          </a>
        </nav>
    </aside>
      
  );
}

/*      

*/