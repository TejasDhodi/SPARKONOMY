import React, { useState } from 'react'
import IncomeTrendChart from './IncomeTrendChart';

const Revenue = () => {
    const [totalEarnings, setTotalEarnings] = useState(12500);
    const [paymentAwaited, setPaymentAwaited] = useState(25000);
    const [paymentOverdue, setPaymentOverdue] = useState(25000);
    return (
        <div className="flex items-center flex-wrap justify-between gap-2 lg:gap-5 my-4">
            <div className='w-full mx-auto h-auto rounded-[16px] p-2 border border-[#F2F2F2]'>
                <p className='text-primary-gray text-sm lg:text-xl'>Total Earnings</p>
                <h1 className='text-xl font-bold my-2 text-primary-purple'>${totalEarnings}</h1>
            </div>
            <div className='w-[48%] lg:w-[49%] h-auto rounded-[16px] p-2 border border-[#F2F2F2]'>
                <p className='text-primary-gray text-sm lg:text-xl'>Payment Awaited</p>
                <h1 className='text-xl font-bold my-2 text-primary-purple'>${paymentAwaited}</h1>
            </div>
            <div className='w-[48%] lg:w-[49%] h-auto rounded-[16px] p-2 border border-[#F2F2F2]'>
                <p className='text-primary-gray text-sm lg:text-xl'>Payment Overdue</p>
                <h1 className='text-xl font-bold my-2 text-primary-purple'>${paymentOverdue}</h1>
            </div>
            <IncomeTrendChart />
        </div>
    )
}

export default Revenue
