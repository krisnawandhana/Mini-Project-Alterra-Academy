import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="justify-center flex flex-col items-center text-rose-300">
      <div className="justify-center flex flex-col items-center">
        <img src="/logo.svg" alt="logo"/>
        <h1 className="text-3xl font-bold tracking-[2px]">ABOUT US</h1>
        <p className="text-lg font-semibold">
          Profil Tokisaki Gallery
        </p>
      </div>

      <div className="flex flex-col m-8 gap-4">
        <img src="/assets/AboutUs/together.png" alt="about us" className="max-w-full h-auto rounded-lg shadow-md object-cover" style={{ aspectRatio: '1 / 1', maxHeight: "300px" }} />
        <p className="text-justify text-md text-[#424242]">
          Website ini merupakan platform daring yang menyediakan beragam informasi dan layanan yang bermanfaat bagi penggunanya.
          Berbagai fitur yang disajikan meliputi halaman berita, toko daring untuk membeli merchandise, galeri gambar, tempat 
          untuk menulis surat atau pengakuan, dan halaman profil pengguna. Pengguna dapat dengan mudah mengakses fitur-fitur 
          tersebut melalui menu navigasi yang terletak di bagian atas halaman. Selain itu, terdapat juga footer di bagian bawah 
          halaman yang mungkin berisi tautan-tautan tambahan atau informasi penting lainnya. Dengan desain yang ramah pengguna, 
          website ini bertujuan memberikan pengalaman yang menyenangkan dan informatif bagi pengunjungnya.
        </p>
      </div>
      <br />

      <p className="text-lg text-center font-semibold">
        ANGGOTA TIM KAMI
      </p>

      <div className="flex gap-20 m-8 text-[#424242]">
        <div className="flex flex-col items-center">
          <img src="/assets/AboutUs/avatar1.png" alt="avatar1" className="rounded-full object-cover mb-2" style={{ aspectRatio: '1 / 1', maxHeight: "200px" }} />
          <p className="opacity-40">
            FrontEnd
          </p>
          <p className="text-center font-black text-xl">
            Krisna Wandhana
          </p>
          <div className="flex gap-2 opacity-45 my-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <img src="/assets/AboutUs/avatar2.png" alt="avatar1" className="rounded-full object-cover mb-2" style={{ aspectRatio: '1 / 1', maxHeight: "200px" }} />
          <p className="opacity-40">
            Mental Support
          </p>
          <p className="text-center font-black text-xl">
            Sri Tarianti
          </p>
          <div className="flex gap-2 opacity-45 my-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src="/assets/AboutUs/avatar3.png" alt="avatar1" className="rounded-full object-cover mb-2" style={{ aspectRatio: '1 / 1', maxHeight: "200px" }} />
          <p className="opacity-40">
            Web Designer
          </p>
          <p className="text-center font-black text-xl">
            Rangga Permana
          </p>
          <div className="flex gap-2 opacity-45 my-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
