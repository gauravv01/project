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

  const StatCard = ({ title, value, trend }) => (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <div className="text-xl sm:text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-xs text-gray-400 mt-1">{trend}</div>
    </div>
  );

  const UserCard = ({ user }) => (
    <div className="flex items-start space-x-3">
      <img src={user.image} alt="" className="w-8 h-8 rounded-full flex-shrink-0" />
      <div className="min-w-0">
        <div className="font-medium text-sm sm:text-base truncate">{user.name}</div>
        <div className="text-xs sm:text-sm text-gray-500 truncate">{user.email}</div>
      </div>
    </div>
  );

  const SupplierCard = ({ supplier, actionLabel }) => (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3 min-w-0">
        <img src={supplier.image} alt="" className="w-8 h-8 rounded-full flex-shrink-0" />
        <div className="min-w-0">
          <div className="font-medium text-sm sm:text-base truncate">{supplier.name}</div>
          <div className="text-xs sm:text-sm text-gray-500 truncate">{supplier.match}</div>
        </div>
      </div>
      <button className="ml-2 px-3 py-1 text-xs sm:text-sm bg-black text-white rounded-md flex-shrink-0">
        {actionLabel}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-6 lg:p-8">
        <h1 className="text-xl sm:text-2xl font-semibold mb-6 lg:mb-8">
          Welcome to your Procurement space.
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <StatCard 
            title="Value of goods procured"
            value="£10,000.00"
            trend="+5% month over month"
          />
          <StatCard 
            title="Active Listings"
            value="24"
            trend="+3.5% month over month"
          />
          <StatCard 
            title="Completed Deals"
            value="10"
            trend="+15% month over month"
          />
          <StatCard 
            title="In-progress Deals"
            value="5"
            trend="+8% month over month"
          />
        </div>

        {/* Chart and Lists Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
          {/* Chart */}
          <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h2 className="text-base sm:text-lg font-semibold mb-2">Daily top sellers</h2>
            <div className="text-sm text-gray-500 mb-4">Growth on a monthly basis</div>
            <div className="h-48 sm:h-64">
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

          {/* Trending and Matches */}
          <div className="space-y-4 lg:space-y-6">
            {/* <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Trending Live Deals</h3>
              <div className="space-y-4">
                {trendingDeals.map((deal) => (
                  <UserCard key={deal.id} user={deal} />
                ))}
              </div>
            </div> */}

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Potential Matches</h3>
              <div className="space-y-4">
                {potentialMatches.map((match) => (
                  <UserCard key={match.id} user={match} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Favourite Suppliers</h3>
            <div className="space-y-4">
              {suppliers.map((supplier) => (
                <SupplierCard 
                  key={supplier.id} 
                  supplier={supplier} 
                  actionLabel="Chat"
                />
              ))}
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Suppliers match%</h3>
            <div className="space-y-4">
              {suppliers.map((supplier) => (
                <SupplierCard 
                  key={supplier.id} 
                  supplier={supplier} 
                  actionLabel="Connect"
                />
              ))}
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Suppliers you may have missed</h3>
            <div className="space-y-4">
              {suppliers.map((supplier) => (
                <SupplierCard 
                  key={supplier.id} 
                  supplier={supplier} 
                  actionLabel="Connect"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementDashboard;