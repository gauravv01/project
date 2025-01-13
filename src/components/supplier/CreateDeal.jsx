import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import avatar from '../../assets/icons/Avatar.png';

const LiveDealCreation = () => {
  const [deals, setDeals] = useState([
    {
      productName: 'Dual Fan Oven',
      productDescription: '60 cm oven, dual fan feature, series 5',
      units: '100 Units',
      listingDescription: "I'm looking to sell 175 units of the dual cook flex oven to KFMs, distributors or kitchen retailers. Connect with me with you are a match and have the...",
      image: null
    },
    {
      productName: '65" 2024 OLED TV',
      productDescription: '65", OLED technology, 4K',
      units: '50 Units',
      listingDescription: "I'm looking to sell 50 units of the latest 65\" 2024 OLED TV via distributors, and direct to housebuilders/developers...",
      image: null
    }
  ]);

  const ProductCard = ({ product }) => (
    <div className="space-y-6">
      {/* Product Upload Section */}
      <div className="bg-gray-100 rounded-lg aspect-square flex flex-col items-center justify-center p-4">
        <Upload className="w-8 h-8 text-gray-400 mb-4" />
        <p className="text-gray-600 mb-2">Product image</p>
      </div>

      {/* Product Details */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium">{product.productName}</h2>
        <p className="text-gray-600 text-sm">{product.productDescription}</p>
        <p className="text-sm">{product.units}</p>
        <p className="text-sm text-gray-500">Connect to to get pricing</p>
        <button className="w-full bg-black text-white rounded py-2 text-sm">
          Click to post
        </button>
        <p className="text-sm text-gray-400 text-center">
          Text box for additional details or fine print
        </p>
      </div>
    </div>
  );

  const ProductForm = ({ product }) => (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <div className="flex items-center space-x-3">
        <img src={avatar} alt="" className="w-8 h-8 rounded-full" />
        <div>
          <p className="text-sm font-medium">Samsung</p>
          <p className="text-xs text-gray-500">Posted by John</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Product name</label>
          <input
            type="text"
            value={product.productName}
            className="w-full p-2 border border-gray-200 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Product description</label>
          <input
            type="text"
            value={product.productDescription}
            className="w-full p-2 border border-gray-200 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Upload photos</label>
          <button className="text-sm text-gray-500">Add another</button>
        </div>

        <div>
          <label className="block text-sm mb-1">Listing Description</label>
          <textarea
            value={product.listingDescription}
            rows={3}
            className="w-full p-2 border border-gray-200 rounded-md"
          />
        </div>

        <button className="px-4 py-1 text-sm bg-black text-white rounded-md">
          Save changes
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-semibold mb-6">Live Deal Creation</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Product Cards */}
          <div className="space-y-8">
            {deals.map((deal, index) => (
              <ProductCard key={index} product={deal} />
            ))}
          </div>

          {/* Right Column - Forms */}
          <div className="space-y-8">
            {deals.map((deal, index) => (
              <ProductForm key={index} product={deal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDealCreation;