import React from 'react';
import { Search, Filter, LayoutGrid, List, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ListingsTable = () => {
  const navigate = useNavigate();
  const listings = [
    {
      projectName: 'Supply of structural steel beams',
      project: 'Eden house',
      goods: 'Steel Beams',
      deadline: 'Dec 5',
      budget: '20K',
      match: '90%'
    },
    {
      projectName: 'Supply of bricks - residential project',
      project: 'Whitehall',
      goods: 'Bricks',
      deadline: 'Oct 2',
      budget: '80K',
      match: '70%'
    },
    {
      projectName: 'Supply of whitegoods',
      project: 'Horse Drive',
      goods: 'White goods',
      deadline: 'Dec 15',
      budget: '90K',
      match: '80%'
    },
    {
      projectName: 'Cement requirements for residential build',
      project: 'Charles DR',
      goods: 'Cement',
      deadline: 'Nov 5',
      budget: '10k',
      match: '75%'
    }
  ];

  // Mobile card component
  const ListingCard = ({ listing }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-3">
      <div>
        <div className="font-medium">{listing.projectName}</div>
        <div className="text-sm text-gray-500">{listing.project}</div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span className="text-gray-500">Goods:</span>
          <span className="ml-2">{listing.goods}</span>
        </div>
        <div>
          <span className="text-gray-500">Deadline:</span>
          <span className="ml-2">{listing.deadline}</span>
        </div>
        <div>
          <span className="text-gray-500">Budget:</span>
          <span className="ml-2">{listing.budget}</span>
        </div>
        <div>
          <span className="text-gray-500">Match:</span>
          <span className="ml-2">{listing.match}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto sm:flex-1">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Check for updates on a listing"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center justify-center space-x-2 px-3 py-2 border border-gray-300 rounded-md">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <button 
            className="flex-1 sm:flex-none px-4 py-2 bg-black text-white rounded-md"
            onClick={() => navigate('/buyer/createlisting')}
          >
            Create Listing
          </button>
          <div className="hidden sm:flex space-x-2 border border-gray-300 rounded-md p-1">
            <button className="p-1 hover:bg-gray-100 rounded">
              <List className="h-5 w-5" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <LayoutGrid className="h-5 w-5" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Calendar className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6 font-medium">Project name</th>
                <th className="text-left py-4 px-6 font-medium">Project</th>
                <th className="text-left py-4 px-6 font-medium">Goods</th>
                <th className="text-left py-4 px-6 font-medium">Deadline</th>
                <th className="text-left py-4 px-6 font-medium">Budget</th>
                <th className="text-left py-4 px-6 font-medium">Match%</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6">{listing.projectName}</td>
                  <td className="py-4 px-6">{listing.project}</td>
                  <td className="py-4 px-6">{listing.goods}</td>
                  <td className="py-4 px-6">{listing.deadline}</td>
                  <td className="py-4 px-6">{listing.budget}</td>
                  <td className="py-4 px-6">{listing.match}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden space-y-4">
        {listings.map((listing, index) => (
          <ListingCard key={index} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default ListingsTable;