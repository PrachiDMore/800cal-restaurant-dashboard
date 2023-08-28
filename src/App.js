import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Orders from './pages/Orders';
import ListFood from './pages/ListFood';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-orders" element={<Orders />} />
          <Route path="/list-foods" element={<ListFood />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
