import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsTable from '../../components/NewsTable/NewsTable'; // Import NewsTable component

export default function MoreNews() {
  const apiUrl = import.meta.env.VITE_API_URL_NEWS;
  const [entries, setEntries] = useState([]);
  const [showNewEntryForm, setShowNewEntryForm] = useState(false); // State untuk mengontrol pop-up
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true'); // Get login status
  const [editEntryId, setEditEntryId] = useState(null);
  const [newEntry, setNewEntry] = useState({
    tanggal: "", 
    kategori: "", 
    judul: "" 
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      const formattedData = response.data.map(item => ({
        id: item.id,
        tanggal: item.tanggal,
        kategori: item.kategori,
        judul: item.judul
      }));
      setEntries(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePost = async () => {
    try {
      await axios.post(apiUrl, newEntry);
      setNewEntry({ tanggal: "", kategori: "", judul: "" });
      setShowNewEntryForm(false);
      fetchData();
    } catch (error) {
      console.error('Error submitting new entry:', error);
    }
  };

  const handlePut = async () => {
    try {
      await axios.put(`${apiUrl}/${editEntryId}`, newEntry);
      setEditEntryId(null);
      setShowNewEntryForm(false);
      fetchData();
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };
  
  const handleEdit = (id) => {
    setEditEntryId(id);
    const entryToEdit = entries.find(entry => entry.id === id);
    setNewEntry(entryToEdit);
    setShowNewEntryForm(true);
  };

  const toggleNewEntryForm = (editMode = false) => {
    setEditEntryId(editMode ? editEntryId : null);
    setShowNewEntryForm(!showNewEntryForm); // Memperbarui state untuk menampilkan atau menyembunyikan pop-up
  };

  return (
    <div className="container">
      <div className="flex items-center gap-8">
        <img src="/logo.svg" alt="logo" width={"40px"} />
        <h1 className="font-black my-8 col-span-2 text-rose-300 text-xl tracking-[4px]">RECENT NEWS</h1>
        <hr className="flex-grow border-t-4 border-rose-300 w-8" />
      </div>

      <div className="mb-8 font-normal flex justify-center text-xl text-[#424242]" >
        <p>
          Dapatkan berita terbaru tentang dunia cosplay, acara komunitas, dan 
          pengumuman terkini dari komunitas kami di halaman ini. Diperbarui secara berkala dengan 
          informasi terbaru, Recent News menyajikan gambaran lengkap tentang kegiatan dan acara 
          yang sedang berlangsung, serta kabar-kabar menarik lainnya dari komunitas cosplay kami. 
          Jangan lewatkan kesempatan untuk tetap terhubung dengan peristiwa-peristiwa terbaru dan 
          menjadi bagian dari komunitas yang semakin berkembang!
        </p>
      </div>

      <NewsTable
        entries={entries}
        hoveredRow={hoveredRow} 
        setHoveredRow={setHoveredRow}
        handleEdit={handleEdit}
        handleDelete={handleDelete} // Menambahkan properti handleDelete
      />

      {isLoggedIn && (
        <div className="mt-8">
          <button onClick={() => toggleNewEntryForm()} className="bg-rose-300 hover:bg-rose-400 text-white font-bold py-2 px-4 rounded">
            Add New Entry
          </button>

          {showNewEntryForm && (
            <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
              <div className="bg-white p-8 rounded-lg">
                <h2 className="font-bold text-lg mb-4 text-rose-300">Add New Entry</h2>
                <input
                  type="text"
                  name="tanggal"
                  placeholder="Date (YYYY.MM.DD)"
                  value={newEntry.tanggal}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 rounded-md px-3 py-2 mb-2 mr-4"
                />
                <input
                  type="text"
                  name="kategori"
                  placeholder="Category"
                  value={newEntry.kategori}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 rounded-md px-3 py-2 mb-2 mr-4"
                />
                <input
                  type="text"
                  name="judul"
                  placeholder="Title"
                  value={newEntry.judul}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 rounded-md px-3 py-2 mb-2 mr-4"
                />
                <br />
                {editEntryId ? (
                  <button onClick={handlePut} className="bg-rose-300 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded">
                    Update
                  </button>
                ) : (
                  <button onClick={handlePost} className="bg-rose-300 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded">
                    Submit
                  </button>
                )}
                <button onClick={() => toggleNewEntryForm()} className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-4">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
