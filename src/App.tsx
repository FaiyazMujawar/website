import './App.css';

import About from './components/about';
import Experience from './components/experience';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navigation';
import Skills from './components/skills';

function App() {
  return (
    <div>
      <Navbar />
      <div className='sm0:max-sm:w-[90%] w-[70%] mx-auto'>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
