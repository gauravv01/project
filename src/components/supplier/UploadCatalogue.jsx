import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const UploadCatalogue = () => {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    description: '',
    priceValue: '',
    priceUnit: '',
    stockAvailability: 'Available'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
        Upload your catalgue
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Upload Area */}
        <div className="bg-gray-100 rounded-lg aspect-square flex flex-col items-center justify-center p-4">
          <Upload className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mb-4" />
          <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
            Drop your tender here
          </p>
          <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-md text-sm sm:text-base">
            Upload
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product name
            </label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-200 rounded-md text-sm sm:text-base"
              placeholder="Product name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-200 rounded-md text-sm sm:text-base"
              placeholder="Product name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-200 rounded-md text-sm sm:text-base"
              rows={4}
              placeholder="Some description of the item."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price per unit
            </label>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:space-x-2">
              <div className="w-full sm:w-32 flex-none">
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">£</span>
                  <input
                    type="text"
                    name="priceValue"
                    value={formData.priceValue}
                    onChange={handleChange}
                    className="w-full p-2 sm:p-3 border border-gray-200 rounded-md text-sm sm:text-base"
                    placeholder="400"
                  />
                </div>
              </div>
              <span className="text-gray-500">per</span>
              <input
                type="text"
                name="priceUnit"
                value={formData.priceUnit}
                onChange={handleChange}
                className="w-full sm:w-24 p-2 sm:p-3 border border-gray-200 rounded-md text-sm sm:text-base"
                placeholder="500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock availability
            </label>
            <select
              name="stockAvailability"
              value={formData.stockAvailability}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-200 rounded-md text-sm sm:text-base"
            >
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
              <option value="Limited">Limited</option>
            </select>
          </div>

          <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded text-sm sm:text-base">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCatalogue;