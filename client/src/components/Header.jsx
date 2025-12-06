import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../Context/AppContext";

const Header = () => {
  const { input, setInput } = useAppContext();

  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const handleClearSearch = (e) => {
    e.preventDefault();
    setInput("");
    inputRef.current.value = "";
  };
  return (
    <div>
      <div className="flex items-center flex-col text-center">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-gray-400 bg-gray-100 rounded-full text-sm text-gray-700">
          <p>New:AI feature integrated</p>
          <img src={assets.star_icon} alt="" className="w-2.5" />
        </div>
        <h1 className="text-4xl text-gray-600 font-semibold">
          Your Own <span className="text-blue-700">Blogging</span> <br />{" "}
          Platform.
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg mx-auto border border-gray-300 bg-white rounded overflow-hidden"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search blogs"
            className="w-full pl-4 outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 m-1.5 rounded transition-all cursor-pointer hover:scale-105"
          >
            Search
          </button>
        </form>
      </div>
      <div className="text-center">
        {input && (
          <button
            onClick={handleClearSearch}
            className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default Header;
