import React, { useState } from 'react';
import styles from './DocumentDetail.module.css';
import { Header } from '../../components/layout/Header/Header';
import { Button } from '../../components/ui/Button/Button';
import { Table, TableHeader, TableRow, TableCell } from '../../components/ui/Table/Table';
import { Modal } from '../../components/ui/Modal/Modal';
import { Dropzone } from '../../components/ui/Dropzone/Dropzone';
import { Textarea } from '../../components/ui/Textarea/Textarea';

interface DocumentDetailProps {
  onBack: () => void;
}

export const DocumentDetail: React.FC<DocumentDetailProps> = ({ onBack }) => {
  const [isNewVersionModalOpen, setIsNewVersionModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Header 
        variant="document" 
        documentName="project-proposal.pdf" 
        onBack={onBack} 
      />
      
      <section className={styles.summary}>
        <div className={styles.infoLeft}>
          <span className={styles.versionLabel}>Current Version</span>
          <h1 className={styles.versionTitle}>v2.1 (Active)</h1>
          <span className={styles.updateInfo}>Last updated by Luan V. on May 10, 2026</span>
        </div>
        <Button 
          variant="inverse"
          className={styles.newVersionBtn} 
          onClick={() => setIsNewVersionModalOpen(true)}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          }
        >
          Upload New Version
        </Button>
      </section>

      <main className={styles.content}>
        <h2 className={styles.sectionTitle}>Version History</h2>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Version</TableHeader>
              <TableHeader>Changes</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell style={{ fontWeight: 500, color: 'var(--foreground-primary)' }}>v2.1</TableCell>
              <TableCell>Fixed formatting in executive summary</TableCell>
              <TableCell>May 10, 2026</TableCell>
              <TableCell>
                <Button 
                  variant="ghost" 
                  className={styles.actionBtn}
                  aria-label="Download"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  } 
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 500, color: 'var(--foreground-primary)' }}>v2.0</TableCell>
              <TableCell>Updated budget projections for Q3</TableCell>
              <TableCell>May 05, 2026</TableCell>
              <TableCell>
                <Button 
                  variant="ghost" 
                  className={styles.actionBtn}
                  aria-label="Download"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  } 
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 500, color: 'var(--foreground-primary)' }}>v1.0</TableCell>
              <TableCell>Initial draft</TableCell>
              <TableCell>April 28, 2026</TableCell>
              <TableCell>
                <Button 
                  variant="ghost" 
                  className={styles.actionBtn}
                  aria-label="Download"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  } 
                />
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </main>

      <Modal 
        isOpen={isNewVersionModalOpen} 
        onClose={() => setIsNewVersionModalOpen(false)} 
        title="Upload New Version"
      >
        <div className={styles.modalContent}>
          <Dropzone onFileSelect={(file) => console.log('Selected file:', file)} />
          
          <Textarea 
            label="Version Notes" 
            placeholder="Describe what's new in this version..." 
          />

          <div className={styles.modalActions}>
            <Button variant="ghost" onClick={() => setIsNewVersionModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsNewVersionModalOpen(false)}>Upload</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
