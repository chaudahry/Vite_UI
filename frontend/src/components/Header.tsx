import React, { useState } from 'react';
import { FileText, LogOut, User, Settings, Bell, ChevronDown, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header: React.FC = () => {
  const { user, logout, setShowModal, currentStep } = useApp();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    setShowModal('logout');
    setShowUserMenu(false);
  };

  const stepNames = ['Job Setup', 'Upload Resumes', 'Results'];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
              <FileText size={20} className="text-white md:w-7 md:h-7" />
            </div>
            <div>
              <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EpochFolio
              </span>
              <div className="text-xs text-gray-500 font-medium hidden md:block">AI-Powered Hiring</div>
            </div>
          </div>

          {/* Progress Indicator - Desktop */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {stepNames.map((stepName, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  index <= currentStep 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {index + 1}
                </div>
                <span className={`text-sm font-medium hidden xl:block ${
                  index <= currentStep ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {stepName}
                </span>
                {index < stepNames.length - 1 && (
                  <div className={`w-6 xl:w-8 h-0.5 mx-1 xl:mx-2 ${
                    index < currentStep ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Progress Indicator - Mobile */}
          <div className="flex lg:hidden items-center gap-1">
            {stepNames.map((_, index) => (
              <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
              }`} />
            ))}
            <span className="ml-2 text-sm font-medium text-gray-600">
              {currentStep + 1}/3
            </span>
          </div>
          
          {/* User Menu */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Notifications - Desktop only */}
            <button className="hidden md:block relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Bell size={20} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* User Dropdown - Desktop */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 md:gap-3 p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-base">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div className="hidden lg:block text-left">
                  <div className="text-sm font-semibold text-gray-900 truncate max-w-32">
                    {user?.name || 'User'}
                  </div>
                  <div className="text-xs text-gray-500 truncate max-w-32">{user?.email}</div>
                </div>
                <ChevronDown size={16} className={`text-gray-400 transition-transform hidden lg:block ${showUserMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="font-semibold text-gray-900 truncate">{user?.name}</div>
                    <div className="text-sm text-gray-500 truncate">{user?.email}</div>
                    <div className="text-xs text-blue-600 font-medium mt-1">
                      {user?.position} • {user?.department}
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                      <User size={16} />
                      Profile Settings
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                      <Settings size={16} />
                      Account Settings
                    </button>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-2">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Avatar - Mobile */}
            <div className="md:hidden">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg text-sm">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="space-y-3">
              {/* Progress Steps - Mobile */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">Progress</div>
                {stepNames.map((stepName, index) => (
                  <div key={index} className={`flex items-center gap-3 py-2 ${
                    index <= currentStep ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      index <= currentStep 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium">{stepName}</span>
                  </div>
                ))}
              </div>

              {/* User Info */}
              <div className="p-3 bg-gray-50 rounded-xl">
                <div className="font-semibold text-gray-900">{user?.name}</div>
                <div className="text-sm text-gray-500">{user?.email}</div>
                <div className="text-xs text-blue-600 font-medium mt-1">
                  {user?.position} • {user?.department}
                </div>
              </div>

              {/* Menu Items */}
              <button className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                <User size={16} />
                Profile Settings
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                <Settings size={16} />
                Account Settings
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                <Bell size={16} />
                Notifications
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;