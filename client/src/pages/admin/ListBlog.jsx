import React, { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = () => {
    setBlogs(blog_data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="w-full bg-blue-50/50 p-5 sm:pl-20">
      <h1 className="text-2xl font-semibold mb-6">All Blogs</h1>

      <div className="relative max-h-[70vh] overflow-y-auto overflow-x-auto bg-white rounded-lg shadow-md scrollbar-hide">
        <table className="w-full text-sm text-gray-700">
          <thead className="text-xs uppercase bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Blog Title</th>
              <th className="px-4 py-3 text-left max-sm:hidden">Date</th>
              <th className="px-4 py-3 text-left max-sm:hidden">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog, index) => (
              <BlogTableItem
                key={blog._id}
                blog={blog}
                fetchBlogs={fetchBlogs}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
