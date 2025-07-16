import React, { useState } from 'react';
import { User, ArrowRight, Building, Car as IdCard, Briefcase } from 'lucide-react';
import { useApp } from '../context/AppContext';

const UserInfoCollection: React.FC = () => {
  const { setCurrentPage, user, setUser, setIsAuthenticated } = useApp();
  
  const [formData, setFormData] = useState({
    fullName: '',
    department: '',
    position: '',
    hrId: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const departments = [
    'HR',
    'Marketing', 
    'Finance',
    'Engineering',
    'Sales',
    'Operations',
    'Product',
    'Design',
    'Legal',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.department) {
      newErrors.department = 'Department is required';
    }
    if (!formData.position.trim()) {
      newErrors.position = 'Position is required';
    }
    if (!formData.hrId.trim()) {
      newErrors.hrId = 'HR ID is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Update user with collected information
    const updatedUser = {
      ...user,
      name: formData.fullName,
      department: formData.department,
      position: formData.position,
      hrId: formData.hrId
    };

    setUser(updatedUser);
    localStorage.setItem('epochfolio_user', JSON.stringify(updatedUser));
    setIsAuthenticated(true);
    
    // Move to job description page
    setCurrentPage('jobDescription');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="pt-24 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100/50">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <User size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Profile</h2>
              <p className="text-gray-600">
                Tell us a bit about yourself to get started
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <span className="text-sm font-medium text-gray-700">of 3 steps</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-2/3 transition-all duration-300"></div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User size={16} className="inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                    errors.fullName 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-gray-200 focus:border-blue-500'
                  } focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <div className="text-red-600 text-sm mt-1">{errors.fullName}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Building size={16} className="inline mr-2" />
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                    errors.department 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-gray-200 focus:border-blue-500'
                  } focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                {errors.department && (
                  <div className="text-red-600 text-sm mt-1">{errors.department}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Briefcase size={16} className="inline mr-2" />
                  Position
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                    errors.position 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-gray-200 focus:border-blue-500'
                  } focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                  placeholder="e.g., Senior HR Manager"
                />
                {errors.position && (
                  <div className="text-red-600 text-sm mt-1">{errors.position}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <IdCard size={16} className="inline mr-2" />
                  HR ID
                </label>
                <input
                  type="text"
                  name="hrId"
                  value={formData.hrId}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                    errors.hrId 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-gray-200 focus:border-blue-500'
                  } focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                  placeholder="Enter your HR ID"
                />
                {errors.hrId && (
                  <div className="text-red-600 text-sm mt-1">{errors.hrId}</div>
                )}
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Continue to Job Setup
                <ArrowRight size={20} />
              </button>
            </form>

            {/* User Info Display */}
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="text-xs text-blue-800 font-semibold mb-1">Account:</div>
              <div className="text-xs text-blue-700">{user?.email}</div>
              {user?.phone && (
                <div className="text-xs text-blue-700">{user.phone}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCollection;