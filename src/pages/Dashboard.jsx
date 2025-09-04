import useAuth from '../hooks/useAuth';
import Hero from './Hero';
import Container from '../components/Container';
import { useState } from 'react';

const Dashboard = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    headline: '',
    subheading: '',
    cta: '',
  });
  const [preview, setPreview] = useState(null);

  const handleGenerate = () => {
    setPreview(formData);
  };

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name || 'Designer'} 👋</h1>
      <Hero formData={formData} setFormData={setFormData} onGenerate={handleGenerate} />
      {preview && <HeroPreview {...preview} />}
    </Container>
  );
};

export default Dashboard;
