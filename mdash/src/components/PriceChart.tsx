import React from 'react';
import { Chart } from './Chart';

interface PriceChartProps {
  data: { time: string; value: number }[];
}

export function PriceChart({ data }: PriceChartProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Price History (7 Days)</h2>
      <Chart data={data} />
    </div>
  );
}