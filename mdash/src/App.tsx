import React from 'react';
import { Header } from './components/Header';
import { PriceCard } from './components/PriceCard';
import { MetricsGrid } from './components/MetricsGrid';
import { useEthereumData } from './hooks/useEthereumData';

export function App() {
  const { price, change24h, ytdReturn, stakingYield } = useEthereumData();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Header />
        
        <div className="grid gap-6 mb-8">
          <PriceCard price={price} change24h={change24h} />
          <MetricsGrid ytdReturn={ytdReturn} stakingYield={stakingYield} />
        </div>
      </div>
    </div>
  );
}