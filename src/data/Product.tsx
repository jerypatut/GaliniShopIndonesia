import img1 from '../assets/images/images1.jpg';
import img2 from '../assets/images/images2.jpg';
import img3 from '../assets/images/images3.jpg';
import img4 from '../assets/images/images4.jpg';
import img5 from '../assets/images/images5.jpg';

export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
}

export const products: Product[] = [
  { id: 1, image: img1, name: "Produk 1", description: "Ini deskripsi produk 1" },
  { id: 2, image: img2, name: "Produk 2", description: "Ini deskripsi produk 2" },
  { id: 3, image: img3, name: "Produk 3", description: "Ini deskripsi produk 3" },
  { id: 4, image: img4, name: "Produk 4", description: "Ini deskripsi produk 4" },
  { id: 5, image: img5, name: "Produk 5", description: "Ini deskripsi produk 5" },
];
