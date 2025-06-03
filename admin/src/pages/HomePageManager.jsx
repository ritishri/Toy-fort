import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import usePageTitle from "../hooks/usePageTitle";

const HomePageManager = () => {
  usePageTitle("Homepage Manager - ToyFort");

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen pl-[250px]">
        <Header />
        <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-700">Homepage Manager</h2>

          {/* Featured Categories and Products by Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Categories */}
            <div className="bg-white shadow-md rounded-md p-4">
              <h3 className="text-gray-700 font-semibold mb-1">Featured Categories</h3>
              <p className="text-sm text-gray-500 mb-3">Select the categories you want to show under the slider</p>
              <select className="w-full border border-gray-300 rounded px-3 py-2 mb-3">
                <option>Select Category</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Select Category</button>
            </div>

            {/* Products by Category */}
            <div className="bg-white shadow-md rounded-md p-4">
              <h3 className="text-gray-700 font-semibold mb-1">Products by Category</h3>
              <p className="text-sm text-gray-500 mb-3">Show products by categories on the homepage</p>
              <select className="w-full border border-gray-300 rounded px-3 py-2 mb-3">
                <option>Select Category</option>
              </select>
              <div className="mb-3 flex items-center gap-2">
                <input type="checkbox" id="subproducts" />
                <label htmlFor="subproducts" className="text-sm text-gray-600">Show subcategory products</label>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Select Category</button>
            </div>
          </div>

          {/* Homepage Banners */}
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-700 font-semibold">Homepage Banners</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded">+ Add Banner</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="border px-2 py-2">Id</th>
                    <th className="border px-2 py-2">Banner</th>
                    <th className="border px-2 py-2">URL</th>
                    <th className="border px-2 py-2">Order</th>
                    <th className="border px-2 py-2">Banner Width</th>
                    <th className="border px-2 py-2">Location</th>
                    <th className="border px-2 py-2">Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="7" className="text-center text-gray-400 py-4">No records found!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          {/* Settings Section */}
<div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
  <h3 className="text-gray-700 font-semibold mb-6 text-xl">Settings</h3>

  {/* Toggle Options */}
  <div className="space-y-6">
    {[
      { label: "Featured Categories", name: "featuredCategories" },
      { label: "Featured Products", name: "featuredProducts" },
      { label: "Latest Products", name: "latestProducts" },
      { label: "Blog Slider", name: "blogSlider" }
    ].map((item) => (
      <div key={item.name}>
        <label className="block font-semibold text-gray-700 mb-1">{item.label}</label>
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name={item.name}
              defaultChecked
              className="form-radio text-purple-600"
            />
            <span className="text-purple-700 font-semibold">Show</span>
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name={item.name}
              className="form-radio text-gray-400"
            />
            <span className="text-gray-500">Hide</span>
          </label>
        </div>
      </div>
    ))}
  </div>

  {/* Number Inputs */}
  <div className="mt-6 space-y-4">
    <div>
      <label className="block text-gray-700 mb-1">Number of Featured Products to Show</label>
      <input
        type="number"
        defaultValue="10"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
      />
    </div>
    <div>
      <label className="block text-gray-700 mb-1">Number of Latest Products to Show</label>
      <input
        type="number"
        defaultValue="10"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
      />
    </div>
  </div>

  {/* Save Button */}
  <div className="mt-6">
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
      Save Changes
    </button>
  </div>
</div>



















        </div>



        <Footer />
      </div>
    </div>
  );
};

export default HomePageManager;
