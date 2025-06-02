import img1 from '../assets/images/images1.jpg';
import img2 from '../assets/images/images2.jpg';
import img3 from '../assets/images/images3.jpg';
import img4 from '../assets/images/images4.jpg';
import img5 from '../assets/images/images5.jpg';

export interface Product {
  id: number;
  image: string;
  author: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;  // <== tambah slug di sini
}

export const blogData: Product[] = [
  {
    id: 1,
    image: img1,
    author: 'John Doe',
    title: 'Apple-Indonesia Terbaru',
    date: 'Juni 24, 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    slug: 'apple-indonesia-terbaru',
  },
  {
    id: 2,
    image: img2,
    author: 'Jane Smith',
    title: 'Tech Innovations in 2024',
    date: 'Juni 22, 2024',
    excerpt: 'Aliquam euismod, ipsum id sollicitudin tristique, enim nunc hendrerit ligula, nec cursus purus arcu sit amet nisl.',
    slug: 'tech-innovations-2024',
  },
  {
    id: 3,
    image: img3,
    author: 'Michael Johnson',
    title: 'Smartphones of the Future',
    date: 'Juni 20, 2024',
    excerpt: 'Curabitur lacinia ligula sit amet tortor venenatis, in convallis leo tincidunt. Vestibulum viverra nisi et mi sollicitudin.',
      slug: 'apple-indonesia-terbaru',
  },
  {
    id: 4,
    image: img4,
    author: 'Emily Davis',
    title: 'Virtual Reality Trends',
    date: 'Juni 18, 2024',
    excerpt: 'Nullam non orci quis tortor dignissim volutpat. Phasellus auctor euismod sapien, sit amet fringilla justo ultricies in.',
      slug: 'apple-indonesia-terbaru',
  },
  {
    id: 5,
    image: img5,
    author: 'Sarah Lee',
    title: 'The Rise of AI in 2024',
    date: 'Juni 16, 2024',
    excerpt: 'Sed fringilla est sit amet tortor tempus cursus. Fusce luctus tempor ipsum, at lobortis urna gravida et. Etiam at justo et dolor tincidunt condimentum.',
    slug: 'apple-indonesia-terbaru',
  },
];
