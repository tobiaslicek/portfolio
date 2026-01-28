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
      period: '1.5.-4.9.2023',
    },
    {
      icon: '🏝️',
      title: 'React developer',
      period: '1.5.-4.9.2024',
    },
  ];

  return (
    <main className="cv">
      <Header />
      {/* <WorkSection /> */}
      {/* <SkillSection /> */}
      {jobs.map((experience) => {
        return <ExperienceItem />;
      })}
      <CvSection title="Pracovní zkušenosti"></CvSection>
      <Footer />
    </main>
  );
}

export default App;
