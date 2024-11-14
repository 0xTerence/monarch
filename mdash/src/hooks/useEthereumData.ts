import { useState, useEffect } from 'react';

interface EthereumData {
  price: number;
  change24h: number;
  ytdReturn: number;
  stakingYield: number;
}

export function useEthereumData(): EthereumData {
  const [price, setPrice] = useState<number>(0);
  const [change24h, setChange24h] = useState<number>(0);
  const [ytdReturn, setYtdReturn] = useState<number>(0);
  const stakingYield = 3.0; // Fixed 3% base staking yield

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();
        setPrice(data.ethereum.usd);
        setChange24h(data.ethereum.usd_24h_change);
      } catch (error) {
        console.error('Error fetching price:', error);
      }
    };

    const fetchYTDReturn = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/ethereum');
        const data = await response.json();
        setYtdReturn(data.market_data.price_change_percentage_ytd);
      } catch (error) {
        console.error('Error fetching YTD return:', error);
      }
    };

    fetchPrice();
    fetchYTDReturn();
    const interval = setInterval(fetchPrice, 30000);

    return () => clearInterval(interval);
  }, []);

  return { price, change24h, ytdReturn, stakingYield };
}