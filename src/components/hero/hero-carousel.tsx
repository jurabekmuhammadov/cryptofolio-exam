import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../components/ui/carousel";
import { useEffect, useRef, useState } from "react";

export function CarouselPlugin() {
    const [coins, setCoins] = useState([])
    const plugin = useRef(
        Autoplay({ delay: 2500, stopOnMouseEnter: true, stopOnInteraction: false })
    );

    const getAllCoins = async () => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=${100}&page=${1}&sparkline=false&price_change_percentage=24h`);
            const data = await response.json();
            setCoins(data)
        } catch (error) {
            console.error('Failed to fetch coins data:', error);
        }
    };

    useEffect(() => {
        getAllCoins()
    }, [coins])

    const groupArray = (data: any, size: any) => {
        const result = [];
        for (let i = 0; i < data.length; i += size) {
            result.push(data.slice(i, i + size));
        }
        return result;
    };

    const groupedCoins = groupArray(coins, 4);

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="w-full">
                {groupedCoins.map((coinGroup, index) => (
                    <CarouselItem key={index} className="flex items-center justify-around">
                        {coinGroup.map((coin: any, idx: any) => {
                            return (
                                <div key={coin.id} className='flex flex-col items-center gap-1 md:gap-3 cursor-pointer group'>
                                    <img src={coin.image} alt={coin.name} className='w-12 h-12 md:w-20 md:h-20' />
                                    <div className='text-center'>
                                        <p className='text-white font-medium uppercase text-xs sm:text-sm md:text-base leading-5 md:leading-6'>
                                            <span>{coin.symbol.toUpperCase()}</span>
                                            <span className={`text-${coin.price_change_percentage_24h > 0 ? 'green' : 'red'}-500`}>
                                                {coin.price_change_percentage_24h > 0 ? `+${coin.price_change_percentage_24h}%` : `${coin.price_change_percentage_24h}%`}
                                            </span>
                                        </p>
                                        <p className='font-semibold text-sm sm:text-base md:text-lg text-white leading-5 md:leading-6'>
                                            $ {coin.current_price.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
