import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  MessageSquare, 
  BookmarkPlus,
  ChevronRight,
  Search
} from 'lucide-react';
import logo from '../assets/images/i.png'

const Sidebar = () => {
  const location = useLocation();
  const [menuItems,setMenuItems]=useState([]);

  const buyerItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      path: '/buyer'
    },
    {
      icon: Users,
      label: 'Connect',
    //   path: '/connect',
      subItems: [
        { label: 'My Listings', path: '/buyer/listings' },
        { label: 'Live Deals', path: '/buyer/deals' }
      ]
    },
    {
      icon: Calendar,
      label: 'Calendar',
    //   path: '/calendar'
    },
    {
      icon: MessageSquare,
      label: 'Messages',
    //   path: '/messages'
    },
    {
      icon: BookmarkPlus,
      label: 'Saved Suppliers',
    //   path: '/saved-suppliers'
    }
  ];

  const supplierItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      path: '/supplier'
    },
    {
      icon: Users,
      label: 'Connect',
    //   path: '/connect',
      subItems: [
        { label: 'My Listings', path: '/supplier/listings' },
        { label: 'Live Deals', path: '/supplier/deals' }
      ]
    },
    {
      icon: Search,
      label: 'Catalogue',
      path: '/supplier/catalogue'
    },
    {
      icon: MessageSquare,
      label: 'Messages',
    //   path: '/messages'
    },
    {
      icon: BookmarkPlus,
      label: 'Saved Suppliers',
    //   path: '/saved-suppliers'
    }
  ];

  const isActivePath = (path) => {
    return location.pathname.startsWith(path);
  };


  useEffect(() => {
    const loginType = localStorage.getItem("loginType");
    if(loginType === "buyer") {
      setMenuItems(buyerItems);
    } else {
      setMenuItems(supplierItems);
    }
  }, []); 

  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-gray-200">
        <img
          src={logo}
          alt="Procurement Logo"
          className="h-8"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center px-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActivePath(item.path)
                    ? 'text-teal-700 bg-teal-50'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
                {item.subItems && (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </Link>
              {item.subItems && (
                <ul className="ml-8 mt-1 space-y-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path}
                        className={`block px-2 py-1.5 text-sm rounded-lg ${
                          location.pathname === subItem.path
                            ? 'text-teal-700 bg-teal-50'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;