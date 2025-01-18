import React from 'react';
import { Bell } from 'lucide-react';
import Sidebar from './Sidebar';
import NavIcon from '../assets/icons/Avatar.png';
import logo from '../assets/images/i.png';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate=useNavigate();
  const loginType = localStorage.getItem("loginType");
  return (
    <div className="min-h-screen bg-gray-50">
          <header className=" z-50 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
                <img
                        src={logo}
                        alt="Procurement Logo"
                        className="h-8 cursor-pointer"
                        onClick={()=>navigate('/')}
                      />
            <h1 className="text-lg font-semibold md:block hidden">{loginType==="buyer" ? 'Procurement' :"Supplier"}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center space-x-3">
              <img
                src={NavIcon}
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">John Doe</span>
            </div>
          </div>
        </header>
      {/* Sidebar */}
      <div className='flex items-start '>
      <Sidebar />

      {/* Main Content */}
        {/* Top Header */}
    

        {/* Page Content */}
        <main className="w-full">
          {children}
        </main>
        </div>
    </div>
  );
};

export default Layout;