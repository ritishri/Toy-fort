import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card"; 
import axios from "axios"; 

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooksImages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/books-images"); 
        // console.log(response.data);
        setBooks(response.data); 
      } catch (error) {
        console.error("Error fetching book images:", error);
      }
    };

    fetchBooksImages();
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Books Collection</h1>


        <div className="grid grid-cols-4 gap-2">
          {books.map((book) => (
            <Card
              key={book.product_id}
              imageUrl={book.image_default} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
