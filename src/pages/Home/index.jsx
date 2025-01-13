import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/mainback.png';
import first from '../../assets/images/a.png';
import second from '../../assets/images/b.jpeg';
import third from '../../assets/images/c.jpeg';
import fourth from '../../assets/images/d.jpeg';
import fifith from '../../assets/images/e.jpeg';
import sixth from '../../assets/images/f.jpeg';
import seventh from '../../assets/images/i.png';

const CandourLanding = () => {
    const navigate=useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto bg-white z-50">
        <div className="flex items-center">
          <img src={seventh} alt="Candour Logo" className="h-12 w-auto"/>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex space-x-8 mr-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Product</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Articles</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
          </div>
          <Button 
            variant="default" 
            onClick={()=>{
                localStorage.setItem('loginType','buyer')
                navigate('/buyer')}}
            className="bg-black text-white rounded-md px-6 py-2 hover:bg-gray-800 transition-colors"
          >
            Buyer
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-black text-black rounded-md px-6 py-2 hover:bg-gray-50 transition-colors"
            onClick={()=>{
                localStorage.setItem('loginType','supplier')
                navigate('/supplier')}}
          >
            Supplier
          </Button>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          {/* Mobile menu button */}
          <button 
            className="p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div 
              className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
              onClick={(e) => e.stopPropagation()}
            >
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Product</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Articles</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About Us</a>
          <div className="px-4 py-2 space-y-2">
            <Button 
              variant="default" 
              className="w-full bg-black text-white text-sm"
              onClick={()=>{
                localStorage.setItem('loginType','buyer')
                navigate('/buyer')}}
            >
              Buyer
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-black text-black text-sm"
              onClick={()=>{
                localStorage.setItem('loginType','supplier')
                navigate('/supplier')}}
            >
              Supplier
            </Button>
          </div>
        </div>
          )}
          </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center px-4 md:px-8 py-12 md:py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Your bridge to strategic partnerships
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          A digitalised hub that allows procurement managers and suppliers to meet and add value to their businesses
        </p>
        <Button className="bg-black text-white px-8 py-3 rounded-md text-lg hover:bg-gray-800 transition-colors">
          Demo Video
        </Button>
      </div>

      {/* Bridge Image */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 mb-20">
        <img 
          src={logo}
          alt="Bridge" 
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Our Solutions Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
        <p className="text-gray-600 text-lg">
          Candour aims to solve your biggest time and money challenges.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Improving efficiencies Is Our Mission
        </h2>
        <p className="text-gray-600 text-center text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          At Candour, we recognise the importance of efficiencies and how much It can elevate a business.
        </p>

        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-16 h-16 bg-[#1a4fba] rounded-full flex items-center justify-center flex-shrink-0">
              <img src={fourth} alt="" className="w-8 h-8"/>
            </div>
            <p className="flex-1 text-lg md:text-xl">
              The people within Candour all strive for the same change, we reflect the world around us where diversity and inclusion is praised and everyone is empowered to be authentic.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-16 h-16 bg-[#1a4fba] rounded-full flex items-center justify-center flex-shrink-0">
              <img src={fifith} alt="" className="w-8 h-8"/>
            </div>
            <p className="flex-1 text-lg md:text-xl">
              Every connection matters to us. Candour is grounded on honesty as we believe this is a key component to creating long lasting partnerships.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-16 h-16 bg-[#1a4fba] rounded-full flex items-center justify-center flex-shrink-0">
              <img src={sixth} alt="" className="w-8 h-8"/>
            </div>
            <p className="flex-1 text-lg md:text-xl">
              We pride ourselves on having high standards, we don't take trust for granted. As a company Candour believes trust is earned, nurtured and reciprocated. Above all it's shown in what we do.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { img: first, name: "Paul Adaba", role: "Founder & CEO" },
            { img: second, name: "Chris Reid", role: "Founder & CTO" },
            { img: third, name: "Aron Berhane", role: "Founder & CIO" }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img 
                src={member.img}
                alt={member.name}
                className="w-48 h-48 mx-auto rounded-lg mb-6 object-cover shadow-md"
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <a href="#" className="inline-block">
                <svg className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-5xl font-bold mb-6">Making an Impact</h2>
        <p className="text-xl">
          Candour was created by us with a goal in mind to bring digitalisation to the construction industry and making a long term impact.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-32 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <img src={seventh} alt="Candour Logo" className="h-12 w-auto mb-6"/>
            </div>
            <div className="flex space-x-24">
              <div>
                <h3 className="font-semibold text-lg mb-6">Content</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Articles</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-6">Legal</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Usage policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookie policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CandourLanding;