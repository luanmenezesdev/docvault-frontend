import { useState } from 'react';
import { Button } from './components/ui/Button/Button';
import { Input } from './components/ui/Input/Input';
import { Textarea } from './components/ui/Textarea/Textarea';
import { Dropzone } from './components/ui/Dropzone/Dropzone';
import { Table, TableHeader, TableRow, TableCell } from './components/ui/Table/Table';
import { Modal } from './components/ui/Modal/Modal';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>DocVault Dashboard</h1>
        <Button onClick={() => setIsModalOpen(true)}>Upload New Document</Button>
      </header>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Recent Documents</h2>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Last Modified</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>project-proposal.pdf</TableCell>
              <TableCell>May 10, 2026</TableCell>
              <TableCell>Active</TableCell>
              <TableCell><Button variant="ghost">View</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>financial-report-q1.xlsx</TableCell>
              <TableCell>May 08, 2026</TableCell>
              <TableCell>Draft</TableCell>
              <TableCell><Button variant="ghost">View</Button></TableCell>
            </TableRow>
          </tbody>
        </Table>
      </section>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Upload Document"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Dropzone onFileSelect={(file) => console.log('Selected file:', file)} />
          
          <Input 
            label="Document Name" 
            placeholder="e.g. project-proposal.pdf" 
            defaultValue="project-proposal.pdf"
          />
          
          <Textarea 
            label="Version Notes" 
            placeholder="Describe what's new in this version..." 
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '8px' }}>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>Upload</Button>
          </div>
        </div>
      </Modal>

      <footer style={{ color: 'var(--foreground-secondary)', fontSize: '14px', textAlign: 'center' }}>
        © 2026 DocVault. All rights reserved.
      </footer>
    </div>
  );
};
