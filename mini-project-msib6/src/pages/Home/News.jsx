import React, { useState } from "react";
import { Link } from 'react-router-dom';
import NewsTable from "../../components/NewsTable/NewsTable";

const News = () => {
  const [entries, setEntries] = useState([
    { date: "2023.12.06", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" },
    { date: "2023.12.07", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" },
    { date: "2023.12.07", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" },
    { date: "2023.12.07", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" },
    { date: "2023.12.07", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" }
  ]);

  const [hoveredRow, setHoveredRow] = useState(null);

  const latestEntries = entries.slice(0, 3);

  return (
    <div>
      <div className="flex items-center gap-8">
        <img src="/logo.svg" alt="logo" width={"40px"} />
        <h1 className="font-black my-8 col-span-2 text-rose-300 text-xl tracking-[4px]">NEWS</h1>
        <hr className="flex-grow border-t-4 border-rose-300 w-8" />
      </div>

      <NewsTable entries={latestEntries} hoveredRow={hoveredRow} setHoveredRow={setHoveredRow} />

      <br />
      <Link to="/MoreNews" className="mt-4 font-serif my-8 text-rose-300 text-lg flex justify-end items-end hover:text-rose-400 hover:scale-105 transition duration-300">More News &rarr;</Link>
    </div>
  );
};

export default News;
