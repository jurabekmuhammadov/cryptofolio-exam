import { X } from 'lucide-react';
import React from 'react';
import CoinCard from './coin-card';
import { useStateManagment } from '../../state-managment/state';

const WatchList: React.FC = () => {
  const { state, dispatch } = useStateManagment();

  return (
    <div className={`${state.isOpen ? "translate-x-0" : "translate-x-full"} transition shadow-lg shadow-zinc-700 bg-zinc-800 p-4 fixed top-0 right-0 h-screen w-3/4 sm:w-2/4 lg:w-2/5 2xl:w-1/4`}>
      <div>
        <button onClick={() => dispatch({ type: 'TOGGLE' })}>
          <X size={28} color='white' />{ }
        </button>
      </div>
      <h1 className='text-white text-2xl uppercase font-medium text-center mb-4'>Watchlist</h1>
      <div className='flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4'>
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
      </div>
    </div>
  );
}

export default WatchList;
