import React, { useState } from 'react';

const MoreGallery = () => {
  // Data gambar (contoh)
  const [images, setImages] = useState([
    { id: 1, url: '/assets/Gallery/image1.jpg' },
    { id: 2, url: '/assets/Gallery/image2.jpg' },
    { id: 3, url: '/assets/Gallery/image3.jpg' },
    { id: 4, url: '/assets/Gallery/image4.jpg' },
    { id: 5, url: '/assets/Gallery/image5.jpg' },
    { id: 6, url: '/assets/Gallery/image6.jpg' },
    { id: 7, url: '/assets/Gallery/image7.jpg' },
    { id: 8, url: '/assets/Gallery/image8.jpg' },
  ]);

  // State untuk nilai pencarian
  const [searchTerm, setSearchTerm] = useState('');

  // Handler perubahan pada input pencarian
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fungsi untuk melakukan pencarian berdasarkan URL gambar
  const searchImages = (term) => {
    return images.filter(image => image.url.toLowerCase().includes(term.toLowerCase()));
  };

  // Lakukan pencarian sesuai dengan nilai searchTerm
  const searchedImages = searchTerm ? searchImages(searchTerm) : images;

  return (
    <div className="container">
      <h1 className="font-black my-8 col-span-2 text-rose-300 text-xl tracking-[4px]">MORE GALLERY</h1>

      {/* Input untuk pencarian gambar */}
      <input
        type="text"
        placeholder="Search images..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
      />

      {/* Tampilkan hasil pencarian */}
      <div className="grid grid-cols-3 gap-4">
        {searchedImages.map(image => (
          <div key={image.id} className="w-full" style={{ paddingBottom: "100%", position: "relative" }}>
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreGallery;
