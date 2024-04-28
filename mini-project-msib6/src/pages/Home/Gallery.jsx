import React from 'react'
import { Link } from 'react-router-dom';

export default function Gallery() {

  return (
    <div>
      <div>
        <div className="flex items-center gap-8">
          <img src="/logo.svg" alt="logo" width={"40px"} />
          <h1 className="font-black my-8 col-span-2 text-rose-300 text-xl tracking-[4px]">GALLERY</h1>
          <hr className="flex-grow border-t-4 border-rose-300 w-8" />
        </div>

        <div className="flex flex-col sm:flex-col md:flex-row gap-8 col-span-2 justify-center">
          <div className="group relative">
            <img src="/assets/galeri1.png" alt="merch 1" className="w-full sm:w-1/1 rounded-lg shadow-md group-hover:scale-105 transition duration-300"/>
            <p className="font-serif mt-4 flex justify-center text-xs tracking-[4px] text-[#424242]">
              お隣の天使様にいつの間にか駄目人間に
            </p>
            <p className="font-normal flex justify-center text-xl text-[#424242]">
              Integer: Joukouhougaku no Sekai
            </p>
          </div>
          <div className="group relative">
            <img src="/assets/galeri1.png" alt="merch 2" className="w-full sm:w-1/1 rounded-lg shadow-md group-hover:scale-105 transition duration-300"/>
            <p className="font-serif mt-4 flex justify-center text-xs tracking-[4px] text-[#424242]">
              お隣の天使様にいつの間にか駄目人間に
            </p>
            <p className="font-normal flex justify-center text-xl text-[#424242]">
              Integer: Joukouhougaku no Sekai
            </p>
          </div>
          <div className="group relative">
            <img src="/assets/galeri1.png" alt="merch 3" className="w-full sm:w-1/1 rounded-lg shadow-md group-hover:scale-105 transition duration-300"/>
            <p className="font-serif mt-4 flex justify-center text-xs tracking-[4px] text-[#424242]">
              お隣の天使様にいつの間にか駄目人間に
            </p>
            <p className="font-normal flex justify-center text-xl text-[#424242]">
              Integer: Joukouhougaku no Sekai
            </p>
          </div>
        </div>
        
        <Link to="/MoreGallery" className="mt-4 font-serif my-8 text-rose-300 text-lg flex justify-end items-end hover:text-rose-400 hover:scale-105 transition duration-300">More Gallery &rarr;</Link>
      </div>
    </div>
  )
}
