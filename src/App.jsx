import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Appwrite from './pages/Appwrite'
import Hero from './pages/Hero';

const App = () => (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/appwrite" element={<Appwrite />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
  </BrowserRouter>
);

export default App;
