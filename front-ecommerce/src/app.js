import './app.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';

export default function App() {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}
