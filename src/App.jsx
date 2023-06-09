import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import './_shared.scss';

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
