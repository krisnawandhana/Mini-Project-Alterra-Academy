import React from 'react';

const NewsTable = ({ entries, hoveredRow, setHoveredRow }) => {
  return (
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
  );
};

export default NewsTable;
