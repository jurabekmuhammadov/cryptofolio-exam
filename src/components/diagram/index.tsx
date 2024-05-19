import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

interface SeriesData {
    name: string;
    data: { x: Date; y: number }[];
}

const Diagram = ({ id }: { id: string }) => {
    const [series, setSeries] = useState<SeriesData[]>([]);
    const [activeButton, setActiveButton] = useState<number>(1);
    const [options] = useState<ApexCharts.ApexOptions>({
        chart: {
            type: 'area',
            stacked: false,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        title: {
            text: `Coin Price Movement`,
            align: 'left'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            labels: {
                formatter: function (val: number) {
                    return val.toFixed(2);
                },
            },
            title: {
                text: 'Price (USD)'
            },
        },
        xaxis: {
            type: 'datetime',
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val: number) {
                    return val.toFixed(2);
                }
            }
        }
    });

    const fetchData = async (days: number) => {
        try {
            const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
                params: {
                    vs_currency: 'usd',
                    days: days.toString(),
                }
            });

            const prices = response.data.prices.map((price: [number, number]) => {
                return { x: new Date(price[0]), y: price[1] };
            });

            setSeries([{
                name: 'Price',
                data: prices
            }]);
        } catch (error) {
            console.error('Error fetching data from CoinGecko:', error);
        }
    };

    useEffect(() => {
        fetchData(1);
    }, [id]);

    const handleButtonClick = (days: number) => {
        fetchData(days);
        setActiveButton(days);
    };

    return (
        <div className='w-full h-full flex flex-col  pt-5 sm:pt-8 lg:pl-10 gap-5'>
            <ReactApexChart options={options} series={series} type="area" height="" />
            <div className='flex items-center gap-2 sm:gap-5 lg:gap-9'>
                <button className={`border border-sky-300 outline-none rounded-md text-xs sm:text-sm lg:text-base py-2 lg:py-2.5 w-1/4 font-bold text-left px-2 lg:px-5 ${activeButton === 1 ? 'bg-sky-300 text-gray-900' : 'text-white bg-inherit'}`} onClick={() => handleButtonClick(1)}>24 Hours</button>
                <button className={`border border-sky-300 outline-none rounded-md text-xs sm:text-sm lg:text-base py-2 lg:py-2.5 w-1/4 font-bold text-left px-2 lg:px-5 ${activeButton === 30 ? 'bg-sky-300 text-gray-900' : 'text-white bg-inherit'}`} onClick={() => handleButtonClick(30)}>30 Days</button>
                <button className={`border border-sky-300 outline-none rounded-md text-xs sm:text-sm lg:text-base py-2 lg:py-2.5 w-1/4 font-bold text-left px-2 lg:px-5 ${activeButton === 90 ? 'bg-sky-300 text-gray-900' : 'text-white bg-inherit'}`} onClick={() => handleButtonClick(90)}>3 Months</button>
                <button className={`border border-sky-300 outline-none rounded-md text-xs sm:text-sm lg:text-base py-2 lg:py-2.5 w-1/4 font-bold text-left px-2 lg:px-5 ${activeButton === 365 ? 'bg-sky-300 text-gray-900' : 'text-white bg-inherit'}`} onClick={() => handleButtonClick(365)}>1 Year</button>
            </div>
        </div>
    );
}

export default Diagram;
