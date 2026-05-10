import React from 'react';
import styles from './Header.module.css';
import { Input } from '../../ui/Input/Input';

interface HeaderProps {
  variant: 'dashboard' | 'document';
  documentName?: string;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ variant, documentName, onBack }) => {
  return (
    <header className={styles.header}>
      {variant === 'dashboard' ? (
        <>
          <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); onBack?.(); }}>DocVault</a>
          <div className={styles.nav}>
            <div className={styles.search}>
              <Input 
                placeholder="Search documents..." 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                }
              />
            </div>
            <div className={styles.userIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.leftGroup}>
          <button className={styles.backBtn} onClick={onBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Dashboard
          </button>
          <span className={styles.docName}>{documentName}</span>
        </div>
      )}
    </header>
  );
};
