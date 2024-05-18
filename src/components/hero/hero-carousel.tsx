import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import c1 from "../../assets/c-1.png";
import c2 from "../../assets/c-2.png";
import c3 from "../../assets/c-3.png";
import c4 from "../../assets/c-4.png";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../components/ui/carousel"

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnMouseEnter: true, stopOnInteraction: false })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="w-full">
                <CarouselItem className="flex items-center justify-around">
                    <div className='flex flex-col items-center gap-1 md:gap-3 cursor-pointer group'>
                        <img src={c1} alt='cimage' className='w-12 h-12 md:w-20 md:h-20 transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110' />
                        <div className='text-center'>
                            <p className='text-white font-medium uppercase text-xs sm:text-sm md:text-base leading-5 md:leading-6'>ETH <span className='text-green-400'>+1.66%</span></p>
                            <p className='font-semibold text-sm sm:text-base md:text-lg text-white leading-5 md:leading-6'>₹ 159,249.00</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-1 md:gap-3 cursor-pointer group'>
                        <img src={c2} alt='cimage' className='w-12 h-12 md:w-20 md:h-20 transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110' />
                        <div className='text-center'>
                            <p className='text-white font-medium uppercase text-xs sm:text-sm md:text-base leading-5 md:leading-6'>XRP <span className='text-green-400'>+3.21%</span></p>
                            <p className='font-semibold text-sm sm:text-base md:text-lg text-white leading-5 md:leading-6'>₹ 58.08</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-1 md:gap-3 cursor-pointer group'>
                        <img src={c3} alt='cimage' className='w-12 h-12 md:w-20 md:h-20 transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110' />
                        <div className='text-center'>
                            <p className='text-white font-medium uppercase text-xs sm:text-sm md:text-base leading-5 md:leading-6'>SOL <span className='text-green-400'>+2.45%</span></p>
                            <p className='font-semibold text-sm sm:text-base md:text-lg text-white leading-5 md:leading-6'>₹ 3,730.92</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-1 md:gap-3 cursor-pointer group'>
                        <img src={c4} alt='cimage' className='w-12 h-12 md:w-20 md:h-20 transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110' />
                        <div className='text-center'>
                            <p className='text-white font-medium uppercase text-xs sm:text-sm md:text-base leading-5 md:leading-6'>BNB <span className='text-green-400'>+1.68%</span></p>
                            <p className='font-semibold text-sm sm:text-base md:text-lg text-white leading-5 md:leading-6'>₹ 20,780.00</p>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="flex items-center justify-around">
                    <div className='flex flex-col items-center gap-1 md:gap-3 cursor-pointer group'>
                        <img src={c1} alt='cimage' className='w-12 h-12 md:w-20 md:h-20 transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110' />
                        <div className='text-center'>
                            <p className='text-white font-medium uppercase text-xs sm:text-sm md:text-base leading-5 md:leading-6'>ETH <span className='text-green-400'>+1.66%</span></p>
                            <p className='font-semibold text-sm sm:text-base md:text-lg text-white leading-5 md:leading-6'>₹ 159,249.00</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-1 md:gap-3 cursor-pointer group'>
                        <img src={c2} alt='cimage' className='w-12 h-12 md:w-20 md:h-20 transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110' />
                        <div className='text-center'>
                            <p className='text-white font-medium uppercase text-xs sm:text-sm md:text-base leading-5 md:leading-6'>XRP <span className='text-green-400'>+3.21%</span></p>
                            <p className='font-semibold text-sm sm:text-base md:text-lg text-white leading-5 md:leading-6'>₹ 58.08</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-1 md:gap-3 cursor-pointer group'>
                        <img src={c3} alt='cimage' className='w-12 h-12 md:w-20 md:h-20 transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110' />
                        <div className='text-center'>
                            <p className='text-white font-medium uppercase text-xs sm:text-sm md:text-base leading-5 md:leading-6'>SOL <span className='text-green-400'>+2.45%</span></p>
                            <p className='font-semibold text-sm sm:text-base md:text-lg text-white leading-5 md:leading-6'>₹ 3,730.92</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-1 md:gap-3 cursor-pointer group'>
                        <img src={c4} alt='cimage' className='w-12 h-12 md:w-20 md:h-20 transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110' />
                        <div className='text-center'>
                            <p className='text-white font-medium uppercase text-xs sm:text-sm md:text-base leading-5 md:leading-6'>BNB <span className='text-green-400'>+1.68%</span></p>
                            <p className='font-semibold text-sm sm:text-base md:text-lg text-white leading-5 md:leading-6'>₹ 20,780.00</p>
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}