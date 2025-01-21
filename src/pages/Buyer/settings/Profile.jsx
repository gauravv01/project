import React, { useState } from 'react';
import Layout from '../../../layout';
import { Upload } from 'lucide-react';

const Setting = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout>
      <div className="max-w-[600px] p-4 sm:p-6 lg:p-8">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <form className="space-y-6">
          <div 
            className={`relative border-2 border-dashed rounded-lg p-4 text-center cursor-pointer
              ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {imagePreview ? (
              <div className="relative w-32 h-32 mx-auto">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Upload className="w-12 h-12 mx-auto text-gray-400" />
                <div className="text-sm text-gray-600">
                  Drag and drop your company logo here or click to browse
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block mb-1">Company Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Company Description</label>
            <textarea className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
          <div>
            <label className="block mb-1">Company Size</label>
            <select className="w-full p-2 border rounded">
              <option>Small 1-20</option>
              <option>Medium 21-100</option>
              <option>Large 100+</option>
            </select>
          </div>

          {/* <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Save Changes
          </button> */}
        </form>
      </div>
    </Layout>
  );
};

export default Setting;