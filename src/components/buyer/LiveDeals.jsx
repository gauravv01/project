import React from 'react';
import avatar from '../../assets/icons/Avatar.png'

const LiveDeals = () => {
    const stats = [
        {
          title: 'Closed deals values in the past 30 days',
          value: '$35,000',
          change: '+20% month over month'
        },
        {
          title: 'Total units bought',
          value: '2,405',
          change: '+23% month over month'
        },
        {
          title: 'Active deals today',
          value: '10',
          change: '-8% month over month'
        }
      ];
    
      const dealsToCheck = [
        { name: 'Ridgeback distributor', email: 'email@fgmasfakedomain.net', image: avatar },
        { name: 'West coast distribution', email: 'email@fgmasfakedomain.net', image: avatar },
        { name: 'Hi - Life', email: 'email@fgmasfakedomain.net', image: avatar }
      ];
    
      const potentialMatches = [
        { name: 'LG', email: 'email@fgmasfakedomain.net', image: avatar },
        { name: 'Miele', email: 'email@fgmasfakedomain.net', image: avatar },
        { name: 'Sony', email: 'email@fgmasfakedomain.net', image: avatar }
      ];
    
      const liveDeals = [
        { name: 'Samsung', email: 'email@fgmasfakedomain.net', image: avatar },
        { name: 'Bosh', email: 'email@fgmasfakedomain.net', image: avatar },
        { name: 'LG', email: 'email@fgmasfakedomain.net', image: avatar }
      ];
    
      const products = [
        {
          title: 'Dual cook flex oven',
          description: '60 cm oven, dual cook feature, series 5',
          units: '175 units'
        },
        {
          title: '65" 2024 OLED TV',
          description: '65", OLED technology, 4K',
          units: '50 Units'
        }
      ];

  const UserList = ({ users }) => (
    <div className="space-y-4">
      {users.map((user, index) => (
        <div key={index} className="flex items-start space-x-3">
          <img 
            src={user.image} 
            alt={user.name} 
            className="w-8 h-8 rounded-full flex-shrink-0" 
          />
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const StatCard = ({ stat }) => (
    <div className="bg-white p-4 sm:p-6 rounded-lg">
      <h3 className="text-sm text-gray-600 mb-2">{stat.title}</h3>
      <p className="text-xl sm:text-2xl font-semibold mb-1">{stat.value}</p>
      <p className="text-xs sm:text-sm text-gray-500">{stat.change}</p>
    </div>
  );

  const ProductCard = ({ product }) => (
    <div className="bg-white p-4 sm:p-6 rounded-lg">
      <h3 className="text-base sm:text-lg font-medium mb-2">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-3">{product.description}</p>
      <p className="text-gray-900 mb-4">{product.units}</p>
      <p className="text-xs sm:text-sm text-gray-600 mb-3">Connect to get pricing</p>
      <button className="w-full bg-black text-white rounded py-2 text-sm mb-2 hover:bg-gray-800 transition-colors">
        Click to connect
      </button>
      <p className="text-xs sm:text-sm text-gray-500 text-center">
        Text box for additional details or fine print
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4 sm:mb-6">
          Connect - Live Deals
        </div>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold mb-2">
            Welcome to the deal centre
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Hi, John, welcome to the deal center connect with suppliers on discounted goods.
          </p>
          <button className="mt-4 w-full sm:w-auto px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-800 transition-colors">
            Lets go!
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        {/* User Lists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 sm:mb-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg">
            <h3 className="font-medium mb-4">Deals you should check out</h3>
            <UserList users={dealsToCheck} />
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg">
            <h3 className="font-medium mb-4">Potential Matches</h3>
            <UserList users={potentialMatches} />
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg">
            <h3 className="font-medium mb-4">Live Deals</h3>
            <UserList users={liveDeals} />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveDeals;