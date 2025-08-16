'use client';

import { IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from '@/app/providers/theme/ThemeProvider';

export const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};
