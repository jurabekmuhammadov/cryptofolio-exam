import { X } from 'lucide-react'
import c1 from "../../assets/c-1.png"
const CoinCard = () => {
    return (
        <div className='rounded-xl  bg-zinc-700 flex items-center justify-between px-2 py-1 md:p-4 md:flex md:flex-col md:gap-4 md:items-center'>
            <div className='flex items-center gap-1'>
                <img src={c1} alt='coinimage' width={80} height={80} className='w-11 h-11 md:w-16 md:h-16 lg:w-20 lg:h-20' />
                <span className='text-white text-sm font-medium text-center md:hidden'>₹ 3,045,665.00</span>
            </div>
            <div className='hidden items-center md:flex md:flex-col md:items-center md:justify-center md:gap-2'>
                <span className='text-white text-lg font-medium text-center'>₹ 3,045,665.00</span>
                <button className='text-white bg-red-500 py-1 px-4 rounded-md'>Remove</button>
            </div>
            <button className='flex items-center justify-center md:hidden'><X size={20} color='red' />{ }</button>
        </div>
    )
}

export default CoinCard