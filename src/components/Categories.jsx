import React, { useState, useRef } from "react";
import "./allCategories.css";
import { FaMale, FaFemale, FaChild } from "react-icons/fa";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const Categories = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const carouselRef = useRef(null);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const categorieslist = [
    {
      _id: 0,
      name: "Male",
      image: <FaMale className="text-4xl text-white" />,
    },
    {
      _id: 1,
      name: "Female",
      image: <FaFemale className="text-4xl text-white" />,
    },
    {
      _id: 2,
      name: "Child",
      image: <FaChild className="text-4xl text-white" />,
    },
    {
      _id: 3,
      name: "Child",
      image: <FaChild className="text-4xl text-white" />,
    },
    {
      _id: 4,
      name: "Child",
      image: <FaChild className="text-4xl text-white" />,
    },
    {
      _id: 5,
      name: "Child",
      image: <FaChild className="text-4xl text-white" />,
    },
    {
      _id: 6,
      name: "Child",
      image: <FaChild className="text-4xl text-white" />,
    },
    {
      _id: 8,
      name: "Child",
      image: <FaChild className="text-4xl text-white" />,
    },
    {
      _id: 9,
      name: "Child",
      image: <FaChild className="text-4xl text-white" />,
    },
    {
      _id: 10,
      name: "Child",
      image: <FaChild className="text-4xl text-white" />,
    },
    {
      _id: 11,
      name: "Child",
      image: <FaChild className="text-4xl text-white" />,
    },
    {
      _id: 12,
      name: "Child",
      image: <FaChild className="text-4xl text-white" />,
    },
    {
      _id: 13,
      name: "Child",
      image: <FaChild className="text-4xl text-white" />,
    },
    {
      _id: 14,
      name: "Child",
      image: <FaChild className="text-4xl text-white" />,
    },
  ];

  return (
    <div className=" px-24">
      <h2 className="text-2xl font-bold my-8">All Categories</h2>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-[-20px] top-[22%] transform -translate-y-1/2 z-10 p-2 bg-slate-50 hover:bg-gray-300 rounded-full"
        >
          <GoChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-[-20px] top-[22%] transform -translate-y-1/2 z-10 p-2 bg-slate-50 hover:bg-gray-300 rounded-full"
        >
          <GoChevronRight />
        </button>
        <div
          ref={carouselRef}
          className="relative flex justify-between carousel carousel-center gap-16 overflow-x-auto px-4 scrollbar-hide"
        >
          {categorieslist.map((item) => (
            <div
              className="relative cursor-pointer carousel-item"
              onMouseEnter={() => handleMouseEnter(item._id)}
              onMouseLeave={handleMouseLeave}
              key={item._id}
              style={{ minHeight: "150px" }}
            >
              <div className="bg-yellow-400 rounded-full p-3">{item.image}</div>

              {hoveredItem === item._id && (
                <div className="mt-2 flex justify-center">
                  <p className="text-sm font-bold name-text">{item.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
