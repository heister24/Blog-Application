import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          {/* headings */}
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-primary">Admin</span> Login
            </h1>
            <p className="font-light">
              Enter your credentials to access the admin panel
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full text-gray-700 mt-6">
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="border-b border-gray-200 outline-none p-2 mb-6"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="border-b border-gray-200 outline-none p-2 mb-6"
                required
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-primary text-white rounded font-medium p-2 hover:bg-primary/90 cursor-pointer transition-all"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
