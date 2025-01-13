import React from 'react';
import { Search, Filter, LayoutGrid, List, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SupplierCatalogue = () => {
    const navigate=useNavigate();
  const products = [
    {
      name: 'Samsung Fridge',
      categories: 'REF',
      moq: '50',
      leadTimes: '15 days',
      price: '£250-270',
      pTerms: '90 days'
    },
    {
      name: 'Samsung Oven',
      categories: 'Oven',
      moq: '100',
      leadTimes: '10 days',
      price: '£150-180',
      pTerms: '60 days'
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">My Catalogue</h1>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center flex-1 max-w-2xl">
            <div className="relative flex-1 mr-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search catalogue"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
              />
            </div>
            <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
            <button className="ml-4 px-4 py-2 bg-black text-white rounded-lg" onClick={()=>navigate('/supplier/upload')}>
              Add Catalogue
            </button>
          </div>

          <div className="flex space-x-2 border border-gray-200 rounded-lg p-1">
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <List className="w-5 h-5" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <Calendar className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-medium text-gray-600">Product name</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Categories</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">MOQ</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Lead times</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Price</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">P-Terms</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr 
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-4 px-6 pointer" onClick={()=>navigate('/supplier/view')}>{product.name}</td>
                  <td className="py-4 px-6">{product.categories}</td>
                  <td className="py-4 px-6">{product.moq}</td>
                  <td className="py-4 px-6">{product.leadTimes}</td>
                  <td className="py-4 px-6">{product.price}</td>
                  <td className="py-4 px-6">{product.pTerms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupplierCatalogue;