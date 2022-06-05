import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Works from './components/Works/Works';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Works />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
