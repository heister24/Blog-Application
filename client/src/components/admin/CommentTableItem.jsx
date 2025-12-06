import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../Context/AppContext";
import toast from "react-hot-toast";

const CommentTableItem = ({ comment, index, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  const { axios } = useAppContext();

  const approveComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approve-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/delete-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

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
              onClick={approveComment}
              src={assets.tick_icon}
              alt="approve"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition"
            />
          ) : (
            <span className="text-green-600 text-sm font-medium">Approved</span>
          )}

          {/* DELETE ICON */}
          <img
            onClick={deleteComment}
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
