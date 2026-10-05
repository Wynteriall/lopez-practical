import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Button from './Button';

export default function Navbar() {
  const { theme, toggleTheme, favorites } = useApp();

  const navLinkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    fontWeight: isActive ? '700' : '500',
    color: isActive ? '#2563eb' : (theme === 'dark' ? '#f3f4f6' : '#1f2937'),
    borderBottom: isActive ? '2px solid #2563eb' : '2px solid transparent',
    paddingBottom: '4px',
  });

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 24px',
    borderBottom: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
    backgroundColor: theme === 'dark' ? '#111827' : '#ffffff',
  };

  const navListStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  };

  return (
    <header style={headerStyle}>
      <div style={{ fontWeight: '700', fontSize: '18px' }}>
        Team Directory
      </div>
      <nav style={navListStyle}>
        <NavLink to="/" end style={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/users" style={navLinkStyle}>
          Users
        </NavLink>
        <NavLink to="/about" style={navLinkStyle}>
          About
        </NavLink>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500' }}>
          Favorites: <strong>{favorites.length}</strong>
        </span>
        <Button
          onClick={toggleTheme}
          label={`Theme: ${theme === 'dark' ? 'Dark 🌙' : 'Light ☀️'}`}
        />
      </div>
    </header>
  );
}
