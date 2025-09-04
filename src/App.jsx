import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import AuthGuard from './components/auth/AuthGuard';
import { AuthProvider } from './context/AuthContext';
import Appwrite from './pages/Appwrite'
import Hero from './pages/Hero';
import Docs from './pages/Docs';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/appwrite" element={<Appwrite />} />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
