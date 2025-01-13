import React from 'react';
import { Search, Filter, LayoutGrid, List, Calendar } from 'lucide-react';

const FindListings = () => {
  const listings = [
    {
      company: 'Eco Homes',
      project: 'Eden house',
      qty: '10',
      deadline: 'Dec 5',
      buyer: 'Paul Black',
      match: '90%'
    },
    {
      company: 'ABD Homes',
      project: 'Chris house',
      qty: '25',
      deadline: 'Oct 5',
      buyer: 'Chris White',
      match: '83%'
    },
    {
      company: 'Safe Homes',
      project: 'Arons house',
      qty: '50',
      deadline: 'Jan 5',
      buyer: 'Aron Grey',
      match: '70%'
    },
    {
      company: 'Paul Builds',
      project: 'Nav house',
      qty: '150',
      deadline: 'May 5',
      buyer: 'Azam Blue',
      match: '50%'
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-6">Find Listings</h1>

        {/* Search and Filter Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center flex-1 max-w-2xl">
            <div className="relative flex-1 mr-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buyers looking for white goods"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
              />
            </div>
            <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
            <button className="ml-4 px-4 py-2 bg-black text-white rounded-lg">
              Search
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

        {/* Listings Table */}
        <div className="bg-white rounded-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-medium text-gray-600">Company</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Project</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Qty</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Deadline</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Buyer</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Match%</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing, index) => (
                <tr 
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-4 px-6">{listing.company}</td>
                  <td className="py-4 px-6">{listing.project}</td>
                  <td className="py-4 px-6">{listing.qty}</td>
                  <td className="py-4 px-6">{listing.deadline}</td>
                  <td className="py-4 px-6">{listing.buyer}</td>
                  <td className="py-4 px-6">{listing.match}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FindListings;