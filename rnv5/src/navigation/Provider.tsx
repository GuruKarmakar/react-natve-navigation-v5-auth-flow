import React from 'react'
import { AuthProvider } from './AuthProvider';
import { Routes } from './Routes';
import { Text } from 'react-native';

interface ProviderProps {

}

export const Provider: React.FC<ProviderProps> = ({ }) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}