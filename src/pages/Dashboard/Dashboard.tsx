import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import { Header } from '../../components/layout/Header/Header';
import { Button } from '../../components/ui/Button/Button';
import { Table, TableHeader, TableRow, TableCell } from '../../components/ui/Table/Table';
import { Modal } from '../../components/ui/Modal/Modal';
import { Dropzone } from '../../components/ui/Dropzone/Dropzone';
import { Input } from '../../components/ui/Input/Input';
import { Textarea } from '../../components/ui/Textarea/Textarea';

interface DashboardProps {
  onNavigateToDocument: (id: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigateToDocument }) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Header variant="dashboard" />
      
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Secure Document Versioning</h1>
        <Button 
          variant="inverse"
          className={styles.uploadBtn} 
          onClick={() => setIsUploadModalOpen(true)}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
          }
        >
          Upload New Document
        </Button>
      </section>

      <main className={styles.content}>
        <h2 className={styles.sectionTitle}>Recent Documents</h2>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>File name</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader>Last Modified</TableHeader>
              <TableHeader>Version</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow onClick={() => onNavigateToDocument('1')}>
              <TableCell style={{ fontWeight: 500, color: 'var(--foreground-primary)' }}>project-proposal.pdf</TableCell>
              <TableCell>PDF</TableCell>
              <TableCell>May 10, 2026</TableCell>
              <TableCell>v2.1</TableCell>
            </TableRow>
            <TableRow onClick={() => onNavigateToDocument('2')}>
              <TableCell style={{ fontWeight: 500, color: 'var(--foreground-primary)' }}>financial-report-q1.xlsx</TableCell>
              <TableCell>Excel</TableCell>
              <TableCell>May 08, 2026</TableCell>
              <TableCell>v1.0</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </main>

      <Modal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
        title="Upload Document"
      >
        <div className={styles.modalContent}>
          <Dropzone onFileSelect={(file) => console.log('Selected file:', file)} />
          
          <Input 
            label="Document Name" 
            placeholder="e.g. project-proposal.pdf" 
          />
          
          <Textarea 
            label="Version Notes" 
            placeholder="Describe what's new in this version..." 
          />

          <div className={styles.modalActions}>
            <Button variant="ghost" onClick={() => setIsUploadModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsUploadModalOpen(false)}>Upload</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
