import { createContext, useContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [favorites, setFavorites] = useState([]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleFavorite = (userId) => {
    setFavorites((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const isFavorite = (userId) => {
    return favorites.includes(userId);
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    favorites,
    setFavorites,
    toggleFavorite,
    isFavorite,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
