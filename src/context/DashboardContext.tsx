'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '@/api';
import { io } from 'socket.io-client';

// Define interfaces based on your MongoDB schemas
interface Product {
  _id: string;
  name: string;
  stock_qty: number;
  // ... other product fields
}

interface SalesSummary {
  _id: string;
  date: Date;
  // ... other sales summary fields
}

interface Purchase {
  _id: string;
  createdAt: Date;
  // ... other purchase fields
}

interface Expense {
  _id: string;
  createdAt: Date;
  // ... other expense fields
}

interface ExpenseByCategory {
  _id: string;
  createdAt: Date;
  // ... other expense category fields
}

interface DashboardData {
  popularProducts: Product[];
  totalProducts: number;
  salesSummary: SalesSummary[];
  purchaseSummary: Purchase[];
  expenseSummary: Expense[];
  expenseByCategorySummary: ExpenseByCategory[];
  todaySales: number;
}

interface DashboardContextType {
  dashboardData: DashboardData;
  isLoading: boolean;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    popularProducts: [],
    totalProducts: 0,
    salesSummary: [],
    purchaseSummary: [],
    expenseSummary: [],
    expenseByCategorySummary: [],
    todaySales: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial fetch
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const response = await api.get('/dashboard');
        setDashboardData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();

    // Socket connection
    const socket = io('http://localhost:4000', {
      withCredentials: true,
    });

    socket.on('dashboardUpdate', (data: DashboardData) => {
      setDashboardData(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <DashboardContext.Provider value={{ dashboardData, isLoading }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
