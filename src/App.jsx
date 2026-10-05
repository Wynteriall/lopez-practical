import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import NotFound from './pages/NotFound';

function Layout() {
  const { theme } = useApp();

  const layoutStyle = {
    minHeight: '100vh',
    backgroundColor: theme === 'dark' ? '#1f2937' : '#f9fafb',
    color: theme === 'dark' ? '#f3f4f6' : '#111827',
    display: 'flex',
    flexDirection: 'column',
    transition: 'background-color 0.2s, color 0.2s',
  };

  const mainStyle = {
    flex: 1,
    padding: '24px',
    maxWidth: '960px',
    width: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
  };

  return (
    <div style={layoutStyle}>
      <Navbar />
      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AppProvider>
  );
}
