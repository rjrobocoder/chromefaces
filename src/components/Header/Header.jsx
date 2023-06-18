import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../images/Google_Chrome_icon.svg";
import "../../index.css";

const Header = () => {
  return (
    <header className="w-full h-[80px] flex items-center px-6">
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-2">
          <button className="h-[34px] w-[34px] glassmorphism rounded-[10px]">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div>
            <p className="text-[18px] font-bold">Home</p>
          </div>
        </div>
        <div>
          <div className="rounded-full overflow-hidden animate-spin-slow">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
