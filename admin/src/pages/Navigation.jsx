import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import navImage1 from '../assets/nav_1.jpg';
import navImage2 from '../assets/nav_2.jpg';

const Navigation = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-8"> 
        <Header />

        <main className="flex-1 p-6">
          <div className="bg-white shadow-md rounded p-6 max-w-5xl mx-auto">
            <h1 className="text-xl font-medium mb-6 text-gray-500">Navigation</h1>

            <div className="mb-6">
              <label className="block text-gray-500 font-semibold mb-2">
                Menu Limit (The number of links that appear in the menu)
              </label>
              <input
                type="number"
                className="text-gray-500 w-1/3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="8"
              />
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-500">
                Navigation Template
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                <div className="border rounded shadow p-2 text-center hover:ring-2 hover:ring-blue-500 cursor-pointer">
                  <img
                    src={navImage1}
                    alt="Navigation Template 1"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="border rounded shadow p-2 text-center hover:ring-2 hover:ring-blue-500 cursor-pointer">
                  <img
                    src={navImage2}
                    alt="Navigation Template 2"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

            </div>

            <div className="text-right">
              <button className="bg-[#0084ce] hover:bg-blue-700 text-white px-4 py-2 rounded">
                Save Changes
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Navigation;
