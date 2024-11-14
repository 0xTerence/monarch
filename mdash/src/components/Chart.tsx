import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';

interface ChartProps {
  data: { time: string; value: number }[];
}

export function Chart({ data }: ChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const sortedData = [...data].sort((a, b) => 
      new Date(a.time).getTime() - new Date(b.time).getTime()
    );

    const uniqueData = sortedData.filter((item, index, self) =>
      index === self.findIndex((t) => t.time === item.time)
    );

    const chartOptions = {
      layout: {
        background: { color: 'transparent' },
        textColor: '#333',
      },
      grid: {
        vertLines: { color: '#E1E5EA' },
        horzLines: { color: '#E1E5EA' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    };

    chartRef.current = createChart(chartContainerRef.current, chartOptions);
    const lineSeries = chartRef.current.addLineSeries({
      color: '#6366F1',
      lineWidth: 2,
      crosshairMarkerVisible: true,
      crosshairMarkerRadius: 6,
    });

    const formattedData = uniqueData.map(item => ({
      time: item.time,
      value: item.value,
    }));

    lineSeries.setData(formattedData);

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, [data]);

  return <div ref={chartContainerRef} className="w-full h-[400px]" />;
}