import './App.css';

import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navigation';
import Skills from './components/skills';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
