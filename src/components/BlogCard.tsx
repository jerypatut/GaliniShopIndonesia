import React from "react";

interface BlogCardProps {
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, author, image, excerpt }) => {
  return (
    <div className="mb-12 border-b pb-6">
      <img src={image} alt={title} className="w-full max-w-md mx-auto rounded shadow mb-4" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="text-sm text-gray-500 mb-2">{author} | {date}</div>
      <p className="text-gray-700">{excerpt}</p>
      <button className="mt-4 text-blue-600 hover:underline">Continue Reading &rarr;</button>
    </div>
  );
};

export default BlogCard;
