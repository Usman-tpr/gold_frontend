import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
const ProductCard = ({ imageSrc, price, location, title, time }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
      <img src={imageSrc} alt="Product" className="w-full h-48 object-cover" />

      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-gray-800">${price}</p>
          <div>
            {liked ? (
              <GoHeartFill
                className="text-yellow-400"
                size={25}
                onClick={toggleLike}
              />
            ) : (
              <GoHeart size={25} onClick={toggleLike} />
            )}
          </div>
        </div>
        <div className="font-semibold text-xl">{title}</div>

        <p className="text-sm text-gray-600 mt-2">{location}</p>
        <p className="text-sm text-gray-600 mt-2">{time}</p>
      </div>
    </div>
  );
};

export default ProductCard;
