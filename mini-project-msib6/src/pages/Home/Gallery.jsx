import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../../data/images.json';

export default function Gallery() {
  const [topThreeImages, setTopThreeImages] = useState([]);

  useEffect(() => {
    // Ambil 3 foto pertama dari array images
    const firstThreeImages = images.slice(0, 3);
    setTopThreeImages(firstThreeImages);
  }, []);

  return (
    <div>
      <div>
        <div className="flex items-center gap-8">
          <img src="/logo.svg" alt="logo" width={"40px"} />
          <h1 className="font-black my-8 col-span-2 text-rose-300 text-xl tracking-[4px]">GALLERY</h1>
          <hr className="flex-grow border-t-4 border-rose-300 w-8" />
        </div>

        <div className="card md:grid md:grid-cols-3 gap-8 col-span-2 sm:flex sm:flex-col">
          {topThreeImages.map((image, index) => (
            <div key={index} className="group relative card-body rounded hover:scale-105 transition duration-300 aspect-[3/4]">
              <img src={image.url} alt={`img ${index + 1}`} className="skeleton w-full h-full object-cover object-center sm:w-1/1 rounded-lg shadow-md group-hover:scale-105 transition duration-300"/>
              <p className="font-serif font-medium mt-4 flex justify-center text-sm text-[#424242] text-center">
                {image.description}
              </p>
            </div>
          ))}
        </div>

        <Link to="/MoreGallery" className="mt-4 font-serif my-8 text-rose-300 text-lg flex justify-end items-end hover:text-rose-400 hover:scale-105 transition duration-300">More Gallery &rarr;</Link>
      </div>
    </div>
  );  
}
