import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  MessageSquare, 
  BookmarkPlus,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Search,
  Menu, // Added for hamburger
  X ,
  User, Lock, Bell, CreditCard, Shield, Settings

} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/i.png'

const Sidebar = () => {
    const navigate=useNavigate();
  const location = useLocation();
  const [menuItems, setMenuItems] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubItems, setOpenSubItems] = useState([]);

  // Your existing items arrays and useEffect remain the same
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
        // { label: 'Live Deals', path: '/buyer/deals' }
      ]
    },
    // {
    //   icon: Calendar,
    //   label: 'Calendar',
    // //   path: '/calendar'
    // },
    {
      icon: MessageSquare,
      label: 'Messages',
    //   path: '/messages'
    },
    {
      icon: BookmarkPlus,
      label: 'Saved Suppliers',
    //   path: '/saved-suppliers'
    },
    {
        icon: Settings,
        label: 'Settings',
        // path: '/supplier/settings/profile',
        subItems:[
          {
            icon: User,
            label: 'Profile',
            path: '/buyer/settings/profile'
          },
          {
            icon: Settings,
            label: 'Account settings',
            path: '/buyer/settings/account'
          },
          {
            icon: Bell,
            label: 'Notification settings',
            path: '/buyer/settings/notifications'
          },
          {
            icon: Shield,
            label: 'Security',
            path: '/buyer/settings/security'
          },
          {
            icon: CreditCard,
            label: 'Billing and payments',
            path: '/buyer/settings/billing'
          },
          {
            icon: Lock,
            label: 'Privacy settings',
            path: '/buyer/settings/privacy'
          }
       
        ]
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
        // { label: 'Live Deals', path: '/supplier/deals' }
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
      label: 'Saved Buyers',
    //   path: '/saved-suppliers'
    },
    {
        icon: Settings,
        label: 'Settings',
        // path: '/supplier/settings/profile',
        subItems:[
          {
            icon: User,
            label: 'Profile',
            path: '/supplier/settings/profile'
          },
          {
            icon: Settings,
            label: 'Account settings',
            path: '/supplier/settings/account'
          },
          {
            icon: Bell,
            label: 'Notification settings',
            path: '/supplier/settings/notifications'
          },
          {
            icon: Shield,
            label: 'Security',
            path: '/supplier/settings/security'
          },
          {
            icon: CreditCard,
            label: 'Billing and payments',
            path: '/supplier/settings/billing'
          },
          {
            icon: Lock,
            label: 'Privacy settings',
            path: '/supplier/settings/privacy'
          }
        ]
      }
  ];

  
  useEffect(() => {
    const loginType = localStorage.getItem("loginType");
    if(loginType === "buyer") {
      setMenuItems(buyerItems);
      setOpenSubItems(new Array(buyerItems.length).fill(false))
    } else if(loginType==='supplier') {
      setMenuItems(supplierItems);
      setOpenSubItems(new Array(supplierItems.length).fill(false))
    } 
  }, []);



  const isActivePath = (path) => {
    return location.pathname.startsWith(path);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);



  useEffect(()=>{
    if(localStorage.getItem("openSubItems")!==undefined && JSON.parse(localStorage.getItem("openSubItems"))){
setOpenSubItems(JSON.parse(localStorage.getItem("openSubItems")))
    }
  },[])


  return (
    <>
      {/* Mobile Menu Button - Always visible on mobile */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
       w-64 h-screen bg-white border-r border-gray-200 z-40
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
     

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
                  {item.subItems && !openSubItems[index] ? (
                    <ChevronDown className="w-4 h-4 ml-auto" onClick={()=>{
                      const items=[...openSubItems];
                      items[index]=true
                      setOpenSubItems(items)
                      localStorage.setItem("openSubItems",JSON.stringify(items))
                    }}/>
                  ) : item.subItems &&  <ChevronUp className="w-4 h-4 ml-auto" onClick={()=>{
                    const items=[...openSubItems];
                    items[index]=false
                    setOpenSubItems(items)
                    localStorage.setItem("openSubItems",JSON.stringify(items))
                  }}/> }
                </Link>
                {openSubItems[index] && item.subItems && (
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
    </>
  );
};

export default Sidebar;