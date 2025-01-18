import React, { useState } from 'react';
import { Search, Filter, LayoutGrid, List, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SupplierCatalogue = () => {
  const navigate = useNavigate();
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

  // Mobile card view component
  const MobileProductCard = ({ product }) => (
    <div 
      className="bg-white p-4 rounded-lg border border-gray-200 space-y-3 hover:bg-gray-50"
      onClick={() => navigate('/supplier/view')}
    >
      <div>
        <div className="font-medium text-sm">{product.name}</div>
        <div className="text-sm text-gray-500">{product.categories}</div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <div className="text-gray-500">MOQ</div>
          <div>{product.moq}</div>
        </div>
        <div>
          <div className="text-gray-500">Lead times</div>
          <div>{product.leadTimes}</div>
        </div>
        <div>
          <div className="text-gray-500">Price</div>
          <div>{product.price}</div>
        </div>
        <div>
          <div className="text-gray-500">P-Terms</div>
          <div>{product.pTerms}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold">My Catalogue</h1>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center flex-1 gap-4 sm:gap-0 max-w-2xl">
            <div className="relative flex-1 sm:mr-4">
                <div className='relative flex'>
                           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                           <input
                             type="text"
                             placeholder="Search Catalogue"
                             className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg "
                           />
                           <button className='absolute right-0 bg-black h-full rounded-r-lg px-2'>
                           <Search className='w-6 h-4 text-white'/>
                           </button>
                           </div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </button>
              <button 
                className="px-4 py-2 bg-black text-white rounded-lg"
                onClick={() => navigate('/supplier/upload')}
              >
                Add Catalogue
              </button>
            </div>
          </div>

          <div className="hidden sm:flex space-x-2 border border-gray-200 rounded-lg p-1">
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

        {/* Products Table (Desktop) */}
        <div className="hidden sm:block bg-white rounded-lg border border-gray-200">
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
                  <td className="py-4 px-6 cursor-pointer" onClick={() => navigate('/supplier/view')}>{product.name}</td>
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

        {/* Mobile Product Cards */}
        <div className="sm:hidden space-y-4">
          {products.map((product, index) => (
            <MobileProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplierCatalogue;