import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BackToHome from '../components/BackToHome';
import { post } from '../Requests/Requests'; // Importing the postRequest function from your request.js

const SellPageAttributes = () => {
  const location = useLocation();
  const { category, subCategory } = location?.state || {};

  const [selectedImages, setSelectedImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    condition: 'new',
    price: '',
    location: 'kabul',
    desc: '',
  });

  // Handle input field changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection (up to 10 images)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 10);
    setSelectedImages((prev) => [...prev, ...files].slice(0, 10));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    selectedImages.forEach((image) => data.append('images', image));
    data.append('title', formData.title);
    data.append('condition', formData.condition);
    data.append('price', formData.price);
    data.append('location', formData.location);
    data.append('desc', formData.desc);
    data.append('category', category);
    data.append('subCategory', subCategory);

    const endpoint = '/product/add'; // Custom endpoint

    try {
      const response = await post(endpoint, data); // Using the postRequest function from request.js
      console.log(response)
      // Handle successful post (optional)
      console.log('Ad posted successfully');
    } catch (error) {
      console.error('Error posting ad:', error);
    }
  };

  return (
    <>
      <BackToHome />
      <h1 className="text-center text-lg md:text-2xl font-semibold my-10">
        Post Your Ad Here
      </h1>

      <div className="flex flex-wrap md:flex-nowrap gap-6 px-4 md:mx-20">
        <div className="w-full md:w-[70%] border-[1.5px] border-gray-500 p-4 rounded-lg shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Image Upload Section */}
            <div className="flex gap-4 items-center overflow-x-auto">
              <label className="block md:text-lg font-medium mb-1 w-[29%]">
                Select Images
              </label>
              {selectedImages.map((image, index) => (
                <div
                  key={index}
                  className="relative w-20 h-20 rounded-full overflow-hidden"
                >
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Selected ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {selectedImages.length < 10 && (
                <label
                  className="w-20 h-20 rounded-full border-dashed border-2 border-gray-400 flex items-center justify-center cursor-pointer"
                  title="Upload Image"
                >
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    name='images'
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  <span className="text-sm text-gray-500">Upload</span>
                </label>
              )}
            </div>
            <hr className="border-1 border-gray-500" />

            {/* Title Input */}
            <div className="flex">
              <label className="block md:text-lg font-medium mb-1 w-[29%]">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full border-2 hover:border-red-700 outline-none rounded-md p-1 md:p-2"
                placeholder="Enter title"
                required
              />
            </div>
            <hr className="border-1 border-gray-500" />

            {/* Condition Dropdown */}
            <div className="flex">
              <label className="block md:text-lg font-medium mb-1 w-[29%]">
                Condition
              </label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleInputChange}
                className="w-full border-2 hover:border-red-700 outline-none rounded-md p-1 md:p-2"
                required
              >
                <option value="new">New</option>
                <option value="old">Old</option>
                <option value="used">Used</option>
              </select>
            </div>
            <hr className="border-1 border-gray-500" />

            {/* Price Input */}
            <div className="flex">
              <label className="block md:text-lg font-medium mb-1 w-[29%]">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full border-2 hover:border-red-700 outline-none rounded-md p-1 md:p-2"
                placeholder="Enter price"
                required
              />
            </div>
            <hr className="border-1 border-gray-500" />

            {/* Location Dropdown */}
            <div className="flex">
              <label className="block md:text-lg font-medium mb-1 w-[29%]">
                Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full border-2 hover:border-red-700 outline-none rounded-md p-1 md:p-2"
                required
              >
                <option value="kabul">Kabul</option>
                <option value="herat">Herat</option>
                <option value="mazar">Mazar-e-Sharif</option>
              </select>
            </div>
            <hr className="border-1 border-gray-500" />

            {/* Description Input */}
            <div className="flex">
              <label className="block md:text-lg font-medium mb-1 w-[29%]">
                Description
              </label>
              <textarea
                name="desc"
                value={formData.desc}
                onChange={handleInputChange}
                className="w-full border-2 hover:border-red-700 outline-none rounded-md p-1 md:p-2"
                placeholder="Enter description"
                rows="4"
                required
              />
            </div>
            <hr className="border-1 border-gray-500" />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-xl font-semibold text-black p-2 rounded-md"
            >
              Post Ad
            </button>
          </form>
        </div>

        {/* Tips Section */}
        <div className="w-full md:w-[30%] border p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Tips for a Great Ad</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
            <li>Use clear and attractive images to showcase your product.</li>
            <li>Provide a detailed description for better understanding.</li>
            <li>Mention the product condition accurately to gain trust.</li>
            <li>Choose a fair price based on the market value.</li>
            <li>Ensure your contact information is up-to-date.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SellPageAttributes;
