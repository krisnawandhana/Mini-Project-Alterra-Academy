import React, { useState } from 'react';
import imagesData from '../../data/images.json'

const MoreGallery = () => {
  const [images, setImages] = useState(imagesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [uploading, setUploading] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Get login status from localStorage

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchImages = (term) => {
    return images.filter(image => image.description.toLowerCase().includes(term.toLowerCase()));
  };

  const searchedImages = searchTerm ? searchImages(searchTerm) : images;

  const handleDeleteImage = (id) => {
    const updatedImages = images.filter(image => image.id !== id);
    setImages(updatedImages);
  };

  const handleEditImage = (id) => {
    // Implementasi logika untuk mengedit gambar
    console.log(`Edit image with id ${id}`);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setNewImage(reader.result);
    };
  };

  const handleUploadSubmit = () => {
    if (newImage) {
      const id = images.length + 1;
      setImages([...images, { id: id, url: newImage }]);
      setNewImage(null);
      setUploading(false);
      setShowModal(false);
    }
  };

  return (
    <div className="container">
      <div className="flex items-center gap-8">
        <img src="/logo.svg" alt="logo" width={"40px"} />
        <h1 className="font-black my-8 col-span-2 text-rose-300 text-xl tracking-[4px]">IMAGES GALLERY</h1>
        <hr className="flex-grow border-t-4 border-rose-300 w-8" />
      </div>
      
      <div className="mb-4 font-normal flex justify-center text-xl text-gray-400 text-justify" >
        <p >
          Galeri ini berisi koleksi foto yang menarik yang diambil oleh Photographer kami. 
          Setiap gambar menampilkan momen-momen berharga, ekspresi manusia,
          atau suasana dari tempat foto tersebut diambil. 
          Setiap foto memiliki cerita unik yang memukau dan menginspirasi. Jelajahi galeri 
          ini untuk menemukan inspirasi, keindahan, dan kedamaian dalam setiap detailnya.
        </p>
      </div>

      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search images..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="bg-gray-50 border border-gray-300 rounded-md px-3 py-2 w-3/5"
        />
        {isLoggedIn === 'true' && (
          <div className="relative">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Upload Image
            </button>
            {showModal && (
              <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75 z-50">
                <div className="bg-white p-6 rounded-lg w-96">
                  <h2 className="text-xl font-bold mb-4">Upload Image</h2>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    className="mb-4"
                    onChange={handleImageUpload}
                  />
                  <div className="flex justify-end">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={handleUploadSubmit}
                    >
                      Submit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="card grid grid-cols-3">
        {searchedImages.map(image => (
          // Implementasi logika untuk menampilkan gambar
          <div key={image.id} className="card-body rounded relative hover:scale-105 transition duration-300">
            <figure>
              <img
                loading="lazy"
                src={image.url}
                alt={`Image ${image.id}`}
                className="skeleton inset-0 w-full h-full object-cover object-center aspect-[3/4]"
              />
            </figure>
            <div className="text-black text-center text-sm rounded-b-xl p-2">
              <h1>{image.description}</h1>
            </div>
            {isLoggedIn === 'true' && (
              <div className="flex items-center justify-center">
                <button onClick={() => handleEditImage(image.id)} className="bg-sky-300 px-4 py-2 rounded-xl text-white hover:bg-sky-500 mr-2">Edit</button>
                <button onClick={() => handleDeleteImage(image.id)} className="bg-red-400 px-4 py-2 rounded-xl text-white hover:bg-red-600">Delete</button>
              </div>
            )}  
          </div>
        ))}
      </div>
    </div>
  );

};

export default MoreGallery;