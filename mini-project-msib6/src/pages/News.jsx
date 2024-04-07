import React, { useState } from "react";

const News = () => {
  const [entries, setEntries] = useState([
    { date: "2023.12.06", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" },
    { date: "2023.12.07", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" },
    { date: "2023.12.07", category: "Cosplay", title: "Die Fröhliche 『天使の聖域』" }
  ]);

  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <div>
      <div className="flex items-center gap-8">
        <img src="/logo.svg" alt="logo" width={"40px"} />
        <h1 className="font-black my-8 col-span-2 text-rose-300 text-xl tracking-[4px]">NEWS</h1>
        <hr className="flex-grow border-t-4 border-rose-300 w-8" />
      </div>

      <table className="table-fixed w-full text-xl text-center text-gray-500">
        <thead className="justify-center text-xl text-white uppercase bg-rose-300">
          <tr>
            <th className="col p-2">Tanggal</th>
            <th className="col p-2">Kategori</th>
            <th className="col p-2">Judul</th>
          </tr>
        </thead>
        <tbody>
        {entries.map((entry, index) => (
            <tr
              key={index}
              className={hoveredRow === index ? "bg-rose-400 text-white" : ""}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td className="p-2 text-center">{entry.date}</td>
              <td className="p-2 text-center">{entry.category}</td>
              <td className="p-2 text-center">{entry.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <a href="#" className="font-s text-rose-300 text-lg flex justify-end items-end">More News &rarr;</a>
    </div>
  );
};

export default News;
