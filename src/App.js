import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsPage from './pages/Projects';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Contact from './pages/Contact';
import WorkHistory from './pages/WorkHistory';

function App() {
  return (
    <>
      <Router>
        <div className='flex flex-col min-h-screen'>
        <Header />
        <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<ProjectsPage />} />
            <Route path='/About' element={<About />} />
            {/* <Route path='/Education' element={<Education />} /> */}
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Work%20History' element={<WorkHistory />} />
      </Routes>
      </div>
      <Footer />
        </div>
      </Router>
    </>
    
  );
}

export default App;
