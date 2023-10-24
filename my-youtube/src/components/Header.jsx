import React from "react";
import YoutubeLogo from "./../assets/YoutubeLogo.png";
import HamburgerLogo from "./../assets/hamburger-menu.png";
import SearchIcon from "./../assets/SearchIcon.png";
// import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-14 px-4 flex flex-row items-center justify-between shadow-md" >
      <div>
        <img className="w-6 h-6 grid-cols-2" src={HamburgerLogo} alt="Menu" />
      </div>
      <a href="/">
          <img className="h-5 w-22 grid-cols-3" src={YoutubeLogo} alt="Youtube" />
      </a>
      <div className="md:w-56 lg:w-[800px]">
        <input
          className="relative items-center border-solid border-black border-2 rounded-tl-full rounded-bl-full pr-1 pl-4 ml-8 w-auto  flex-1"
          type="text"
          placeholder="Search "
        />
        <button type="submit" className="w-16 bg-gray-500 " >
          <img 
          className="w-6 h-6 " 
          src={SearchIcon} 
          alt="Serach Icon" 
          />
        </button>
      </div>

      <h1> Login logo </h1>
    </div>
  );
};

export default Header;
