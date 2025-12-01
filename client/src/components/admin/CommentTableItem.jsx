import React from "react";
import { assets } from "../../assets/assets";

const CommentTableItem = ({ comment, index, fetchComments }) => {
  const { blog, createdAt } = comment;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100/40 transition">
      {/* BLOG + COMMENT DETAILS */}
      <td className="px-6 py-4 align-top text-sm text-gray-700">
        <b className="font-medium text-gray-700">Blog</b> : {blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-700">Name</b> : {comment.name}
        <br />
        <b className="font-medium text-gray-700">Comment</b> : {comment.content}
      </td>

      {/* DATE */}
      <td className="px-6 py-4 text-sm text-gray-700 max-sm:hidden">
        {BlogDate.toLocaleDateString()}
      </td>

      {/* ACTIONS */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">

          {/* APPROVE BUTTON / TEXT */}
          {!comment.isApproved ? (
            <img
              src={assets.tick_icon}
              alt="approve"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition"
            />
          ) : (
            <span className="text-green-600 text-sm font-medium">
              Approved
            </span>
          )}

          {/* DELETE ICON */}
          <img
            src={assets.bin_icon}
            alt="delete"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
