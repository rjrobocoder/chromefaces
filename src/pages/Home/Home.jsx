import React from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar";
import Gallery from "../../components/Gallery";

const Home = () => {
  return (
    <>
      <Header />
      <main className="px-6">
        <SearchBar />
        <Gallery />
      </main>
    </>
  );
};

export default Home;
