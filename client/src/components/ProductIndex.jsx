import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const ProductIndex = ({ post }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const photos = post.photos || [];

  const { profile } = useSelector((state) => state.getProfileReducer);

  const API_URL = import.meta.env.VITE_API_URL;
  const fullImageUrl = API_URL + post.cover_photo;
  const fullProfileImageUrl = API_URL + post.profile_photo;

  const slides = [fullImageUrl, ...photos.map((photo) => API_URL + photo.photo)];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'kes' }).format(price);
  };

  return (
    <div className="mx-4 sm:px-2">
      <Link to={profile?.username === post?.user ? '/me' : `profile/${post?.user}`}>
        <div className="flex justify-start space-x-2">
          <img
            src={fullProfileImageUrl}
            className="w-9 hover:scale-105 duration-300 rounded-full"
            alt="Profile"
          />
          <p className="mt-2 text-sm font-medium dark:text-white hover:scale-105 duration-300">
            {post.user}
          </p>
        </div>
      </Link>
      <Link to={`post/${post.slug}`} className="flex flex-col text-center bg-white rounded-lg dark:bg-dark sm:p-3 p-0 w-[400px]">
        <div className="w-full relative overflow-hidden">
          {/* Slider Images */}
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="md:w-full w-full md:h-[200px] h-[300px]"
              >
                <img
                  src={slide}
                  className="object-cover w-full h-full rounded-lg "
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black"
            onClick={handlePrev}
          >
            <BsChevronCompactLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black"
            onClick={handleNext}
          >
            <BsChevronCompactRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide ? 'bg-blue-500' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
        <div className="p-4 text-left">
          <p className="text-lg font-semibold dark:text-white">
            {post.title || 'Product Title'}
          </p>
          <p className="text-gray-500 dark:text-gray-400 line-clamp-1">
            {post.description || 'Product description goes here...'}
          </p>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
            <span className="text-dark dark:text-white">Price</span> : {formatPrice(post?.price)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductIndex;
