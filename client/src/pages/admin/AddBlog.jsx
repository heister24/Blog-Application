import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
import { useAppContext } from "../../Context/AppContext";
import toast from "react-hot-toast";
import { parse } from "marked";

const AddBlog = () => {
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("StartUp");
  const [isPublished, setIsPublished] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const { axios } = useAppContext();
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateContent = async (e) => {
    e.preventDefault();
    if (!title) return toast.error("Please enter the title");
    try {
      setLoading(true);
      const { data } = await axios.post("/api/blog/generate", {
        prompt: title,
      });
      if (data.success) {
        quillRef.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsAdding(true);
      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished,
      };

      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);

      const { data } = await axios.post("/api/blog/add", formData);

      if (data.success) {
        toast.success(data.message);
        setImage(false);
        setTitle("");
        setCategory("Startup");
        quillRef.current.root.innerHTML = "";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-800 h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-6 sm:p-10 shadow-md rounded-lg sm:m-10 space-y-6">
        <p className="font-semibold text-gray-700">Upload thumbnail</p>
        <label className="block text-sm text-gray-700 mb-2 cursor-pointer">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            className="mt-2 h-20 w-40 object-cover rounded border shadow-sm hover:opacity-90 transition cursor-pointer"
          />
          <input
            id="image"
            type="file"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        <p className="mt-4 font-medium">Blog title</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type here"
          className="w-full max-w-lg border border-gray-300 outline-none rounded-md px-3 py-2 focus:ring-2 focus:ring-primary/40"
        />

        <p className="mt-4 font-medium">Sub title</p>
        <input
          type="text"
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
          placeholder="Type here"
          className="w-full max-w-lg border border-gray-300 outline-none rounded-md px-3 py-2 focus:ring-2 focus:ring-primary/40"
        />

        <p className="mt-4 font-medium">Description</p>
        <div className="max-w-lg min-h-[180px] pb-16 sm:pb-10 pt-2 relative border border-gray-300 rounded-md shadow-sm overflow-hidden">
          
          {loading && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-20">
              <div className="w-6 h-6 border-2 border-gray-400 border-t-black rounded-full animate-spin"></div>
            </div>
          )}
          <div ref={editorRef} className="min-h-[150px] px-3"></div>
          <button
            disabled={loading}
            className="absolute bottom-2 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:bg-black cursor-pointer transition"
            type="button"
            onClick={generateContent}
          >
            Generate with AI
          </button>
        </div>

        <p className="mt-4 font-medium">Blog Category</p>
        <select
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          className="mt-2 px-3 py-2 border text-gray-700 border-gray-300 outline-none rounded-md w-56 focus:ring-2 focus:ring-primary/40"
        >
          <option value="">Select Category</option>
          {blogCategories.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        <div className="flex gap-2 mt-4 items-center">
          <p className="font-medium">Publish Now</p>
          <input
            className="scale-125 cursor-pointer accent-primary"
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
          />
        </div>

        <button
          disabled={isAdding}
          type="submit"
          className="mt-8 w-40 h-10 bg-primary text-white rounded-md shadow hover:bg-primary/90 transition text-sm"
        >
          {isAdding ? "Adding...." : "Add Blog"}
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
