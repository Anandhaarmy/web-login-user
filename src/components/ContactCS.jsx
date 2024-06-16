import React from 'react';

const ContactCS = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mx-auto max-w-md">
      <h2 className="text-xl font-bold mb-4">Hubungi Customer Service</h2>
      <a
        href="tel:082623639272"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md block mb-2"
      >
        WA CS: 0826-2363-9272
      </a>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md block">
        Chat CS
      </button>
    </div>
  );
};

export default ContactCS;
