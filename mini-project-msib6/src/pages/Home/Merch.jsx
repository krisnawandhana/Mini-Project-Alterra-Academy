import React from 'react'
import { Link } from 'react-router-dom';

export default function Merch() {
  return (
    <div>
        <div>
          <div className="flex items-center gap-8">
            <img src="/logo.svg" alt="logo" width={"40px"} />
            <h1 className="font-black my-8 col-span-2 text-rose-300 text-xl tracking-[4px]">MERCH </h1>
            <hr className="flex-grow border-t-4 border-rose-300 w-8" />
          </div>
          <div className="flex gap-8 col-span-2 justify-center">
            <div className="group relative">
              <img src="/assets/merch2.png" alt="merch 1" className="w-1/1 rounded-lg shadow-md group-hover:scale-105 transition duration-300"/>
              <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-rose-300 opacity-0 group-hover:opacity-60 scale-105 transition duration-300"></div>
              <p className="text-white absolute inset-x-0 bottom-0 px-4 py-2 invisible group-hover:visible scale-105 transition duration-300  ">Merch Description 1</p>
            </div>
            <div className="group relative">
              <img src="/assets/merch2.png" alt="merch 2" className="w-1/1 rounded-lg shadow-md group-hover:scale-105 transition duration-300"/>
              <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-rose-300 opacity-0 group-hover:opacity-60 scale-105 transition duration-300"></div>
              <p className="text-white absolute inset-x-0 bottom-0 px-4 py-2 invisible group-hover:visible scale-105 transition duration-300">Merch Description 2</p>
            </div>
            <div className="group relative">
              <img src="/assets/merch2.png" alt="merch 3" className="w-1/1 rounded-lg shadow-md group-hover:scale-105 transition duration-300"/>
              <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-rose-300 opacity-0 group-hover:opacity-60 scale-105 transition duration-300"></div>
              <p className="text-white absolute inset-x-0 bottom-0 px-4 py-2 invisible group-hover:visible scale-105 transition duration-300">Merch Description 3</p>
            </div>
          </div>
          <br />
          <Link to="/MoreMerch" className="mt-4 font-sheriff my-8 text-rose-300 text-lg flex justify-end items-end hover:text-rose-400 hover:scale-105 transition duration-300">
            More Merch &rarr;
          </Link>
        </div>
    </div>
  )
}
