import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#0f172a',
    background: '#f8fafc',
    backgroundElement: '#ffffff',
    backgroundSelected: '#f1f5f9',
    textSecondary: '#64748b',
    primary: '#0d9488', // Teal 600
    onPrimary: '#ffffff',
    border: '#e2e8f0',
    danger: '#e11d48',
    success: '#059669',
    warning: '#d97706',
  },
  dark: {
    text: '#f8fafc',
    background: '#090d16',
    backgroundElement: '#131b2e',
    backgroundSelected: '#1e293b',
    textSecondary: '#94a3b8',
    primary: '#14b8a6', // Teal 500
    onPrimary: '#042f2e',
    border: '#1e293b',
    danger: '#fb7185',
    success: '#34d399',
    warning: '#fbbf24',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;