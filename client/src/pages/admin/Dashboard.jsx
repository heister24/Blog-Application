import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashboard = async () => {
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboard();
  }, []);
  return (
    <div className="flex-1 p-4 bg-blue-50/50">
      {/* Dashboard Data Count */}
      <div className="flex flex-wrap gap-4">
        <div className="min-w-58 flex items-center gap-4 bg-white p-4 rounded shadow cursor-pointer transition-all hover:scale-105">
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>
        <div className="min-w-58 flex items-center gap-4 bg-white p-4 rounded shadow cursor-pointer transition-all hover:scale-105">
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.comments}
            </p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>
        <div className="min-w-58 flex items-center gap-4 bg-white p-4 rounded shadow cursor-pointer transition-all hover:scale-105">
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.drafts}
            </p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
      </div>

      {/* Dashboard details */}
      <div>
        {/* latest blogs title */}
        <div className="flex items-center gap-3 mt-5 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>

        <div className="relative overflow-x-auto shadow scrollbar-hide bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-left text-gray-600 uppercase">
              <tr>
                <th scope="col" className="px-2 py-4 xl:px-6">
                  #
                </th>
                <th scope="col" className="px-2 py-4">
                  Blog Title
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Date
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Status
                </th>
                <th scope="col" className="px-2 py-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => {
                return (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashboard}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
