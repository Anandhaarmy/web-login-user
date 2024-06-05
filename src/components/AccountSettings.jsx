import React from 'react';
import profilePic from '../assets/profile.png'; // Ganti dengan path gambar profil yang sesuai

const AccountSettings = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-8">
          <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full" />
          <h2 className="text-xl font-bold mt-4">Luthfi Firmansyah</h2>
          <p className="text-gray-600">Luthfiajaz@gmail.com</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-4">Account Setting</h3>
            <p className="text-gray-600 mb-4">Here you can change account information</p>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Username*</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email Address*</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">New Address</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Change Password</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Old Password*</label>
                <input type="password" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">New Password*</label>
                <input type="password" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Confirm Password*</label>
                <input type="password" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-orange-600">Save</button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
