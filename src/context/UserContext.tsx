'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import api from '@/api';

export interface UserModel {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface UserContextProps {
  user: UserModel | null;
  loading: boolean;
  setUser: (user: UserModel | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserModel | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      if (pathname === '/login' || pathname === '/signup') {
        setLoading(false);
        return;
      }
      try {
        const response = await api.get('/auth/profile');
        setUser(response.data);
      } catch (error) {
        router.push('/login');
        localStorage.removeItem('jwtToken');
      } finally {
        setLoading(false);
      }
    };

    if (typeof window !== 'undefined') {
      checkUserLoggedIn();
    }
  }, [pathname]);

  return (
    <UserContext.Provider value={{ user, loading, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
