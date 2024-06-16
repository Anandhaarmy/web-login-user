import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-end">
      <div className="flex space-x-4">
        <button className="bg-gray-200 px-4 py-2 rounded-md">Beranda</button>
        <button className="bg-gray-200 px-4 py-2 rounded-md">tentang kami</button>
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
