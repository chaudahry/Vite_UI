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

  // If user is authenticated, show dashboard
  if (isAuthenticated) {
    return (
      <>
        <Dashboard />
        {loading && <LoadingOverlay />}
        {showModal && <Modal />}
      </>
    );
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