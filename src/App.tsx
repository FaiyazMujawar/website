import './App.css';

import About from './components/about';
import Experience from './components/experience';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navigation';
import Skills from './components/skills';

function App() {
  return (
    <>
      <Navbar />
      <div className='w-4/5 mx-auto'>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
