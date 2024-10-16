import React from "react";
import Navbar from "./Navbar";
import Test from "./Test";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Necklace from "../components/products/Necklace";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Navbar />
        <Banner />
        <Categories />
        <Necklace />
      </div>
    </>
  );
};

export default HomePage;
