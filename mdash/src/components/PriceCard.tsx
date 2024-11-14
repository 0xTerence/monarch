import React from 'react';

interface PriceCardProps {
  price: number;
  change24h: number;
}

export function PriceCard({ price, change24h }: PriceCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-gray-500 text-sm font-medium">Current Price</h2>
          <p className="text-4xl font-bold mt-1">{formatPrice(price)}</p>
        </div>
        <div className={`px-3 py-1 rounded-full ${
          change24h >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          <p className="text-sm font-semibold">
            {change24h >= 0 ? '+' : ''}{change24h.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
}