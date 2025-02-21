import React from 'react';
import Sidebar from '../components/Sidebar';

const Books = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Books</h1>
        {/* Content like book cards, sorting, etc. */}
      </div>
    </div>
  );
};

export default Books;
