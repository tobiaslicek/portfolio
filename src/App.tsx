import './App.css';
import { CvSection } from './components/CvSection';
import { ExperienceItem } from './components/ExperienceItem';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  const jobs = [
    {
      icon: '🦇',
      title: 'Frontend Developer',
      period: '1.5.–4.9.2023',
    },
    {
      icon: '🏝️',
      title: 'React developer',
      period: '1.5.–4.9.2024',
    },
  ];

  return (
    <main className="cv">
      <Header />

      <CvSection title="Pracovní zkušenosti">
        {jobs.map((job) => (
          <ExperienceItem
            key={job.title}
            title={job.title}
            icon={job.icon}
            period={job.period}
          />
        ))}
      </CvSection>

      <Footer />
    </main>
  );
}

export default App;
