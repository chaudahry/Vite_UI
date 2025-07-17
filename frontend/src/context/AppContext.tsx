import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { userAPI } from '../utils/api';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role?: string;
  hrId?: string;
  department?: string;
  position?: string;
  user_id?: string;
}

export interface Candidate {
  id: string;
  filename: string;
  matchScore: number;
  matchedSkills: string[];
  category: string;
  experience?: string;
  location?: string;
  rawText?: string;
  resume_id?: string;
}

export interface JobRequirement {
  id: string;
  title: string;
  description: string;
  skills: string[];
  experience: string;
  department: string;
  location?: string;
  jobType?: string;
  job_id?: string;
}

interface AppContextType {
  // Authentication
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
  logout: () => void;
  
  // Navigation
  currentPage: string;
  setCurrentPage: (page: string) => void;
  
  // Application State
  currentStep: number;
  setCurrentStep: (step: number) => void;
  
  // Job Requirements
  jobRequirement: JobRequirement | null;
  setJobRequirement: (job: JobRequirement) => void;
  currentJobId: string | null;
  setCurrentJobId: (id: string | null) => void;
  
  // File Management
  uploadedFiles: File[];
  setUploadedFiles: (files: File[]) => void;
  uploadedResumeIds: string[];
  setUploadedResumeIds: (ids: string[]) => void;
  
  // Candidates
  candidates: Candidate[];
  setCandidates: (candidates: Candidate[]) => void;
  filteredCandidates: Candidate[];
  setFilteredCandidates: (candidates: Candidate[]) => void;
  
  // UI State
  loading: boolean;
  setLoading: (loading: boolean) => void;
  loadingMessage: string;
  setLoadingMessage: (message: string) => void;
  
  // Modals
  showModal: string | null;
  setShowModal: (modal: string | null) => void;
  modalData: any;
  setModalData: (data: any) => void;

  // OTP
  otpAction: string | null;
  setOtpAction: (action: string | null) => void;

  // Session Management
  clearSession: () => void;
  saveSession: (userData: User, token?: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Authentication State
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Navigation State
  const [currentPage, setCurrentPage] = useState('landing');
  
  // Application State
  const [currentStep, setCurrentStep] = useState(0);
  const [jobRequirement, setJobRequirement] = useState<JobRequirement | null>(null);
  const [currentJobId, setCurrentJobId] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadedResumeIds, setUploadedResumeIds] = useState<string[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);
  
  // UI State
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Processing...');
  const [showModal, setShowModal] = useState<string | null>(null);
  const [modalData, setModalData] = useState<any>(null);
  const [otpAction, setOtpAction] = useState<string | null>(null);

  // Load user session on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('epochfolio_user');
    const savedToken = localStorage.getItem('epochfolio_token');
    
    if (savedUser && savedToken) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        
        // Check if user has completed profile
        if (userData.role && userData.department && userData.position) {
          setIsAuthenticated(true);
          setCurrentPage('dashboard');
        } else {
          setCurrentPage('userInfo');
        }
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        clearSession();
      }
    }

    // Load saved job and candidates data
    const savedJob = localStorage.getItem('epochfolio_job');
    if (savedJob) {
      try {
        const jobData = JSON.parse(savedJob);
        setJobRequirement(jobData);
        setCurrentJobId(jobData.job_id);
      } catch (error) {
        console.error('Error parsing saved job data:', error);
      }
    }

    const savedCandidates = localStorage.getItem('epochfolio_candidates');
    if (savedCandidates) {
      try {
        const candidatesData = JSON.parse(savedCandidates);
        setCandidates(candidatesData);
        setFilteredCandidates(candidatesData);
      } catch (error) {
        console.error('Error parsing saved candidates data:', error);
      }
    }
  }, []);

  const clearSession = () => {
    userAPI.clearSession();
    setUser(null);
    setIsAuthenticated(false);
    setCurrentPage('landing');
    setCurrentStep(0);
    setJobRequirement(null);
    setCurrentJobId(null);
    setUploadedFiles([]);
    setUploadedResumeIds([]);
    setCandidates([]);
    setFilteredCandidates([]);
    setOtpAction(null);
  };

  const saveSession = (userData: User, token?: string) => {
    setUser(userData);
    localStorage.setItem('epochfolio_user', JSON.stringify(userData));
    
    if (token) {
      localStorage.setItem('epochfolio_token', token);
    }
  };

  const logout = async () => {
    try {
      // Call backend logout endpoint
      await userAPI.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearSession();
    }
  };

  // Save job requirement to localStorage when it changes
  useEffect(() => {
    if (jobRequirement) {
      localStorage.setItem('epochfolio_job', JSON.stringify(jobRequirement));
    }
  }, [jobRequirement]);

  // Save candidates to localStorage when they change
  useEffect(() => {
    if (candidates.length > 0) {
      localStorage.setItem('epochfolio_candidates', JSON.stringify(candidates));
    }
  }, [candidates]);

  const value: AppContextType = {
    // Authentication
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    logout,
    
    // Navigation
    currentPage,
    setCurrentPage,
    
    // Application State
    currentStep,
    setCurrentStep,
    
    // Job Requirements
    jobRequirement,
    setJobRequirement,
    currentJobId,
    setCurrentJobId,
    
    // File Management
    uploadedFiles,
    setUploadedFiles,
    uploadedResumeIds,
    setUploadedResumeIds,
    
    // Candidates
    candidates,
    setCandidates,
    filteredCandidates,
    setFilteredCandidates,
    
    // UI State
    loading,
    setLoading,
    loadingMessage,
    setLoadingMessage,
    
    // Modals
    showModal,
    setShowModal,
    modalData,
    setModalData,

    // OTP
    otpAction,
    setOtpAction,

    // Session Management
    clearSession,
    saveSession,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};