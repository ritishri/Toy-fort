import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useRef } from "react";

const Slider = () => {
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);

  const handleButtonClick1 = () => fileInputRef1.current.click();
  const handleButtonClick2 = () => fileInputRef2.current.click();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar className="w-64" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6">Add Slider Item</h1>

            {/* Language */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Language</label>
              <select className="border border-gray-300 p-2 w-full rounded">
                <option>English</option>
              </select>
            </div>

            {/* Title */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Title</label>
              <input type="text" placeholder="Title" className="border border-gray-300 p-2 w-full rounded" />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Description</label>
              <textarea rows={2} placeholder="Description" className="border border-gray-300 p-2 w-full rounded" />
            </div>

            {/* Link */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Link</label>
              <input type="text" placeholder="Link" className="border border-gray-300 p-2 w-full rounded" />
            </div>

            {/* Order */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Order</label>
              <input type="number" placeholder="Order" className="border border-gray-300 p-2 w-full rounded" />
            </div>

            {/* Button Text */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Button Text</label>
              <input type="text" placeholder="Button Text" className="border border-gray-300 p-2 w-full rounded" />
            </div>

            {/* Text Color */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Text Color</label>
              <input type="color" className="border border-gray-300 p-2 w-full rounded h-10" defaultValue="#ffffff"
              style={{background: "transparent"}}
               />
            </div>

            {/* Button Color */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Button Color</label>
              <input type="color" className="border border-gray-300 p-2 w-full rounded h-10" 
                style={{background: "transparent"}}
              />
            </div>

            {/* Button Text Color */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Button Text Color</label>
              <input type="color" className="border border-gray-300 p-2 w-full rounded h-10" 
              style={{background: "transparent"}}
              defaultValue="#ffffff" />
            </div>


            {/* Animations */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Animations</label>
              <div className="grid grid-cols-3 gap-4">
                {["Title", "Description", "Button"].map((item) => (
                  <div key={item}>
                    <label className="block mb-2">{item}</label>
                    <select className="border border-gray-300 p-2 rounded">
                      <option>fadeInUp</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Uploads */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Image (1920*600)</label>
              <button onClick={handleButtonClick1} className="text-white px-4 py-2 rounded" style={{backgroundColor: "#19a185"}}>
                Select Image
              </button>
              <input type="file" ref={fileInputRef1} className="hidden" />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2">Image (for mobile) (768*500)</label>
              <button onClick={handleButtonClick2} className="text-white px-4 py-2 rounded" style={{backgroundColor: "#19a185"}}>
                Select Image
              </button>
              <input type="file" ref={fileInputRef2} className="hidden" />
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button className="text-white py-2 px-4 rounded hover:bg-blue-600" style={{backgroundColor: "#0084ce"}}>
                Add Slider Item
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Slider;
