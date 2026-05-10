import { Button } from './components/ui/Button/Button';
import { Input } from './components/ui/Input/Input';
import { Textarea } from './components/ui/Textarea/Textarea';

export const App = () => {
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px', margin: '0 auto' }}>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="primary" disabled>Disabled Button</Button>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2>Inputs</h2>
        <Input 
          label="Document Name" 
          placeholder="e.g. project-proposal.pdf" 
        />
        <Input 
          label="Search" 
          placeholder="Search documents..." 
          icon={<span>🔍</span>}
        />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2>Textarea</h2>
        <Textarea 
          label="Version Notes" 
          placeholder="Describe what's new in this version..." 
        />
      </section>
    </div>
  );
};
