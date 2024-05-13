import React, { useState } from 'react';

const NewsTable = ({ entries, hoveredRow, setHoveredRow, handleEdit, handleDelete }) => {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedEntryDetail, setSelectedEntryDetail] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleEditClick = (entryId) => {
    setSelectedEntry(entryId);
    handleEdit(entryId);
  };

  const handleDeleteClick = (entryId) => {
    setSelectedEntry(entryId);
    handleDelete(entryId);
  };

  const handleRowClick = (entry) => {
    setSelectedEntryDetail(entry);
    setShowDetailModal(true);
  };

  return (
    <div>
      <table className="table-fixed w-full text-xl text-center text-gray-500">
        <thead className="justify-center lg:text-xl text-white uppercase bg-rose-300 sm:text-sm md:text-md">
          <tr>
            <th className="col p-2">Date</th>
            <th className="col p-2">Title</th>
            <th className="col p-2">Category</th>
            {isLoggedIn && <th className="col p-2">Actions</th>}
          </tr>
        </thead>
        <tbody className="sm:text-sm md:text-md lg:text-xl">
          {entries.map((entry, index) => (
            <tr
              key={index}
              className={hoveredRow === index ? "bg-rose-400 text-white cursor-pointer" : "cursor-pointer"}
              onClick={() => handleRowClick(entry)}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td className="p-2 text-center">{entry.date}</td>
              <td className="p-2 text-center">{entry.title}</td>
              <td className="p-2 text-center">{entry.category}</td>
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

      {showDetailModal && (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="container aspect-auto bg-white p-8 rounded-lg">
            <h2 className="font-bold text-lg mb-4 text-rose-300">Detail</h2>
            <p>Date: {selectedEntryDetail.date}</p>
            <p>Title: {selectedEntryDetail.title}</p>
            <p>Category: {selectedEntryDetail.category}</p>
            <p>Description: {selectedEntryDetail.description}</p>
            <button onClick={() => setShowDetailModal(false)} className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mt-4">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsTable;
