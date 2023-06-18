import React from "react";
import "../index.css";

const SearchBar = () => {
  return (
    <section className="w-full h-[350px] hero-gradient-background rounded-[35px] flex items-center justify-center">
      <div>
        <div className="py-2">
          <p className="text-[40px]">Find your best example here</p>
        </div>
        <div>
          <input
            type="search"
            className="h-[50px] rounded-[16px] w-full px-4"
            name="search"
            placeholder="Search"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
