import React from 'react';
import Navbar from './components/Navbar';
import ContactCS from './components/ContactCS';
import AddKostForm from './components/AddKost';

const App = () => {
  return (
    <div className="bg-blue-100 min-h-screen py-10 px-10">
      <Navbar />

      <div className="mt-10">
        <h1 className="text-3xl font-bold">KostCozy</h1>
      </div>

      <div className="mt-20 flex justify-center">
        <div className="max-w-md space-y-6">
          <ContactCS />
        </div>

        <div className="max-w-md ml-6 space-y-6">
          <AddKostForm />
        </div>
      </div>
    </div>
  );
};

export default App;
