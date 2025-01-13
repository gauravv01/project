import React from 'react';
import avatar from '../../assets/icons/Avatar.png';
import { useNavigate } from 'react-router-dom';

const LiveDeals = () => {
    const navigate=useNavigate();
    const stats = [
        {
          title: 'Closed deals values in the past 30 days',
          value: '$35,000',
          trend: '+20% month over month'
        },
        {
          title: 'Total units bought monthly',
          value: '2,405',
          trend: '+23% month over month'
        },
        {
          title: 'Active deals monthly',
          value: '10',
          trend: '-8% month over month'
        }
      ];
    
      const projects = [
        {
          title: 'Steel beams requirements',
          email: 'email@fgmasfakedomain.net',
          avatar: avatar
        },
        {
          title: 'West coast distribution',
          email: 'email@fgmasfakedomain.net',
          avatar: avatar
        },
        {
          title: 'Hi - Life',
          email: 'email@fgmasfakedomain.net',
          avatar: avatar
        }
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
        },
        {
          title: 'Electric Hobs',
          description: '4 ring hob, child safety lock',
          units: '25 Units'
        }
      ];

  const UserList = ({ users, title }) => (
    <div>
      <h3 className="font-medium mb-4">{title}</h3>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div key={index} className="flex items-start space-x-3">
            <img src={user.avatar} alt="" className="w-8 h-8 rounded-full flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{user.title}</p>
              <p className="text-sm text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">Welcome To Your Deal Centre</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          Hi Paul, welcome to your live deal page where you can view your posted deals and potential matches.
        </p>
        <button className="px-4 py-2 bg-black text-white rounded text-sm sm:text-base" onClick={()=>navigate('/supplier/createdeal')}>
          Lets go!
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg">
            <h3 className="text-sm text-gray-600 mb-2">{stat.title}</h3>
            <p className="text-xl sm:text-2xl font-semibold mb-1">{stat.value}</p>
            <p className="text-xs sm:text-sm text-gray-500">{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* Lists Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white p-4 sm:p-6 rounded-lg">
          <UserList 
            users={projects} 
            title="Projects you should check out" 
          />
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg">
          <UserList 
            users={projects} 
            title="Potential Matches" 
          />
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg">
          <UserList 
            users={projects} 
            title="Your active deals" 
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-medium mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{product.description}</p>
            <p className="text-gray-900 mb-4">{product.units}</p>
            <p className="text-xs sm:text-sm text-gray-600 mb-3">Connect to to get pricing</p>
            <button className="w-full bg-black text-white rounded py-2 text-sm mb-2">
              Click to see views
            </button>
            <p className="text-xs sm:text-sm text-gray-500 text-center">
              Text box for additional details or fine print
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveDeals;