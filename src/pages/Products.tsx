
function Product() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Product</h1>
        <p className="text-lg text-gray-700 mb-4">Selamat datang di halaman produk kami!</p>
        <p className="text-lg text-gray-700 mb-6">Berikut adalah daftar produk yang tersedia:</p>
        
        <ul className="space-y-2 text-lg text-gray-800">
          <li className="hover:text-blue-500 transition-colors">Produk 1</li>
          <li className="hover:text-blue-500 transition-colors">Produk 2</li>
          <li className="hover:text-blue-500 transition-colors">Produk 3</li>
        </ul>

        <p className="text-lg text-gray-700 mt-6">Silakan pilih produk yang Anda inginkan.</p>
      </div>
    </div>
  );
}

export default Product;
