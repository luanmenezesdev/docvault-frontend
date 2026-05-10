import { useState } from 'react';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { DocumentDetail } from './pages/DocumentDetail/DocumentDetail';

export const App = () => {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'document'>('dashboard');

  const navigateToDocument = (id: string) => {
    console.log('Navigating to document:', id);
    setCurrentPage('document');
  };

  const navigateToDashboard = () => {
    setCurrentPage('dashboard');
  };

  return (
    <>
      {currentPage === 'dashboard' ? (
        <Dashboard onNavigateToDocument={navigateToDocument} />
      ) : (
        <DocumentDetail onBack={navigateToDashboard} />
      )}
    </>
  );
};
