import './App.css';
import { CvSection } from './components/CvSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SkillSection } from './components/SkillSection';
import { CvSection } from './components/CvSection';

function App() {
  return (
    <main className="cv">
      <Header />
      {/* <WorkSection /> */}
      {/* <SkillSection /> */}
      <CvSection title="Pracovní zkušenosti" items={undefined}/>
      <Footer />
    </main>
  );  
}

export default App;
