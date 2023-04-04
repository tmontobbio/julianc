import './App.css';
import About from './About';
import Nav from './Nav';
import Gallery from "./Gallery.js"
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Gallery />
    </div>
  );
}

export default App;
