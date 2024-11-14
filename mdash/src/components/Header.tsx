import React from 'react';
import { Crown } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center mb-8">
      <Crown className="w-10 h-10 text-indigo-600" />
      <h1 className="text-3xl font-bold ml-3 text-gray-900">Monarch NAV Tracker</h1>
    </div>
  );
}