import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import NewsTable from "../../components/NewsTable/NewsTable";

const News = () => {
  const [entries, setEntries] = useState([]);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://662e4424a7dda1fa378c7e95.mockapi.io/News');
      // Urutkan data berdasarkan ID secara menurun
      const sortedData = response.data.sort((a, b) => b.id - a.id);
      // Ambil 3 data pertama setelah data diurutkan
      const latestEntries = sortedData.slice(0, 3);
      setEntries(latestEntries);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-8">
        <img src="/logo.svg" alt="logo" width={"40px"} />
        <h1 className="font-black my-8 col-span-2 text-rose-300 text-xl tracking-[4px]">NEWS</h1>
        <hr className="flex-grow border-t-4 border-rose-300 w-8" />
      </div>

      <NewsTable entries={entries} hoveredRow={hoveredRow} setHoveredRow={setHoveredRow} />

      <br />
      <Link to="/MoreNews" className="mt-4 font-serif my-8 text-rose-300 text-lg flex justify-end items-end hover:text-rose-400 hover:scale-105 transition duration-300">More News &rarr;</Link>
    </div>
  );
};

export default News;
