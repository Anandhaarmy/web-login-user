import React from 'react';

const KostCard = ({ name, address, buttonLabel, buttonColor }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <p>{address}</p>
      <button className={`bg-${buttonColor}-500 hover:bg-${buttonColor}-700 text-white font-bold py-2 px-4 rounded-md mt-4`}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default KostCard;
