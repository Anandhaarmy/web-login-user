import React from 'react';

const AddKostForm = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mx-auto max-w-md">
      <h2 className="text-xl font-bold mb-4">Tambah Data Kost</h2>
      <div className="mb-4">
        <label htmlFor="namaKost" className="block text-sm font-medium text-gray-700">
          Nama Kost
        </label>
        <input
          type="text"
          id="namaKost"
          name="namaKost"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1"
          placeholder="Nama Kost"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="noRekening" className="block text-sm font-medium text-gray-700">
          Nomor Rekening
        </label>
        <input
          type="text"
          id="noRekening"
          name="noRekening"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1"
          placeholder="Nomor Rekening"
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md block w-full">
        Tambah Kost
      </button>
    </div>
  );
};

export default AddKostForm;
