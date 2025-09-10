
import './App.css';
import NavBar from './components/NavBar/NavBar';
import BlogList from './components/BlogList/BlogList';
import { Routes, Route} from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </>
  );
}

export default App;
