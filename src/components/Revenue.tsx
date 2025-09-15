import React, { useEffect, useState } from 'react';
import IncomeTrendChart from './IncomeTrendChart';

const Revenue = () => {
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [paymentAwaited, setPaymentAwaited] = useState(0);
  const [paymentOverdue, setPaymentOverdue] = useState(0);

  const animateValue = (targetValue: number, setValue: React.Dispatch<React.SetStateAction<number>>) => {
    let startValue = 0;
    const duration = 1500; 
    const stepTime = 50; 
    const totalSteps = duration / stepTime;
    const stepIncrement = (targetValue - startValue) / totalSteps;

    const interval = setInterval(() => {
      startValue += stepIncrement;
      if (startValue >= targetValue) {
        clearInterval(interval);
        startValue = targetValue;
      }
      setValue(Math.round(startValue)); 
    }, stepTime);
  };

  useEffect(() => {
    
    setTimeout(() => {
      const targetTotalEarnings = 12500;
      const targetPaymentAwaited = 25000;
      const targetPaymentOverdue = 25000;
      
      animateValue(targetTotalEarnings, setTotalEarnings);
      animateValue(targetPaymentAwaited, setPaymentAwaited);
      animateValue(targetPaymentOverdue, setPaymentOverdue);
    }, 500);
  }, []);

  return (
    <div className="flex items-center flex-wrap justify-between gap-2 lg:gap-5 my-4">
      <div className="w-full mx-auto h-auto rounded-[16px] p-2 border border-[#F2F2F2]">
        <p className="text-primary-gray text-sm lg:text-xl">Total Earnings</p>
        <h1 className="text-xl font-bold my-2 text-primary-purple">
          ${totalEarnings.toLocaleString()}
        </h1>
      </div>
      <div className="w-[48%] lg:w-[49%] h-auto rounded-[16px] p-2 border border-[#F2F2F2]">
        <p className="text-primary-gray text-sm lg:text-xl">Payment Awaited</p>
        <h1 className="text-xl font-bold my-2 text-primary-purple">
          ${paymentAwaited.toLocaleString()}
        </h1>
      </div>
      <div className="w-[48%] lg:w-[49%] h-auto rounded-[16px] p-2 border border-[#F2F2F2]">
        <p className="text-primary-gray text-sm lg:text-xl">Payment Overdue</p>
        <h1 className="text-xl font-bold my-2 text-primary-purple">
          ${paymentOverdue.toLocaleString()}
        </h1>
      </div>
      <IncomeTrendChart />
    </div>
  );
};

export default Revenue;
