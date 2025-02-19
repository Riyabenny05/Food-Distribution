import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthForm from './components/AuthForm';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page with all components */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <About />
              <Projects />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          } 
        />
        
        {/* Auth Page (Login/Signup) - Only this component is shown */}
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </Router>
  );
};

export default App;
