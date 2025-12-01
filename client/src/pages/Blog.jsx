import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Moment from "moment";
import Loader from "../components/Loader";

const Blog = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [commentInput, setCommentInput] = useState("");

  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  const fetchComments = async () => {
    setComments(comments_data);
  };

  const addComment = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="relative min-h-screen px-4">
      {/* Background */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-50"
      />

      {/* Blog Info */}
      <div className="text-center mt-24 text-gray-700">
        <p className="text-primary py-2 font-medium">
          Published on {Moment(data.createdAt).fromNow()}
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mx-auto">
          {data.title}
        </h1>
        <h3 className="my-5 max-w-lg truncate mx-auto text-gray-600">
          {data.subTitle}
        </h3>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          Sandesh
        </p>
      </div>

      {/* Blog Content */}
      <div className="mx-auto max-w-5xl my-10">
        <img
          src={data.image}
          alt=""
          className="rounded-3xl w-full mb-6 object-cover"
        />
        <div
          className="rich-text max-w-3xl mx-auto text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* Comments */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="text-lg font-medium mb-4">
            Comments ({comments.length})
          </p>
          <div className="flex flex-col gap-4">
            {comments.map((com, index) => (
              <div
                key={index}
                className="relative bg-primary/10 border border-primary/20 p-4 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={assets.user_icon}
                    alt=""
                    className="w-6 h-6 object-cover rounded-full"
                  />
                  <p className="font-medium text-gray-800">{com.name}</p>
                </div>
                <p className="text-sm text-gray-600 ml-8">{com.content}</p>
                <div className="absolute right-4 bottom-3 text-xs text-gray-500">
                  {Moment(com.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commment Box */}
        {/* Add Comment Section */}
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your comment</p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />

            <textarea
              placeholder="Comment"
              value={commentInput}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
              required
            ></textarea>

            <button className="bg-primary text-white font-medium rounded-xl mx-4 px-8 py-3" type="submit">Submit</button>
          </form>
        </div>

        {/* social media buttons */}
        <div className="my-20 mx-auto">
          <p className="font-semibold my-4">Share on social media...</p>
          <div className="flex">
            <img src={assets.facebook_icon} alt="" className="cursor-pointer" />
            <img src={assets.googleplus_icon} alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center py-20 text-gray-600">
      <Loader/>
    </div>
  );
};

export default Blog;
