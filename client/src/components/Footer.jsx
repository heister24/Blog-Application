import React from "react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-10 pb-5">
      
      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-20">

        {/* LEFT SECTION */}
        <div className="space-y-4 col-span-1">
          <img src={assets.logo} alt="logo" className="w-28" />

          <p className="text-gray-600 leading-6 text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        {/* RIGHT SECTION WRAPPER (3 columns) */}
        <div className="col-span-3 grid grid-cols-3 gap-12">

          {footer_data.map((item, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-[15px] font-semibold text-gray-900">
                {item.title}
              </h3>

              <ul className="space-y-2 text-gray-600">
                {item.links.map((link, i) => (
                  <li key={i} className="text-[12px]">
                    <a
                      href="#"
                      className="hover:text-black transition-all duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* SEPARATOR LINE */}
      <div className="border-t border-gray-300 my-6 max-w-6xl mx-auto"></div>

      {/* COPYRIGHT */}
      <p className="text-center text-gray-600 text-[13px]">
        Copyright 2025 © QuickBlog - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
