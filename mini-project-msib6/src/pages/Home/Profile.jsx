import React from "react";

function Profile() {
    const user = {
      displayName: "Krisna Wandhana",
      email: "john@example",
      photoURL: "https://via.placeholder.com/150", // URL gambar profil placeholder
      phoneNumber: "+1234567890",
      address: "123 Main Street, City, Country",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacus et risus viverra varius nec et quam."
      // Anda bisa menambahkan lebih banyak detail profil di sini
    };
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Profile Page</h1>
        <div className="flex items-center space-x-4">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={user.photoURL}
            alt="Profile"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.displayName}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phoneNumber}</p>
            <p className="text-gray-600">{user.address}</p>
            <p className="text-gray-600">{user.bio}</p>
            {/* Anda bisa menambahkan lebih banyak detail profil di sini */}
          </div>
        </div>
      </div>
    );
  }

export default Profile;
