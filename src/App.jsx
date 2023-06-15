import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import './_shared.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
