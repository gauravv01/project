import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MessageSquare, Calendar, BookmarkPlus, Search, Filter } from 'lucide-react';
import avatar from '../../assets/icons/Avatar.png'

const ProcurementDashboard = () => {
  const data = [
    { name: '24', value: 31000 },
    { name: '25', value: 32000 },
    { name: '26', value: 33500 },
    { name: '27', value: 33000 },
    { name: '28', value: 34500 },
    { name: '29', value: 35500 },
    { name: '30', value: 37000 },
  ];

  const trendingDeals = [
    { 
      id: 1, 
      name: 'Ridgeback distributor',
      email: 'email@fgmasfakedomain.net',
      image: avatar
    },
    {
      id: 2,
      name: 'West coast distribution',
      email: 'email@fgmasfakedomain.net',
      image: avatar
    },
    {
      id: 3,
      name: 'Hi - Life',
      email: 'email@fgmasfakedomain.net',
      image: avatar
    }
  ];

  const potentialMatches = [
    {
      id: 1,
      name: 'LG',
      email: 'email@fgmasfakedomain.net',
      image: avatar
    },
    {
      id: 2,
      name: 'Miele',
      email: 'email@fgmasfakedomain.net',
      image: avatar
    },
    {
      id: 3,
      name: 'Sony',
      email: 'email@fgmasfakedomain.net',
      image: avatar
    }
  ];

  const suppliers = [
    {
      id: 1,
      name: 'Eco-Box',
      match: '85%',
      image: avatar
    },
    {
      id: 2,
      name: 'JCI KFM',
      match: '80%',
      image: avatar
    },
    {
      id: 3,
      name: 'Richmond KFM',
      match: '75%',
      image: avatar
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="p-8">
        <h1 className="text-2xl font-semibold mb-8">Welcome to your Procurement space.</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold">£10,000.00</div>
            <div className="text-sm text-gray-500">Value of goods procured</div>
            <div className="text-xs text-gray-400 mt-1">+5% month over month</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold">24</div>
            <div className="text-sm text-gray-500">Active Listings</div>
            <div className="text-xs text-gray-400 mt-1">+3.5% month over month</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold">10</div>
            <div className="text-sm text-gray-500">Completed Deals</div>
            <div className="text-xs text-gray-400 mt-1">+15% month over month</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm text-gray-500">In-progress Deals</div>
            <div className="text-xs text-gray-400 mt-1">+8% month over month</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Daily top sellers</h2>
            <div className="text-sm text-gray-500 mb-4">Growth on a monthly basis</div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#000" 
                    dot={{ stroke: '#000', strokeWidth: 2, r: 4 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Trending and Potential Matches */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Trending Live Deals</h3>
              <div className="space-y-4">
                {trendingDeals.map((deal) => (
                  <div key={deal.id} className="flex items-start space-x-3">
                    <img src={deal.image} alt={deal.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-medium">{deal.name}</div>
                      <div className="text-sm text-gray-500">{deal.email}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Potential Matches</h3>
              <div className="space-y-4">
                {potentialMatches.map((match) => (
                  <div key={match.id} className="flex items-start space-x-3">
                    <img src={match.image} alt={match.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-medium">{match.name}</div>
                      <div className="text-sm text-gray-500">{match.email}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Favourite Suppliers */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Favourite Suppliers</h3>
            <div className="space-y-4">
              {suppliers.map((supplier) => (
                <div key={supplier.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={supplier.image} alt={supplier.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-medium">{supplier.name}</div>
                      <div className="text-sm text-gray-500">{supplier.match}</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-sm bg-black text-white rounded-md">
                    Chat
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Suppliers match */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Suppliers match%</h3>
            <div className="space-y-4">
              {suppliers.map((supplier) => (
                <div key={supplier.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={supplier.image} alt={supplier.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-medium">{supplier.name}</div>
                      <div className="text-sm text-gray-500">{supplier.match}</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-sm bg-black text-white rounded-md">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Suppliers you may have missed */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Suppliers you may have missed</h3>
            <div className="space-y-4">
              {suppliers.map((supplier) => (
                <div key={supplier.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={supplier.image} alt={supplier.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-medium">{supplier.name}</div>
                      <div className="text-sm text-gray-500">{supplier.match}</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-sm bg-black text-white rounded-md">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementDashboard;