import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import avatar from '../../assets/icons/Avatar.png';
import supplierProduct from '../../assets/images/supplierProduct.png'

const SupplierDashboard = () => {
  // Monthly revenue data
  const revenueData = [
    { day: '24', value: 45000 },
    { day: '25', value: 46000 },
    { day: '26', value: 47500 },
    { day: '27', value: 48000 },
    { day: '28', value: 49500 },
    { day: '29', value: 51000 },
    { day: '30', value: 55000 }
  ];

  const statsCards = [
    {
      title: "Monthly Revenue",
      value: "£45,678.90",
      trend: "+20% month over month"
    },
    {
      title: "Active Bids",
      value: "5",
      trend: "+33% month over month"
    },
    {
      title: "Completed Deals",
      value: "2",
      trend: "+15% month over month"
    },
    {
      title: "In-progress Deals",
      value: "8",
      trend: "-8% month over month"
    }
  ];

  const liveTenders = [
    {
      name: "Ridgeback distributor",
      email: "email@fgmasfakedomain.net",
      avatar: avatar
    },
    {
      name: "West coast distribution",
      email: "email@fgmasfakedomain.net",
      avatar: avatar
    },
    {
      name: "Hi - Life",
      email: "email@fgmasfakedomain.net",
      avatar: avatar
    }
  ];

  const potentialMatches = [
    {
      name: "LG",
      email: "email@fgmasfakedomain.net",
      avatar: avatar
    },
    {
      name: "Miele",
      email: "email@fgmasfakedomain.net",
      avatar: avatar
    },
    {
      name: "Sony",
      email: "email@fgmasfakedomain.net",
      avatar: avatar
    }
  ];

  const buyersMatch = [
    {
      name: "Eco-Box",
      match: "95%",
      avatar: avatar
    },
    {
      name: "JCI KFM",
      match: "90%",
      avatar: avatar
    },
    {
      name: "Richmond KFM",
      match: "85%",
      avatar: avatar
    }
  ];

  const StatCard = ({ title, value, trend }) => (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-sm text-gray-600 mb-2">{title}</h3>
      <p className="text-2xl font-semibold mb-1">{value}</p>
      <p className="text-sm text-gray-500">{trend}</p>
    </div>
  );

  const UserListItem = ({ name, email, avatar }) => (
    <div className="flex items-start space-x-3">
      <img src={avatar} alt="" className="w-8 h-8 rounded-full" />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </div>
  );

 
  const ProductCard = () => (
    <div className="bg-white rounded-lg shadow-sm">
  
      <div className="p-6">
      <h3 className="font-semibold mb-4">Your most recent listing</h3>
        <div className="flex items-center space-x-3 mb-4">
          <img src={avatar} alt="" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm text-blue-600 font-medium">Samsung posted a live deal</p>
            <p className="text-xs text-gray-500">2 hours ago</p>
          </div>
        </div>
        <div className="relative">
          <img
            src={supplierProduct}
            alt="Dual cook flex oven"
            className="w-full rounded-lg mb-4 object-cover"
            style={{ height: '350px' }}
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm">
            Premium Product
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">Dual cook flex oven</h4>
          <p className="text-sm text-gray-600">
            175 Units of dual cook flex oven
          </p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              Find out more...
            </p>
            <button className="text-sm text-blue-600 font-medium">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const BuyerMatchCard = ({ buyer }) => (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-3">
        <img src={buyer.avatar} alt="" className="w-8 h-8 rounded-full ring-2 ring-gray-100" />
        <div>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">{buyer.name}</p>
            {buyer.status && (
              <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">
                {buyer.status}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-20 h-1.5 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-green-500 rounded-full"
                style={{ width: buyer.match }}
              />
            </div>
            <span className="text-sm text-gray-500">{buyer.match}</span>
          </div>
        </div>
      </div>
      <button className="px-4 py-1.5 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition-colors">
        Connect
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-2xl font-semibold mb-8">
          Welcome to your Supplier space.
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="col-span-2 bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-1">Monthly revenue growth</h3>
            <p className="text-sm text-gray-500 mb-4">Growth on a monthly basis</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#000"
                    strokeWidth={2}
                    dot={{ stroke: '#000', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Live Tenders and Potential Matches */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold mb-4">Live tenders</h3>
              <div className="space-y-4">
                {liveTenders.map((tender, index) => (
                  <UserListItem key={index} {...tender} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold mb-4">Potential Matches</h3>
              <div className="space-y-4">
                {potentialMatches.map((match, index) => (
                  <UserListItem key={index} {...match} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="col-span-2">
          
            <ProductCard />
          </div>

          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Buyers Match%</h3>
                <button className="text-sm text-blue-600">View All</button>
              </div>
              <div className="divide-y divide-gray-100">
                {buyersMatch.map((buyer, index) => (
                  <BuyerMatchCard key={index} buyer={buyer} />
                ))}
              </div>
              <button className="w-full mt-6 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                Show More Matches
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;