import React, { useState } from 'react';

const NewsTable = ({ entries, hoveredRow, setHoveredRow, handleEdit, handleDelete }) => {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleEditClick = (entryId) => {
    setSelectedEntry(entryId);
    handleEdit(entryId);
  };

  const handleDeleteClick = (entryId) => {
    setSelectedEntry(entryId);
    handleDelete(entryId);
  };

  return (
    <table className="table-fixed w-full text-xl text-center text-gray-500">
      <thead className="justify-center text-xl text-white uppercase bg-rose-300">
        <tr>
          <th className="col p-2">Tanggal</th>
          <th className="col p-2">Kategori</th>
          <th className="col p-2">Judul</th>
          {isLoggedIn && <th className="col p-2">Actions</th>}
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
            <td className="p-2 text-center">{entry.tanggal}</td>
            <td className="p-2 text-center">{entry.kategori}</td>
            <td className="p-2 text-center">{entry.judul}</td>
            {isLoggedIn && (
              <td className="p-2 text-center">
                <button onClick={() => handleEditClick(entry.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => handleDeleteClick(entry.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewsTable;
