import React from 'react';
import './index.css';
import PaymentConfirmationForm from './components/PaymentConfirmation';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-100 p-4 flex justify-between items-center">
        <img src="logo.png" className="h-10" alt="logo" />
        <nav>
          <a href="#" className="mx-2 text-gray-700">Beranda</a>
          <a href="#" className="mx-2 text-gray-700">Kost Saya</a>
          <a href="#" className="mx-2 text-gray-700">Tentang Kami</a>
          <div className="inline-block ml-4">
            <img src="profile-pic-url.jpg" alt="profile" className="h-10 w-10 rounded-full" />
          </div>
        </nav>
      </header>
      <main>
        <PaymentConfirmationForm />
        {/* Konten lainnya bisa tetap di sini */}
      </main>
    </div>
  );
}

export default App;
