import React from 'react'
import { Link } from 'react-router-dom'; // Mengimpor Redirect

export default function NoPage() {
  return (
    <div className="container">
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="justify-center flex flex-col items-center bg-white">
                <img src="/assets/NoPage/sad_furina.png" alt="404 Not Found" className="opacity-90" />
                <p className="font-black flex justify-center text-xl text-[#424242]">404</p>
                <p className="font-normal flex justify-center text-xl text-[#424242] opacity-50">Page Not Found</p>
                <p className="mt-4 font-normal flex justify-center text-xl text-[#424242]">We are sorry, the page you requested could not be found. Click&nbsp;<Link to="/"  className="text-blue-500 underline focus:outline-none">here</Link>&nbsp;to back.</p>
            </div>
        </div>
    </div>
  )
}
