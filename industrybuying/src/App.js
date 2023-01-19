
import './App.css';
import AllRoutes from './components/AllRouter';
import Navbar  from './components/Navbar';
import Footer, { Footer1 } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer1/>
      <Footer />
      
    </div>
  );
}

export default App;
