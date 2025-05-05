import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

const AbuseReports = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen pl-[250px]">
        <Header />
        <div className="p-6">
          {/* Digital Sales Box */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-gray-600 text-lg">Abuse Reports</h2>

            {/* Table */}
            <div className="mt-4 overflow-hidden">
              <table className="w-full border border-gray-300">
                <thead className="text-gray-500">
                  <tr className="text-left">
                    <th className="px-2 py-2 border-r text-sm">Id</th>
                    <th className="px-2 py-2 border-r text-sm">Reported Content</th>
                    <th className="px-2 py-2 border-r text-sm">Sent By</th>
                    <th className="px-2 py-2 border-r text-sm">Description</th>
                    <th className="px-2 py-2 border-r text-sm">Date</th>
                    <th className="px-2 py-2 border-r text-sm">Options</th>
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

export default AbuseReports;
