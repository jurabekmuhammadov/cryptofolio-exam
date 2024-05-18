import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { useStateManagment } from '../../state-managment/state';

const CoinList = () => {
    const { state } = useStateManagment();

    const formatNumber = (number: number) => {
        if (number >= 1_000_000) {
            return new Intl.NumberFormat('en-US', {
                style: 'decimal',
                minimumFractionDigits: 0
            }).format(number) + 'M';
        }
        else {
            return new Intl.NumberFormat('en-US', {
                style: 'decimal',
                minimumFractionDigits: 0
            }).format(number);
        }
    };



    return (
        <section className='mb-10'>
            <div className="" style={{ maxWidth: "1250px", margin: "0 auto", padding: "0 10px" }}>
                <Table className='overflow-x-auto ' style={{ backgroundColor: "#16171A" }}>
                    <TableHeader className='bg-sky-300'>
                        <TableRow className=''>
                            <TableHead className="font-bold text-gray-900 w-4/12">Coin</TableHead>
                            <TableHead className='font-bold text-gray-900 w-2/12 text-right'>Price</TableHead>
                            <TableHead className='font-bold text-gray-900 w-2/12 text-right'>24h Change</TableHead>
                            <TableHead className="font-bold text-gray-900 w-2/12 text-right">Market Cap</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className='border-b border-zinc-700'>
                        {state.allCoins.map(coin => (
                            <TableRow key={coin.id} className='transition hover:bg-zinc-800 cursor-pointer border-b border-zinc-700'>
                                <TableCell className="font-medium flex items-center gap-4">
                                    <img src={coin.image} alt='coinimage' width={50} height={50} />
                                    <div className='flex flex-col justify-start'>
                                        <span className='text-white font-normal text-xl uppercase'>{coin.symbol}</span>
                                        <span className='text-muted-foreground text-sm capitalize'>{coin.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell className='text-right'>
                                    <span className='font-medium text-white'>$ {coin.current_price}</span>
                                </TableCell>
                                <TableCell className='text-right'>
                                    <div className='flex justify-end items-center gap-4'>
                                        {/* this is add to watchlist button */}
                                        <button type='button' className=''>
                                            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <rect width="26" height="24" fill="url(#pattern0_2_269)" />
                                                <defs>
                                                    <pattern id="pattern0_2_269" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use xlinkHref="#image0_2_269" transform="matrix(0.00923077 0 0 0.01 0.0384615 0)" />
                                                    </pattern>
                                                    <image id="image0_2_269" width="100" height="100" xlinkHref="data:image/png;base64,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" />
                                                </defs>
                                            </svg>
                                            {""}
                                        </button>
                                        {coin.price_change_percentage_24h > 0 ? (
                                            <span className='font-medium text-green-500'>+ {coin.price_change_percentage_24h}%</span>
                                        ) : (
                                            <span className='font-medium text-red-500'>{coin.price_change_percentage_24h}%</span>
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right font-medium text-white uppercase">
                                    <span className='font-medium text-white'>$ {formatNumber(coin.market_cap)}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default CoinList