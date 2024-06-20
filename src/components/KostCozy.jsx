import React, { useState } from 'react';

function KostCozy() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="flex justify-between items-center p-4 bg-green-200">
        <div className="text-2xl font-bold">KostCozy</div>
        <nav className="relative">
          <div className="flex space-x-4 items-center">
            <a href="#" className="hover:text-gray-600">Beranda</a>
            <a href="#" className="hover:text-gray-600">Menu</a>
            <div className="relative">
              <button 
                onClick={toggleProfileMenu} 
                className="focus:outline-none"
              >
                <img 
                  src="path/to/your/profile-image.jpg" // ganti dengan path gambar profil Anda
                  alt="Profil"
                  className="w-10 h-10 rounded-full"
                />
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="p-4">
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold">Sekarang Cari Kost Semudah Rebahan</h1>
          <p>Mahasiswa Bingung cari kost dimana? Cari disini aja! Cari kost jadi lebih mudah, cepat, dan tidak perlu keliling kota.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <img src="kost1.jpg" alt="Kost 1" className="w-1/4 h-32 object-cover rounded-md" />
            <img src="kost2.jpg" alt="Kost 2" className="w-1/4 h-32 object-cover rounded-md" />
            <img src="kost3.jpg" alt="Kost 3" className="w-1/4 h-32 object-cover rounded-md" />
          </div>
        </section>

        <section className="mb-8">
          <div className="flex justify-center space-x-4 mb-4">
            <input type="text" placeholder="Lokasi" className="p-2 border rounded-md" />
            <input type="text" placeholder="Fasilitas" className="p-2 border rounded-md" />
            <input type="text" placeholder="Harga" className="p-2 border rounded-md" />
            <button className="p-2 bg-yellow-500 text-white rounded-md">Cari</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="border p-4 rounded-md">
              <img src="unsiq.jpg" alt="UNSIQ" className="w-full h-32 object-cover rounded-md mb-2" />
              <h2 className="font-bold">Universitas Sains Alquran (UNSIQ)</h2>
              <p>Jl. KH. Hasyim Asy'ari Km. 3, Kalibeber Kec. Mojotengah Wonosobo</p>
              <p className="font-bold text-yellow-600">Rp. 800.000/bulan</p>
              <button className="mt-2 p-2 bg-blue-500 text-white rounded-md">Detail Kost</button>
            </div>
            <div className="border p-4 rounded-md">
              <img src="stikes.jpg" alt="Stikes" className="w-full h-32 object-cover rounded-md mb-2" />
              <h2 className="font-bold">Sekolah Tinggi Ilmu Kesehatan Muhammadiyah Wonosobo</h2>
              <p>Jl. Prajurit, Kec. Mojotengah Wonosobo</p>
              <p className="font-bold text-yellow-600">Rp. 800.000/bulan</p>
              <button className="mt-2 p-2 bg-blue-500 text-white rounded-md">Detail Kost</button>
            </div>
            <div className="border p-4 rounded-md">
              <img src="pgri.jpg" alt="PGRI" className="w-full h-32 object-cover rounded-md mb-2" />
              <h2 className="font-bold">Akademi Pertanian PGRI Wonosobo</h2>
              <p>Jl. Sapuran Kertek, Kec. Sapuran Wonosobo</p>
              <p className="font-bold text-yellow-600">Rp. 800.000/bulan</p>
              <button className="mt-2 p-2 bg-blue-500 text-white rounded-md">Detail Kost</button>
            </div>
          </div>
        </section>

        <section className="text-center mb-8">
          <h2 className="text-2xl font-bold">Senang Bertemu dengan Anda</h2>
          <p>Selamat datang di KostCozy, tempat yang nyaman dan aman bagi mahasiswa untuk mencari kost. Temukan tempat tinggal terbaik dengan mudah, tanpa perlu repot berkeliling kota.</p>
          <p>Tim KostCozy</p>
        </section>
      </main>

      <footer className="p-4 bg-green-200 text-center">
        <p>&copy; 2024 KostCozy. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}

export default KostCozy;
