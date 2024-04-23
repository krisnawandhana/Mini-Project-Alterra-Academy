import React, { useState } from 'react';
import NewsTable from '../../components/NewsTable/NewsTable'; // Import NewsTable component

export default function MoreNews() {
  const [entries, setEntries] = useState([
    { date: "2023.12.06", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" },
    { date: "2023.12.07", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" },
    { date: "2023.12.07", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" },
    { date: "2023.12.07", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" },
    { date: "2023.12.07", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" }
  ]);
  
  return (
    <div className="container">
      {/* <h1 className="font-black my-8 col-span-2 text-rose-300 text-xl tracking-[4px]">RECENT NEWS</h1> */}
      <div className="flex items-center gap-8">
        <img src="/logo.svg" alt="logo" width={"40px"} />
        <h1 className="font-black my-8 col-span-2 text-rose-300 text-xl tracking-[4px]">RECENT NEWS</h1>
        <hr className="flex-grow border-t-4 border-rose-300 w-8" />
      </div>

      <div className="mb-8 font-normal flex justify-center text-xl text-[#424242]" >
        <p >
          Dapatkan berita terbaru tentang dunia cosplay, acara komunitas, dan 
          pengumuman terkini dari komunitas kami di halaman ini. Diperbarui secara berkala dengan 
          informasi terbaru, Recent News menyajikan gambaran lengkap tentang kegiatan dan acara 
          yang sedang berlangsung, serta kabar-kabar menarik lainnya dari komunitas cosplay kami. 
          Jangan lewatkan kesempatan untuk tetap terhubung dengan peristiwa-peristiwa terbaru dan 
          menjadi bagian dari komunitas yang semakin berkembang!
        </p>
      </div>
      
      {/* Render NewsTable component with entries */}
      <NewsTable entries={entries} hoveredRow={null} setHoveredRow={() => {}} />
    </div>
  );
}
