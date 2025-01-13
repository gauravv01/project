import React from 'react';
import { Search, Filter, LayoutGrid, List, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ListingsTable = () => {
    const navigate=useNavigate()
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

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Check for updates on a listing"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-black text-white rounded-md" onClick={()=>navigate('/buyer/createlisting')}>
            Create Listing
          </button>
          <div className="flex space-x-2 border border-gray-300 rounded-md p-1">
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

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
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
  );
};

export default ListingsTable;