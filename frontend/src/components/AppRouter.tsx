import React from 'react';
import { useApp } from '../context/AppContext';
import LandingPage from './LandingPage';
import AuthPage from './AuthPage';
import UserInfoCollection from './UserInfoCollection';
import JobDescriptionPage from './JobDescriptionPage';
import Dashboard from './Dashboard';
import LoadingOverlay from './LoadingOverlay';
import Modal from './Modal';

const AppRouter: React.FC = () => {
  const { isAuthenticated, loading, showModal, currentPage, user } = useApp();

  // Helper function to check if the user's profile is complete
  const isProfileComplete = (user: any) => {
    if (!user) return false;
    // Check for essential profile fields. Adjust these fields as necessary.
    const { name, department, position, hrId } = user;
    return !!(name && department && position && hrId);
  };

  if (isAuthenticated) {
    // If the user is authenticated, we check if their profile is complete.
    if (isProfileComplete(user)) {
      // Profile is complete, show the main dashboard.
      return (
        <>
          <Dashboard />
          {loading && <LoadingOverlay />}
          {showModal && <Modal />}
        </>
      );
    } else {
      // Profile is not complete, force user to the collection page.
      return (
        <>
          <UserInfoCollection />
          {loading && <LoadingOverlay />}
          {showModal && <Modal />}
        </>
      );
    }
  }

  // If user is not authenticated, show landing or auth based on currentPage
  return (
    <>
      {currentPage === 'auth' && <AuthPage />}
      {currentPage === 'userInfo' && <UserInfoCollection />}
      {currentPage === 'jobDescription' && <JobDescriptionPage />}
      {currentPage === 'landing' && <LandingPage />}
      {loading && <LoadingOverlay />}
      {showModal && <Modal />}
    </>
  );
};

export default AppRouter;