import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
}

function MetricCard({ title, value, subtitle }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );
}

interface MetricsGridProps {
  ytdReturn: number;
  stakingYield: number;
}

export function MetricsGrid({ ytdReturn, stakingYield }: MetricsGridProps) {
  const yieldMultiple = 2.25; // 225% multiplier
  const multipliedStakingYield = stakingYield * yieldMultiple;
  const compoundedReturns = ytdReturn + multipliedStakingYield;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <MetricCard 
        title="YTD Return" 
        value={`${ytdReturn.toFixed(2)}%`}
        subtitle="Year to Date Performance" 
      />
      <MetricCard 
        title="Enhanced Staking Yield" 
        value={`${multipliedStakingYield.toFixed(2)}%`}
        subtitle={`225% Multiple on ${stakingYield.toFixed(2)}% Base APR`} 
      />
      <MetricCard 
        title="Total Returns" 
        value={`${compoundedReturns.toFixed(2)}%`}
        subtitle="YTD + Enhanced Staking Yield" 
      />
    </div>
  );
}</content></file>
<boltAction type="start">
<command>npm run dev</command>