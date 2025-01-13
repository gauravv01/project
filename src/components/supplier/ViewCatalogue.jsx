import React from 'react';
import { Edit } from 'lucide-react';
import fridge from "../../assets/images/fridge.png"

const ViewCatalogue = () => {
  const productDetails = {
    title: 'Samsung Smart Fridge',
    listingId: '12345',
    category: 'Smart > Appliance > Fridge',
    moq: '50',
    maxQuantity: '175',
    leadTimes: '15 days - 30 days',
    paymentTerms: 'Immediate',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    measurements: {
      height: '56cm',
      width: '100cm',
      depth: '55cm'
    }
  };

  const InfoRow = ({ label, value }) => (
    <div className="mb-4">
      <label className="block text-sm text-gray-500 mb-1">{label}</label>
      <p className="text-sm">{value}</p>
    </div>
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Connect - My Catalogue - Samsung Convection oven
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-semibold">{productDetails.title}</h1>
          <p className="text-sm text-gray-500">Listing ID: {productDetails.listingId}</p>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded flex items-center">
          <Edit className="w-4 h-4 mr-2" />
          Edit
        </button>
      </div>

      <div className="grid grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <img
            src={fridge}
            alt="Samsung Smart Fridge"
            className="w-full rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <InfoRow 
            label="Product category" 
            value={productDetails.category} 
          />
          
          <InfoRow 
            label="MOQ" 
            value={productDetails.moq} 
          />
          
          <InfoRow 
            label="Max Quantity" 
            value={productDetails.maxQuantity} 
          />
          
          <InfoRow 
            label="Lead times" 
            value={productDetails.leadTimes} 
          />
          
          <InfoRow 
            label="Payment terms" 
            value={productDetails.paymentTerms} 
          />
          
          <InfoRow 
            label="Product description" 
            value={productDetails.description} 
          />

          <div className="mt-6">
            <label className="block text-sm text-gray-500 mb-2">Measurement</label>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-500">H</label>
                <p className="text-sm">{productDetails.measurements.height}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-500">W</label>
                <p className="text-sm">{productDetails.measurements.width}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-500">D</label>
                <p className="text-sm">{productDetails.measurements.depth}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCatalogue;