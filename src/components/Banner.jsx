import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2016/10/16/10/11/bullion-1744773_1280.jpg",
    title: "Welcome to Gold",
    description: "About gold ",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1426332768/vector/2023-new-year-and-happy-christmas-background.jpg?s=2048x2048&w=is&k=20&c=M-wRwLo0kKl6L5G3H4Rygy_Yj3yCgdUKLFXRDs2TE6o=",
    title: "Gold 2",
    description: "gold 2",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2024/03/27/02/44/ai-generated-8658026_960_720.jpg",
    title: "gold 3",
    description: "gold 3",
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
  };

  return (
    <div className="relative overflow-hidden w-full px-24 h-[30vh] ">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-[600px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full max-w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl md:text-6xl   font-bold">
                  {slide.title}
                </h1>
              </div>

              <p className="mt-4 text-lg px-12  opacity-70 md:text-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
