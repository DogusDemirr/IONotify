import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Appearance } from 'react-native';

const themes = {
  light: {
    background: '#F9FAFB',
    card: '#fff',
    text: '#0A2240',
    subtext: '#374151',
    header: '#0A2240',
    icon: '#0A2240',
    border: '#E5E7EB',
    footer: '#0A2240',
    notificationBg: '#fff',
    notificationCategory: '#0A2240',
    notificationTitle: '#0A2240',
    notificationDesc: '#374151',
    notificationTime: '#0A2240',
    statusDotBorder: '#fff',
  },
  dark: {
    background: '#101624',
    card: '#1A2233',
    text: '#F9FAFB',
    subtext: '#A3A3A3',
    header: '#1A2233',
    icon: '#F9FAFB',
    border: '#232B3B',
    footer: '#232B3B',
    notificationBg: '#232B3B',
    notificationCategory: '#F9FAFB',
    notificationTitle: '#F9FAFB',
    notificationDesc: '#A3A3A3',
    notificationTime: '#F9FAFB',
    statusDotBorder: '#232B3B',
  },
};

const ThemeContext = createContext({
  theme: themes.light,
  mode: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = Appearance.getColorScheme();
  const [mode, setMode] = useState<'light' | 'dark'>(colorScheme === 'dark' ? 'dark' : 'light');

  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const value = {
    theme: themes[mode],
    mode,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}; 