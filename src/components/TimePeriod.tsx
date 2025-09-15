import { CalendarDays } from 'lucide-react';
import {useEffect, useState} from 'react';

const TimePeriod = () => {
    const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const today = new Date();

    const formatDate = (date: Date): string => {
        return date.toISOString().split('T')[0];
    };

    const handlePeriodSelect = (period: string = '1M') => {
        const start: Date = new Date();

        switch (period) {
            case '1M':
                start.setMonth(today.getMonth() - 1);
                break;
            case '3M':
                start.setMonth(today.getMonth() - 3);
                break;
            case '1Y':
                start.setFullYear(today.getFullYear() - 1);
                break;
            case 'custom':
                break;
            default:
                return;
        }

        setSelectedPeriod(period);

        if (period !== 'custom') {
            setStartDate(formatDate(start));
            setEndDate(formatDate(today));
        }
    };

    useEffect(() => {
        handlePeriodSelect('1M')
    }, [])

    return (
        <div className='w-full mx-auto h-auto rounded-[16px] p-2 border border-[#F2F2F2]'>
            <div className="timePeriodHeader flex justify-between items-center mb-2">
                <p className='text-primary-gray text-sm w-[40%] lg:text-xl'>Time Period</p>
                <div className="dates flex justify-between lg:justify-end gap-2 w-[60%]">
                    <input
                        type="date"
                        className='text-xs lg:text-sm text-primary-gray w-[50%] lg:w-[fit-content]'
                        value={startDate}
                        onChange={(e) => {
                            setStartDate(e.target.value);
                            setSelectedPeriod('custom');
                        }}
                        disabled={selectedPeriod !== 'custom'}
                    />
                    <input
                        type="date"
                        className='text-xs lg:text-sm text-primary-gray w-[50%] lg:w-[fit-content]'
                        value={endDate}
                        onChange={(e) => {
                            setEndDate(e.target.value);
                            setSelectedPeriod('custom');
                        }}
                        disabled={selectedPeriod !== 'custom'}
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
                <button onClick={() => handlePeriodSelect("1M")} className={`px-[12px] py-[4px] rounded-[16px] whitespace-nowrap text-primary-gray cursor-pointer border ${selectedPeriod === "1M" ? 'border-[#F3E8FF] bg-backgroundGradient' : 'border-[#f2f2f2]'}`}>
                    <span className={`text-sm ${selectedPeriod === "1M" ? 'bg-primaryGradient bg-clip-text text-transparent' : ""}`}>1 Month</span>
                </button>
                <button onClick={() => handlePeriodSelect("3M")} className={`px-[12px] py-[4px] border rounded-[16px] whitespace-nowrap text-primary-gray cursor-pointer ${selectedPeriod === "3M" ? 'border-[#F3E8FF] bg-backgroundGradient' : 'border-[#f2f2f2]'}`}>
                    <span className={`text-sm ${selectedPeriod === "3M" ? 'bg-primaryGradient bg-clip-text text-transparent' : ""}`}>3 Months</span>
                </button>
                <button onClick={() => handlePeriodSelect("1Y")} className={`px-[12px] py-[4px] border rounded-[16px] whitespace-nowrap text-primary-gray cursor-pointer flex items-center gap-2 ${selectedPeriod === "1Y" ? 'border-[#F3E8FF] bg-backgroundGradient' : 'border-[#f2f2f2]'}`}>
                    <span className={`text-sm ${selectedPeriod === "1Y" ? 'bg-primaryGradient bg-clip-text text-transparent' : ""}`}>1 Year</span>
                    <img src="/Images/1YearIcon.svg" alt="" />
                </button>
                <button onClick={() => handlePeriodSelect("custom")} className={`px-[12px] py-[4px] border rounded-[16px] whitespace-nowrap text-primary-gray cursor-pointer flex items-center gap-2 ${selectedPeriod === "custom" ? 'border-[#F3E8FF] bg-backgroundGradient' : 'border-[#f2f2f2]'}`}>
                    <CalendarDays size={20} />
                    <span className={`text-sm ${selectedPeriod === "custom" ? 'bg-primaryGradient bg-clip-text text-transparent' : ""}`}>
                        Custom
                    </span>
                </button>
            </div>
        </div>
    );
};

export default TimePeriod;
