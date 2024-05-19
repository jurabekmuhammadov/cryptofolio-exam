import Diagram from "../components/diagram";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface CoinDetailsType {
  image: {
    large: string;
  };
  name: string;
  description: {
    en: string;
  };
  market_data: {
    market_cap_rank: number;
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
  };
}

const CoinDetails = () => {
  const { coinId } = useParams<{ coinId: string }>();
  const [details, setDetails] = useState<CoinDetailsType | null>(null);

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0
    }).format(number);
  };

  const getCoinDetails = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      const data = await response.json();
      setDetails(data);
    } catch (error) {
      console.error('Failed to fetch coin details:', error);
    }
  }

  useEffect(() => {
    if (coinId) {
      getCoinDetails();
    }
  }, [coinId]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <section className='mt-7 mb-10 lg:mb-52 pl-5 pr-10 flex flex-col lg:flex-row'>
      <div className='flex flex-col gap-5 lg:gap-10 border-b-2 border-r-0 lg:border-b-0 lg:border-r-2 border-zinc-500 pb-5 sm:pb-8 lg:pr-8 w-full lg:w-[550px]'>
        <div className='flex flex-col items-center justify-center gap-2 sm:gap-5 lg:gap-10'>
          <img src={details.image?.large} alt='coinimage' width={160} height={160} className="w-28 h-28 lg:h-40 lg:w-40" />
          <h1 className='text-white font-bold text-3xl lg:text-5xl capitalize'>{details.name}</h1>
        </div>
        <div>
          <p className='text-white text-sm lg:text-base lg:leading-7 line-clamp-5 text-left sm:text-center lg:text-left'>{details.description?.en}</p>
        </div>
        <div className='flex flex-col gap-0 sm:gap-2 lg:gap-5 items-start sm:items-center lg:items-start'>
          <h1 className='text-white text-base sm:text-xl lg:text-2xl font-bold'>Rank: <span className='font-normal'>{details.market_data?.market_cap_rank}</span></h1>
          <h1 className='text-white text-base sm:text-xl lg:text-2xl font-bold'>Current Price: <span className='font-normal'>$ {formatNumber(details.market_data?.current_price?.usd || 0)}</span></h1>
          <h1 className='text-white text-base sm:text-xl lg:text-2xl font-bold'>Market Cap: <span className='font-normal'>$ {formatNumber(details.market_data?.market_cap?.usd || 0)}</span></h1>
        </div>
      </div>
      {coinId && <Diagram id={coinId} />}
    </section>
  )
}

export default CoinDetails;
