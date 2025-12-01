import React, { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const fetchComments = async () => {
    setComments(comments_data);
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
        <table>
          <thead>
            <tr>
              <th>Blog Title and Comment </th>
              <th>Date</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comment;
