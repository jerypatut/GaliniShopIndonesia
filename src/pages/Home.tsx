import React from "react";
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";
import img1 from "../assets/images/images6.jpg";
import img2 from "../assets/images/images2.jpg";
import img3 from "../assets/images/images3.jpg";
import img4 from "../assets/images/images4.jpg";
import img5 from "../assets/images/images5.jpg";
import img6 from "../assets/images/images3.jpg";
import img7 from "../assets/images/images4.jpg";
import img8 from "../assets/images/images3.jpg";
import img9 from "../assets/images/images4.jpg";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="p-6 space-y-12 max-w-screen-xl mx-auto">
        {/* Hero Section */}
        <section className="bg-green-50 p-6 sm:p-12 rounded-xl shadow-md">
          {/* Mobile view */}
          <div className="flex flex-col items-center text-center space-y-4 sm:hidden">
            <h1 className="text-3xl sm:text-4xl font-bold text-green-600">
              Pt. GaliniShop Indonesia
            </h1>
            <p className="text-sm text-gray-700 font-medium px-2">
              Jangan lewatkan kesempatan untuk menemukan pusat laptop dengan harga termurah di seluruh Indonesia, hanya di gsi!
            </p>
            <div className="w-full space-y-2">
              <button className="bg-green-500 text-white py-2 rounded-lg text-lg font-semibold flex items-center justify-center w-full">
                <FaShoppingCart className="mr-2" /> Belanja
              </button>
              <button className="border border-green-500 text-green-700 py-2 rounded-lg text-lg font-semibold w-full">
                Lihat Lainnya
              </button>
            </div>
            <img
              src={img1}
              alt="Hero Product"
              className="w-full max-h-[300px] object-contain mx-auto rounded-xl"
            />
          </div>

          {/* Desktop & Tablet view */}
          <div className="hidden sm:flex items-center justify-between space-x-6">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold text-green-600">
                Pt.GaliniShop Indonesia
              </h1>
              <p className="text-base text-gray-700 font-medium">
                Jangan lewatkan kesempatan untuk menemukan pusat laptop dengan harga termurah di seluruh Indonesia, hanya di GSI!
              </p>
              <div className="space-x-4 mt-4">
                <button className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold inline-flex items-center">
                  <FaShoppingCart className="mr-2" /> Belanja
                </button>
                <button className="border border-green-500 text-green-700 py-2 px-6 rounded-lg text-lg font-semibold">
                  Lihat Lainnya
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img
                src={img1}
                alt="Hero Product"
                className="w-full max-h-[300px] object-contain mx-auto rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Produk Pilihan */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-green-600 text-center">
            Produk Pilihan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: img7, name: "Produk 1" },
              { img: img2, name: "Produk 2" },
              { img: img3, name: "Produk 3" },
              { img: img4, name: "Produk 4" },
              { img: img5, name: "Produk 5" },
              { img: img6, name: "Produk 6" },
              { img: img7, name: "Produk 7" },
              { img: img8, name: "Produk 8" },
              { img: img9, name: "Produk 9" },
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col"
              >
                <div className="w-full h-48 flex-shrink-0 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain mx-auto"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow justify-between space-y-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600 flex-grow">
                    Deskripsi {product.name.toLowerCase()} yang menarik dan
                    detail.
                  </p>
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <button className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full">
                      <FaShoppingBag className="mr-2" /> Masukkan Keranjang
                    </button>
                    <button className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 w-full">
                      <FaShoppingCart className="mr-2" /> Beli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
