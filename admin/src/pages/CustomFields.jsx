import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const CustomFields = () => {
  const navigate = useNavigate();

  const [fields, setFields] = useState([
    { id: 1, name: 'Parul', type: 'Laptop', blank: 'John', required: 'yes', order: 'cod', status: 'Pending', options: 'yes' },
    { id: 2, name: 'Prag', type: 'Phone', blank: 'Emily', required: 'no', order: 'online', status: 'Accepted', options: 'no' },
  ]);

  const columns = [
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Type', selector: row => row.type, sortable: true },
    { name: '', selector: row => row.blank, sortable: true },
    { name: 'Required', selector: row => row.required, sortable: true },
    { name: 'Order', selector: row => row.order, sortable: true },
    { name: 'Status', selector: row => row.status, sortable: true },
    { name: 'Options', selector: row => row.options, sortable: true },
  ];

  return (
    <div className="flex relative z-0 overflow-hidden min-h-screen">
      {/* Sidebar with width control */}
      <div className="relative z-10 w-64">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 bg-gray-100 overflow-auto z-0">
        <Header />
        <div className="p-6">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-600 text-lg">Custom Fields</h2>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => navigate('/admin/add-custom-field')}
              >
                + Add Custom Field
              </button>
            </div>

            {/* Data Table with responsive overflow */}
            <div className="w-full overflow-x-auto mt-4">
              <DataTable
                columns={columns}
                data={fields}
                pagination
                highlightOnHover
                responsive
                noDataComponent={
                  <p className="text-gray-400 py-4 text-center">No records found!</p>
                }
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomFields;
