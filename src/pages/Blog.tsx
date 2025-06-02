import React from "react";
import BlogCard from "../components/BlogCard";
import { blogData } from "../data/ProductHome";


const Blog: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Artikel utama */}
        <div className="md:col-span-3">
          {blogData.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
        </div>
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            {/* Add links to recent blog posts or categories */}
            <ul className="space-y-4">
              {blogData.slice(0, 5).map((item, index) => (
                <li key={index}>
                  <a href={`/blog/${item.slug}`} className="text-blue-600 hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
