import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

const DigitalSales = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen pl-[250px]">
        <Header />
        <div className="p-6">
          {/* Digital Sales Box */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-gray-600 text-lg">Digital Sales</h2>

            {/* Filters Row */}
            <div className="flex items-end gap-4 mt-4">
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">Show</label>
                <select className="border border-gray-300 rounded px-3 py-1 w-28 focus:ring-2 focus:ring-blue-500">
                  <option>15</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Purchase Code"
                  className="border border-gray-300 rounded px-3 py-1 w-52 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button className="text-white px-4 py-1 rounded" style={{ backgroundColor: "#605ca8" }}>
                Filter
              </button>
            </div>

            {/* Table */}
            <div className="mt-4 overflow-hidden">
              <table className="w-full border border-gray-300">
                <thead className="text-gray-500">
                  <tr className="text-left">
                    <th className="px-2 py-1 border-r ">Id</th>
                    <th className="px-2 py-1 border-r">Order</th>
                    <th className="px-2 py-1 border-r">Purchase Code</th>
                    <th className="px-2 py-1 border-r">Seller</th>
                    <th className="px-2 py-1 border-r">Buyer</th>
                    <th className="px-2 py-1 border-r">Total</th>
                    <th className="px-2 py-1 border-r">Currency</th>
                    <th className="px-2 py-1 border-r">Date</th>
                    <th className="px-2 py-1 border-r">Options</th>
                  </tr>
                </thead>
              </table>

              {/* No Records Found Message */}
              <p className="text-gray-400 mt-6 text-center">No records found!</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DigitalSales;
