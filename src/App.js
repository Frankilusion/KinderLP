import logo from './logo.svg';
import './App.css';
import './Styles/main.css';
import Home from './Components/Home';
import Ages from './Components/Ages';
import About from './Components/About';
import Classes from './Components/Classes';
import Teachers from './Components/Teachers';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Nabvbar';
function App() {
  return (
    <div className="App">
      <Home/>
      <Ages/>
      <About/>
      <Classes/>
      <Teachers/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;
