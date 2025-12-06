import React, { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";
import CommentTableItem from "../../components/admin/CommentTableItem";
import { useAppContext } from "../../Context/AppContext";
import toast from "react-hot-toast";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const { axios } = useAppContext();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get("/api/admin/comments");
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <div className="flex justify-between items-center max-w-3xl">
        <h1 className="text-xl font-semibold">Comments</h1>

        <div className="flex gap-4">
          {/* Approved Button */}
          <button
            onClick={() => setFilter("Approved")}
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs 
            ${
              filter === "Approved"
                ? "text-primary border-primary"
                : "text-gray-700 border-gray-300"
            }
          `}
          >
            Approved
          </button>

          {/* Not Approved Button */}
          <button
            onClick={() => setFilter("Not Approved")}
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs 
            ${
              filter === "Not Approved"
                ? "text-primary border-primary"
                : "text-gray-700 border-gray-300"
            }
          `}
          >
            Not Approved
          </button>
        </div>
      </div>

      <div>
        <table className="w-full mt-8 border-separate border-spacing-y-6">
          <thead>
            <tr className="text-left text-gray-900 text-sm border-b">
              <th className="pb-3">Blog Title and Comment</th>
              <th className="pb-3 max-sm:hidden">Date</th>
              <th className="pb-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {comments
              .filter((comment) => {
                if (filter === "Approved") return comment.isApproved === true;
                return comment.isApproved === false;
              })
              .map((comment, index) => (
                <CommentTableItem
                  key={comment._id}
                  comment={comment}
                  index={index + 1}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comment;
