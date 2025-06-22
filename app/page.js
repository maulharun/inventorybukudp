import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-blue-100 to-white">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/image/file_00000000cae86230a06fa67671abba98-removebg-preview.png"
            alt="Logo DP"
            width={150}
            height={150}
            priority
            className="mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">Sistem Inventory Buku DP</h1>
          </div>
          <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
            Kelola dan pantau seluruh koleksi buku toko Anda dengan sistem inventory yang efisien, akurat, dan mudah digunakan.
          </p>
          <a href="/login">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Masuk ke Sistem
            </button>
          </a>
      </section>

      {/* Fitur Utama */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-center">Fitur Sistem</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Manajemen Stok</h3>
            <p className="text-gray-600">Catat jumlah masuk dan keluar setiap buku secara real-time.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Kategori Buku</h3>
            <p className="text-gray-600">Kelompokkan buku berdasarkan genre, penulis, atau tingkat usia.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Laporan Mingguan</h3>
            <p className="text-gray-600">Berisi laporan stok mingguan keluar & masuknya buku.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Pencatatan Supplier</h3>
            <p className="text-gray-600">Data lengkap tentang distribusi buku.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Peringatan Stok Menipis</h3>
            <p className="text-gray-600">Notifikasi otomatis jika stok buku hampir habis.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Laporan Harian</h3>
            <p className="text-gray-600">Berisi pantauan laporan stok harian keluar & masuknya buku.</p>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Sistem Inventory Toko Buku DP. All rights reserved.</p>
      </footer>
    </main>
  );
}
