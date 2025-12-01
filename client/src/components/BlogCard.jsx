import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="min-w-[200px] h-80 *:max-w-sm bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <img src={image} alt="" className="w-full h-40 object-cover" />

      {/* Category */}
      <span className="block mt-3 ml-4 px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full w-fit">
        {category}
      </span>

      {/* Content */}
      <div className="p-4">
        <h5 className="text-[15px] font-medium text-gray-900 mb-2 line-clamp-2">
          {title}
        </h5>
        <p
          className="text-[12px] text-gray-600 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
        ></p>
      </div>
    </div>
  );
};

export default BlogCard;
